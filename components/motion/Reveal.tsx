'use client';
import { motion, useReducedMotion } from 'framer-motion';
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduce ? {} : { y: [28, 0], opacity: [0.6, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function AnimatedText({
  children,
  className = '',
}: {
  children: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={`text-mask ${className}`}>
      <motion.span
        className="text-reveal"
        initial={false}
        animate={reduce ? {} : { y: ['105%', '0%'] }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
