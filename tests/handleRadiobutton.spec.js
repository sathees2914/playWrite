const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("handle radio button", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  //  radio button
  await page.locator("input[value='radio1']").check(); // radio1
  // await page.check("input[value='radio1']")
  await expect(await page.locator("input[value='radio1']")).toBeChecked();
  await expect(
    await page.locator("input[value='radio1']").isChecked
  ).toBeTruthy(); //radio1
  await expect(
    await page.locator("input[value='radio2']").isChecked()
  ).toBeFalsy(); // radio2
  await expect(
    await page.locator("input[value='radio3']").isChecked()
  ).toBeFalsy(); // radio3

  await page.waitForTimeout(5000);
});
