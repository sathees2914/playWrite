const { test, expect } = require("@playwright/test");

test("Alert with OK", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Enabling Dialog Window handler
  await page.click("//button[normalize-space()='Alert']");

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am a alert box!");
    await dialog.accept();
  });

  await page.waitForTimeout(5000);
});

test("Confirmation Dailog-Alert with OK and Cancel", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.click("//button[normalize-space()='Confirm Box']");

  // Enabling Dialog Window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept(); // close by using ok button
    // await dialog.dismiss() // close by using cancel
  });

  await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed OK!");
  await page.waitForTimeout(5000);
});

test("Prompt Dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.click("//button[normalize-space()='Confirm Box']");

  // Enabling dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("please enter your name:");
    expect(dialog.defaultValue()).toContain("sathees kumar");
    await dialog.accept("sathees");
  });

  await expect(page.locator('//p[@id="demo"')).toHaveText(
    "Hello sathees,How are you today?"
  );

  await page.waitForTimeout(5000);
});
