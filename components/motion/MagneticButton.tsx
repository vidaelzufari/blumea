'use client';
import Link from 'next/link';
import { useRef } from 'react';
export function MagneticButton({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <Link
      ref={ref}
      href={href}
      className={`text-link ${className}`}
      onPointerMove={(e) => {
        if (
          e.pointerType !== 'mouse' ||
          window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
          return;
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.035}px,${(e.clientY - rect.top - rect.height / 2) * 0.08}px)`;
      }}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = '';
      }}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
