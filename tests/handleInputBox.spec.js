const { test, expect } = require("@playwright/test");

test("test", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  //Inputbox - firstname

  await expect(await page.locator("#username")).toBeVisible();
  await expect(await page.locator("#username")).toBeEmpty();
  await expect(await page.locator("#username")).toBeEditable();
  await expect(await page.locator("#username")).toBeEnabled();

  await page.locator("#username").fill("student");
  // page.fill('//input[@id="name"]',"sathees")

  await page.waitForTimeout(5000);
});
