export const site = {
  company: 'BLUMEA LLC',
  brand: 'BLUMEA',
  email: 'hello@blumea.com',
  location: 'Dubai, United Arab Emirates',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://blumea.com',
  description:
    'Blumea is a Dubai-based digital strategy, product and transformation company helping organisations move from ambition to execution through advisory, fractional leadership and venture building.',
  navigation: [
    { label: 'Advisory', href: '/advisory' },
    { label: 'Ventures', href: '/ventures' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  socials: { linkedin: '', instagram: '' },
};
export const services = [
  {
    id: 'transformation',
    title: 'Digital transformation',
    description:
      'Turn digital ambition into clear priorities, operating models and roadmaps your organisation can execute.',
    items: [
      'Transformation strategy',
      'Digital maturity assessment',
      'Transformation roadmap',
      'Operating model design',
      'Transformation governance',
      'Executive advisory',
      'Digital portfolio prioritisation',
    ],
  },
  {
    id: 'product',
    title: 'Product strategy',
    description:
      'Find the right opportunity. Shape the experience, roadmap and commercial logic behind a product that matters.',
    items: [
      'Product vision & strategy',
      'Product portfolio',
      'Product roadmaps',
      'MVP definition',
      'Customer journey',
      'Product operating model',
      'Product organisation design',
    ],
  },
  {
    id: 'delivery',
    title: 'Digital delivery',
    description:
      'Connect teams, technology and delivery discipline to move complex initiatives from decision to release.',
    items: [
      'Delivery governance',
      'Programme leadership',
      'Agile operating models',
      'Release management',
      'QA strategy',
      'Cross-functional team design',
      'Vendor governance',
      'Offshore delivery models',
    ],
  },
  {
    id: 'leadership',
    title: 'Fractional leadership',
    description:
      'Senior digital and product leadership, embedded in your organisation at the level and pace you need.',
    items: [
      'Fractional Head of Digital',
      'Fractional Product Director',
      'Digital Transformation Advisor',
      'Product & Delivery Advisor',
      'Interim Digital Leadership',
    ],
  },
  {
    id: 'venture',
    title: 'Venture building',
    description:
      'Discover, validate, design and launch digital businesses. Then stay close to what happens next.',
    items: [
      'Opportunity discovery',
      'Customer validation',
      'Product design',
      'Technology delivery',
      'Launch & learning',
    ],
  },
];
export const steps = [
  [
    'Diagnose',
    'Understand the business, product, customers, organisation and constraints.',
  ],
  [
    'Define',
    'Translate priorities into a clear digital, product or transformation direction.',
  ],
  [
    'Structure',
    'Create the operating model, governance, teams and delivery approach.',
  ],
  [
    'Execute',
    'Turn strategy into shipped products, releases and measurable outcomes.',
  ],
  [
    'Scale',
    'Build repeatable internal capability that survives beyond the engagement.',
  ],
];
export const expertise = [
  'Digital transformation',
  'Product strategy',
  'Digital products',
  'AI products',
  'Marketplaces',
  'E-commerce',
  'Customer experience',
  'Product operating models',
  'Delivery governance',
  'Agile delivery',
  'QA strategy',
  'Release management',
  'Vendor management',
  'Offshore delivery',
  'Digital operations',
  'Transformation PMO',
];
export const ventures = [
  {
    id: 'juvia',
    name: 'Juvia',
    category: 'Family tech',
    strap: 'Less deciding. More living.',
    description:
      'An AI-powered family meal planning platform designed to simplify everyday decisions around what families should cook and eat.',
    detail:
      'Juvia explores how intelligent planning, personalisation and practical household tools can take the daily effort out of feeding a family. Its direction brings together family preferences, dietary needs and shopping support.',
    theme: 'juvia',
  },
  {
    id: 'petit',
    name: 'Petit Corner Shop',
    category: 'E-commerce',
    strap: 'Small things. A world of possibility.',
    description:
      'A curated e-commerce destination for thoughtful products for young children and modern families.',
    detail:
      'Built around learning, independence, creativity and play, Petit Corner Shop brings a considered perspective to the things families welcome into their everyday lives.',
    theme: 'petit',
  },
];
export const principles = [
  ['Clarity before', 'complexity.'],
  ['Execution over', 'presentation.'],
  ['Customer value over', 'feature volume.'],
  ['Strong teams over', 'heroic individuals.'],
  ['Technology in service of', 'business outcomes.'],
  ['Build capability,', 'not dependency.'],
];
export const engagementModels = [
  [
    'Advisory',
    'Senior strategic guidance around specific challenges and decisions.',
  ],
  [
    'Fractional',
    'Embedded senior leadership for a defined number of days per month.',
  ],
  [
    'Project',
    'Defined transformation, product or operating model engagements.',
  ],
  [
    'Interim',
    'Temporary senior leadership during transition or organisational change.',
  ],
];
export const topics = [
  'Digital Transformation',
  'Product Strategy',
  'Fractional Leadership',
  'Digital Delivery',
  'Venture / Partnership',
  'Other',
];
