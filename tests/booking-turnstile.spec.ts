import { test, expect } from "@playwright/test";

// This suite runs against a build with NEXT_PUBLIC_BOOKING_URL and the
// Turnstile keys left unset, which is the expected local/CI default. It
// verifies the graceful-degradation behavior described in the README.

test.describe("Booking link — unconfigured", () => {
  test("no 'Book a consultation' CTA renders anywhere on the homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: /book a consultation/i })).toHaveCount(0);
  });

  test("no booking CTA renders on the request-audit page", async ({ page }) => {
    await page.goto("/request-audit");
    await expect(page.getByRole("link", { name: /book a consultation/i })).toHaveCount(0);
  });

  test("no booking CTA renders on the contact page", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByRole("link", { name: /book a consultation/i })).toHaveCount(0);
  });
});

test.describe("Turnstile — unconfigured (graceful degradation)", () => {
  test("audit form renders without a Turnstile challenge and remains submittable", async ({ page }) => {
    await page.goto("/request-audit");
    await expect(page.locator('script[src*="challenges.cloudflare.com"]')).toHaveCount(0);
    // Form must still be usable (honeypot-only fallback), i.e. the submit button is present and enabled.
    const submit = page.getByRole("button", { name: "Request an audit" });
    await expect(submit).toBeEnabled();
  });

  test("contact form renders without a Turnstile challenge and remains submittable", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator('script[src*="challenges.cloudflare.com"]')).toHaveCount(0);
    const submit = page.getByRole("button", { name: "Send message" });
    await expect(submit).toBeEnabled();
  });

  test("honeypot field is present but positioned off-screen and out of tab order on both forms", async ({
    page,
  }) => {
    await page.goto("/request-audit");
    const honeypot = page.locator("#website");
    await expect(honeypot).toHaveAttribute("tabindex", "-1");
    const box = await honeypot.boundingBox();
    expect(box?.x).toBeLessThan(0);

    await page.goto("/contact");
    const contactHoneypot = page.locator("#contact-website");
    await expect(contactHoneypot).toHaveAttribute("tabindex", "-1");
    const contactBox = await contactHoneypot.boundingBox();
    expect(contactBox?.x).toBeLessThan(0);
  });
});
