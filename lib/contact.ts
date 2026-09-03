import { topics } from '@/data/site';
export type ContactData = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  website: string;
};
export type ContactErrors = Partial<Record<keyof ContactData, string>>;
export function validateContact(input: Record<string, unknown>): {
  data: ContactData;
  errors: ContactErrors;
} {
  const data = Object.fromEntries(
    [
      'name',
      'company',
      'role',
      'email',
      'phone',
      'topic',
      'message',
      'website',
    ].map((key) => [
      key,
      typeof input[key] === 'string' ? (input[key] as string).trim() : '',
    ]),
  ) as ContactData;
  const errors: ContactErrors = {};
  for (const field of [
    'name',
    'company',
    'role',
    'email',
    'topic',
    'message',
  ] as const) {
    if (!data[field]) errors[field] = 'Please complete this field.';
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Enter a valid email address.';
  for (const field of ['name', 'company', 'role'] as const) {
    if (data[field].length > 150)
      errors[field] = 'Use 150 characters or fewer.';
  }
  if (data.email.length > 254) errors.email = 'Use 254 characters or fewer.';
  if (
    data.phone &&
    (data.phone.length > 40 || !/^[+\d\s().-]{6,40}$/.test(data.phone))
  )
    errors.phone = 'Enter a valid phone number.';
  if (data.topic && !topics.includes(data.topic))
    errors.topic = 'Choose a topic from the list.';
  if (data.message && data.message.length < 10)
    errors.message = 'Tell us a little more (at least 10 characters).';
  if (data.message.length > 5000)
    errors.message = 'Use 5,000 characters or fewer.';
  return { data, errors };
}
