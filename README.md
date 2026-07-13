# IntentNorth Solutions — Marketing Website

A statically-rendered Next.js marketing and lead-generation site for IntentNorth Solutions. This is a Phase 1
site: it explains services, demonstrates the manual audit process, and captures audit/contact requests by email.
There is no database, no automated analysis, no client dashboard, and no user accounts — every audit and analysis is
performed manually, off-platform.

## Stack

Next.js (App Router) · React · TypeScript (strict) · Tailwind CSS v4 · shadcn-style components (hand-authored, Radix
primitives) · Lucide icons · React Hook Form · Zod · Resend · Cloudflare Turnstile · Plausible Analytics (optional) ·
Playwright.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values you have — see below
npm run dev
```

Open http://localhost:3000. The site runs and is fully navigable with an empty `.env.local` — email sending,
Turnstile, analytics, and booking are all designed to degrade gracefully when unconfigured (details below).

## Environment variables

All variables are documented with inline comments in [`.env.example`](.env.example). Summary:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URLs, sitemap, structured data, OG image URLs. Falls back to a placeholder domain if unset. |
| `CONTACT_EMAIL` | Recommended | Where form submissions are sent. Falls back to a placeholder address if unset. |
| `RESEND_API_KEY` / `RESEND_FROM_EMAIL` | Required in production | Without both set, form submissions fail with an error rather than silently succeeding — see **Email (Resend)** below. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Required in production | Bot protection on both forms. See **Spam protection (Turnstile)** below for the graceful-degradation behavior. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional | Enables Plausible Analytics. The script isn't loaded at all when unset. |
| `NEXT_PUBLIC_BOOKING_URL` | Optional | Enables the "Book a consultation" CTA (Cal.com/Calendly link). Hidden entirely when unset. |

### Email (Resend)

1. Create a account at [resend.com](https://resend.com), verify a sending domain, and generate an API key.
2. Set `RESEND_API_KEY` and `RESEND_FROM_EMAIL` (e.g. `IntentNorth Solutions <hello@yourdomain.com>`, using the
   verified domain).
3. Submissions from `/request-audit` and `/contact` are emailed to `CONTACT_EMAIL`, clearly labeled by form type in
   the subject line (`[Audit Request] …` / `[General Inquiry] …`). An optional confirmation email is also sent to the
   submitter. If either Resend variable is missing, or delivery fails, the server action returns an error and the
   success message is never shown — submissions are never silently dropped, and nothing is stored in a database.

### Spam protection (Turnstile)

Server-side verification lives in [`lib/turnstile.ts`](lib/turnstile.ts); the client widget is
[`components/forms/turnstile-widget.tsx`](components/forms/turnstile-widget.tsx).

- **If both `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` are unset:** the widget doesn't render, and
  server-side verification is skipped — forms rely on the honeypot field alone. This is intentional, so local
  development works before you've set up a Turnstile account.
- **If configured:** the widget renders, a token is required, and the server verifies it against Cloudflare's
  `siteverify` endpoint before accepting the submission. Set both variables before deploying to production — running
  production on honeypot alone is a materially weaker defense.
- The hidden honeypot field is always present on both forms regardless of Turnstile status.

### Analytics (Plausible)

Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to your site's domain as registered in Plausible. When unset, no Plausible script
is injected and `trackEvent()` calls (see [`lib/analytics.ts`](lib/analytics.ts)) are no-ops. Only coarse, non-
identifying event names and props are ever sent — never form contents, emails, names, or URLs.

### Booking link

Set `NEXT_PUBLIC_BOOKING_URL` to an external Cal.com or Calendly scheduling link. The `BookingLink` component
([`components/booking-link.tsx`](components/booking-link.tsx)) renders nothing when this is unset, so no CTA points
nowhere.

## Company information placeholders

Centralized in [`lib/site-config.ts`](lib/site-config.ts) — phone, address, social links, legal entity name, and
founder name/bio are all marked `PLACEHOLDER:` and must be replaced with verified information before launch. The
founder photo placeholder lives directly in [`app/about/page.tsx`](app/about/page.tsx). Legal page content in
`/privacy` and `/imprint` is explicitly marked as requiring professional legal review before launch — none of it
should be treated as complete or compliant as shipped.

## Adding or editing content

This site uses typed local content instead of one hand-written page per item, so every entry is still fully
statically generated (via `generateStaticParams()`) with unique metadata, but adding a new one is a data-file edit,
not a new route.

- **Services** — edit [`lib/services.ts`](lib/services.ts). Add an entry to the `services` array (slug, copy, FAQs,
  etc.) and it automatically gets a page at `/services/[slug]`, a homepage card, and a listing entry. Update
  `relatedSlugs` on other entries if you want cross-links to the new service.
- **Case studies** — edit [`lib/case-studies.ts`](lib/case-studies.ts). The shipped `example-project-structure` entry
  is a clearly labeled demonstration, not a real client result — add a new entry with `isDemonstration: false` once
  you have a real, permissioned case study to publish.
- **Insights articles** — edit [`lib/insights.ts`](lib/insights.ts). Each entry is a list of sections
  (`{ id, heading, paragraphs }`) rendered with a table of contents and Article JSON-LD. Paragraph text can include
  internal links using the token syntax `[[link text|/path]]`.
- **Sample optimization plan** — edit [`lib/sample-plan.ts`](lib/sample-plan.ts) (Website / Social / App tabs on the
  homepage).

## Testing

```bash
npm run lint         # ESLint
npm run type-check   # tsc --noEmit
npm run build         # production build
npx playwright install --with-deps chromium   # first time only
npm run test:e2e      # Playwright end-to-end suite
```

Playwright tests live in [`tests/`](tests/) and cover navigation, the mobile menu, homepage CTAs, both forms'
validation and error handling, sample-plan tabs, keyboard accessibility, one-H1-per-page checks, booking-link
behavior with/without configuration, and Turnstile graceful degradation.

## Production build & deployment

```bash
npm run build
npm run start   # serve the production build locally
```

The site is Vercel-compatible out of the box (static generation for all marketing routes, Server Actions for form
handling, edge runtime for the OG image). Set the environment variables above in your Vercel project before
deploying.

**Vercel plan note:** Vercel's Hobby plan is intended for personal, non-commercial use. Since this is a commercial
business website, deploy it under an appropriate commercial Vercel plan (Pro or Enterprise), not Hobby.

## What this site intentionally does not do

Per Phase 1 scope: no crawling or automated analysis of submitted URLs, no PageSpeed/SEO API calls, no automated
scores or generated reports, no client dashboards, no user accounts/auth, no subscriptions/payments, and no database
storage of form submissions. Audit and contact forms only collect, validate, and email submissions — all review is
performed manually, off-platform.
