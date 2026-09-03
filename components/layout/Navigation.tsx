'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { site } from '@/data/site';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
export function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="navigation">
      <Link aria-label="BLUMEA home" className="wordmark" href="/">
        BLUMEA<span>＋</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {site.navigation.slice(0, 3).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={path === item.href ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-contact" href="/contact">
        LET’S TALK <span aria-hidden="true">↗</span>
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="menu-trigger">
          MENU <span aria-hidden="true">＋</span>
        </SheetTrigger>
        <SheetContent className="mobile-menu" showCloseButton={false}>
          <div className="menu-top">
            <SheetTitle className="wordmark">BLUMEA</SheetTitle>
            <SheetClose className="menu-close">CLOSE ×</SheetClose>
          </div>
          <SheetDescription className="menu-description">
            Digital strategy. Products. Ventures.
          </SheetDescription>
          <nav aria-label="Mobile navigation">
            {site.navigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={path === item.href ? 'page' : undefined}
              >
                <small>0{i + 1}</small>
                {item.label}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
          <div className="menu-footer">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>DUBAI / UNITED ARAB EMIRATES</span>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
