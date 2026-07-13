import { test, expect } from "@playwright/test";

test.describe("Homepage CTAs", () => {
  test("hero primary CTA points to /request-audit", async ({ page }) => {
    await page.goto("/");
    const primaryCta = page.getByRole("link", { name: "Request an audit" }).first();
    await expect(primaryCta).toHaveAttribute("href", "/request-audit");
  });

  test("hero secondary CTA points to /services", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Explore our services" })).toHaveAttribute("href", "/services");
  });

  test("final CTA button points to /request-audit", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Request your audit" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("link", { name: "Request your audit" })).toHaveAttribute("href", "/request-audit");
  });

  test("every 'Request an audit' style CTA on the homepage resolves to /request-audit", async ({ page }) => {
    await page.goto("/");
    const links = page.getByRole("link", { name: /request (an|your) audit/i });
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(links.nth(i)).toHaveAttribute("href", "/request-audit");
    }
  });
});

test.describe("Sample optimization plan", () => {
  test("switching category tabs changes visible content", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#sample-plan");
    await section.scrollIntoViewIfNeeded();

    await expect(section.getByText("Immediate wins").first()).toBeVisible();

    const socialTab = section.getByRole("tab", { name: "Social Media" });
    await socialTab.click();
    await expect(socialTab).toHaveAttribute("aria-selected", "true");
    await expect(section.getByText(/Update outdated bios/)).toBeVisible();

    const appTab = section.getByRole("tab", { name: "App" });
    await appTab.click();
    await expect(appTab).toHaveAttribute("aria-selected", "true");
    await expect(section.getByText(/Rewrite the app subtitle/)).toBeVisible();
  });

  test("sample plan section notes it does not analyze visitor data", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/does not analyze your website/i)).toBeVisible();
  });
});
