import Link from 'next/link';
import { site } from '@/data/site';
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link className="wordmark" href="/">
          BLUMEA<span>＋</span>
        </Link>
        <p>
          DIGITAL STRATEGY.
          <br />
          PRODUCTS. VENTURES.
        </p>
        <nav aria-label="Footer navigation">
          {site.navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-address">
          <a href={`mailto:${site.email}`}>{site.email} ↗</a>
          <p>
            Dubai
            <br />
            United Arab Emirates
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.company}
        </span>
        <span>
          {Object.entries(site.socials)
            .filter(([, url]) => url)
            .map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label} ↗
              </a>
            ))}
        </span>
        <a href="#main">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
