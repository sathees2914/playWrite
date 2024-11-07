const { test, expect } = require("@playwright/test");

test("Hard and Soft assertions", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.com");

  // // Hard Assertion
  // await expect(page).toHaveTitle("STORE123");
  // await expect(page).toHaveURL("https://www.demoblaze.com/index.com");
  // await expect(page.locator(".navbar-brand")).toBeVisible();

  //   Soft Assertions
  await expect.soft(page).toHaveTitle("STORE123");
  await expect(page).toHaveURL("https://www.demoblaze.com/index.com");
  await expect(page.locator(".navbar-brand")).toBeVisible();
});
