import { test, expect } from "@playwright/test";

test.describe("Audit request form", () => {
  test("shows validation errors when submitted empty", async ({ page }) => {
    await page.goto("/request-audit");
    await page.getByRole("button", { name: "Request an audit" }).click();

    await expect(page.getByText("Enter your full name.")).toBeVisible();
    await expect(page.getByText("Enter a valid work email address.")).toBeVisible();
    await expect(page.getByText("Enter your company name.")).toBeVisible();
    await expect(page.getByText("You must consent to be contacted about your request.")).toBeVisible();
  });

  test("rejects an invalid email address", async ({ page }) => {
    await page.goto("/request-audit");
    await page.getByLabel("Work email").fill("not-an-email");
    await page.getByRole("button", { name: "Request an audit" }).click();
    await expect(page.getByText("Enter a valid work email address.")).toBeVisible();
  });

  test("submitting a valid form without email configured surfaces an error, not a false success", async ({
    page,
  }) => {
    await page.goto("/request-audit");

    await page.getByLabel("Full name").fill("Jordan Rivers");
    await page.getByLabel("Work email").fill("jordan@example.com");
    await page.getByLabel("Company name").fill("Example Co");
    await page.getByLabel("Website, app, or social profile URL").fill("https://example.com");
    await page.getByLabel("Service of interest").selectOption("website-seo");
    await page.getByLabel("Primary business goal").fill("Increase qualified organic traffic this year.");
    await page
      .getByLabel("Current challenge")
      .fill("Rankings have plateaued and we are not sure why.");
    await page.getByLabel("I consent to IntentNorth Solutions contacting me about this request.").check();

    await page.getByRole("button", { name: "Request an audit" }).click();

    // Resend is not configured in this environment, so the server action must
    // return an error rather than a false success message.
    await expect(page.getByRole("alert").filter({ hasText: /something went wrong|couldn't verify/i })).toBeVisible({
      timeout: 10_000,
    });
    await expect(page.getByText(/your request has been received/i)).toHaveCount(0);
  });
});

test.describe("Contact form", () => {
  test("shows validation errors when submitted empty", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Send message" }).click();

    await expect(page.getByText("Enter your full name.")).toBeVisible();
    await expect(page.getByText("Enter a valid email address.")).toBeVisible();
    await expect(page.getByText("Message must be at least 10 characters.")).toBeVisible();
    await expect(page.getByText("You must consent to be contacted.")).toBeVisible();
  });

  test("rejects a too-short message", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel("Message", { exact: true }).fill("short");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByText("Message must be at least 10 characters.")).toBeVisible();
  });
});
