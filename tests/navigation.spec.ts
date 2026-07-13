import { test, expect } from "@playwright/test";

const KEY_PAGES = [
  "/",
  "/services",
  "/services/website-seo",
  "/process",
  "/case-studies",
  "/case-studies/example-project-structure",
  "/insights",
  "/insights/how-to-prioritize-seo-improvements",
  "/about",
  "/request-audit",
  "/contact",
  "/privacy",
  "/imprint",
];

test.describe("Primary navigation", () => {
  test("header shows all primary nav links with correct destinations", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Primary" });
    await expect(nav.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/services");
    await expect(nav.getByRole("link", { name: "Process" })).toHaveAttribute("href", "/process");
    await expect(nav.getByRole("link", { name: "Case Studies" })).toHaveAttribute("href", "/case-studies");
    await expect(nav.getByRole("link", { name: "Insights" })).toHaveAttribute("href", "/insights");
    await expect(nav.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
  });

  test("header CTA links to /request-audit", async ({ page }) => {
    await page.goto("/");
    const headerCta = page.locator("header").getByRole("link", { name: "Request an audit" });
    await expect(headerCta).toHaveAttribute("href", "/request-audit");
  });

  test("skip link becomes visible on focus and jumps to main content", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: "Skip to main content" });
    await expect(skipLink).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main-content$/);
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("mobile menu opens, lists nav links, and closes", async ({ page }) => {
    await page.goto("/");
    const openButton = page.getByRole("button", { name: "Open menu" });
    await expect(openButton).toBeVisible();
    await openButton.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("link", { name: "Services" })).toBeVisible();
    await expect(dialog.getByRole("link", { name: "Request an audit" })).toHaveAttribute("href", "/request-audit");

    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(dialog).toBeHidden();
  });

  test("mobile menu is keyboard operable", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toBeHidden();
  });
});

test.describe("Page structure", () => {
  for (const path of KEY_PAGES) {
    test(`${path} responds successfully and has exactly one H1`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status(), `${path} should not error`).toBeLessThan(400);
      await expect(page.locator("h1")).toHaveCount(1);
    });
  }

  test("custom 404 page renders for unknown routes", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/direction/i);
  });
});
