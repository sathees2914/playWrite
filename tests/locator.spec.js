// const {test,expect} = require('@playwright/test')

import { test, expect } from "@playwright/test";

test("Locator", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  //  click on login button - property
  //   await page.locator("id=login2").click();   or
  await page.click("id=login2");

  //    provide username - css
  //  await page.locator('#loginusename').fill("pavanol")
  await page.fill("#loginusername", "pavanol");
  //   await page.type("#loginusername", "pavanol");

  //   provide password -css
  await page.fill("input[id='loginpassword']", "test@123");

  // click on login button
  await page.click("button[onclick='logIn()']");

  //  verify logout link presence
  const logoutlink = await page.locator("//a[normalize-space()='Log out']");
  await expect(logoutlink).toBeVisible();

  //    close the webpage
  await page.close();
});
