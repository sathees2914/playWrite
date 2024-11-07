import { test, expect } from "@playwright/test";

test("Assertions", async ({ page }) => {
  // open app url
  await page.goto("https://demo.nopcommerce.com/register");

  //   1) expect(page).toHaveURL()   page has URL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  //   2) expect(page).toHaveTitle()   page has title
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  //   3) expect(locator).toBeVisible()   Element is visible
  const logoElement = await page.locator(".header-logo");
  await expect(logoElement).toBeVisible;

  //    4) expect(locator).toBeEnabled()   Control is enabled
  const searchStoreBox = await page.locator("#small-searchterms");
  await expect(searchStoreBox).toBeEnabled();

  // 5) expect(locator).toBeChecked()    Radio/checkbox is checked

  //   Radio
  const maleRsdioButton = await page.locator("#gender-male");
  await maleRsdioButton.click(); //select radio button
  await expect(maleRsdioButton).toBeChecked();

  //checkBox
  const newsletterCheckbox = await page.locator("#Newsletter");
  await expect(newsletterCheckbox).toBeChecked();

  //6) expect(locator).toBeAttribute  Elemnet has attribute

  const regButton = await page.locator("#register-button");
  await expect(regButton).toHaveAttribute("type", "submit");

  //7) expect(locator).toHaveText()   Element  matches text

  await expect(await page.locator(".page-title h1")).toHaveText("Register");

  // 8) expect(locator).toContainText() Element contain text

  await expect(await page.locator(".page-title h1")).toContainText("Reg");

  //9) expect(locator).toHaveValue(value)

  const emailInput = await page.locator("#Email");
  await emailInput.fill("test@demo.com");
  await expect(emailInput).toHaveValue("test@demo.com");

  //10)  expect(locator).toHaveCount(

  const options = await page.locator('select[name="DateOfBirthMonth"] option');
  await expect(options).toHaveCount(13);
});
