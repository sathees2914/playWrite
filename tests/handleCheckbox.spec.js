const { test, expect } = require("@playwright/test");

test("handle checkBox", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  // single checkBox

  await page.locator("#checkBoxOption1").check();
  //   await page.check("#checkBoxOption1");

  await expect(await page.locator("#checkBoxOption1")).toBeChecked;
  await expect(await page.locator("#checkBoxOption1").isChecked()).toBeTruthy();
  await expect(await page.locator("#checkBoxOption2").isChecked()).toBeFalsy();
  await expect(await page.locator("#checkBoxOption3").isChecked()).toBeFalsy();

  await page.waitForTimeout(5000);

  //   multible checkBox

  const checkBoxLocator = ["#checkBoxOption1", "#checkBoxOption3"];

  for (const locator of checkBoxLocator) {
    await page.locator(locator).check();
  }

  for (const locator of checkBoxLocator) {
    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
    }
  }

  await page.waitForTimeout(5000);
});
