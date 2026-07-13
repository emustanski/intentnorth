import Link from "next/link";
import { siteConfig, footerLinks } from "@/lib/site-config";
import { Logo } from "@/components/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist bg-navy text-white">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{siteConfig.tagline}</p>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Services" links={footerLinks.services} />
          <nav aria-label="Contact">
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white">
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact page
                </Link>
              </li>
              <li>
                <Link href="/request-audit" className="hover:text-white">
                  Request an audit
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <nav aria-label={title}>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-3 text-sm text-white/70">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
