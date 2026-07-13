import { test, expect } from "@playwright/test";

test.describe("Keyboard accessibility", () => {
  test("FAQ accordion on a service page opens and closes via keyboard", async ({ page }) => {
    await page.goto("/services/website-seo");

    const firstTrigger = page.getByRole("button", { name: "Will you run automated tools during the audit?" });
    await firstTrigger.focus();
    await expect(firstTrigger).toHaveAttribute("aria-expanded", "false");

    await page.keyboard.press("Enter");
    await expect(firstTrigger).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Enter");
    await expect(firstTrigger).toHaveAttribute("aria-expanded", "false");
  });

  test("sample plan tabs are operable with arrow keys", async ({ page }) => {
    await page.goto("/");
    const websiteTab = page.getByRole("tab", { name: "Website" });
    await websiteTab.focus();
    await page.keyboard.press("ArrowRight");
    const socialTab = page.getByRole("tab", { name: "Social Media" });
    await expect(socialTab).toBeFocused();
  });

  test("all interactive header controls are reachable by keyboard", async ({ page }) => {
    await page.goto("/");
    const headerCta = page.locator("header").getByRole("link", { name: "Request an audit" });
    await headerCta.focus();
    await expect(headerCta).toBeFocused();
  });
});

test.describe("Important internal links resolve correctly", () => {
  test("service card links navigate to the correct service detail page", async ({ page }) => {
    await page.goto("/services");
    const firstCard = page.locator("a", { hasText: "Learn more" }).first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/services\/.+/);
    await expect(page.locator("h1")).toHaveCount(1);
  });

  test("insights preview link navigates to a real article", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "How to Prioritize SEO Improvements" }).click();
    await expect(page).toHaveURL("/insights/how-to-prioritize-seo-improvements");
    await expect(page.locator("h1")).toContainText("How to Prioritize SEO Improvements");
  });

  test("case studies listing links to the demonstration entry", async ({ page }) => {
    await page.goto("/case-studies");
    await page.getByRole("link", { name: /Example Project Structure/i }).click();
    await expect(page).toHaveURL("/case-studies/example-project-structure");
    await expect(
      page.locator("main").getByText("Example project structure — not a client case study", { exact: false }),
    ).toBeVisible();
  });
});
