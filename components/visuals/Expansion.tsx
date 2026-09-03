'use client';
import { useRef } from 'react';
export function Expansion({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`expansion ${className}`}
      aria-hidden="true"
      onPointerMove={(e) => {
        if (
          e.pointerType !== 'mouse' ||
          window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
          return;
        const box = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty(
          '--tilt',
          `${(e.clientX - box.left - box.width / 2) / 30}deg`,
        );
      }}
      onPointerLeave={() => ref.current?.style.setProperty('--tilt', '0deg')}
    >
      <div className="orbit">
        {Array.from({ length: 18 }, (_, i) => (
          <i key={i} style={{ transform: `rotate(${i * 10}deg)` }} />
        ))}
      </div>
      <span className="form-caption">FIG. 01 — CONTINUOUS EXPANSION</span>
    </div>
  );
}
