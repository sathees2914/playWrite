const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://practicetestautomation.com/practice-test-login/");

  await page.click("#username");

  await page.fill("#username", "student");

  await page.click("#password");

  await page.fill("#password", "Password123");

  await page.click("#submit");

  await page.screenshot({ path: "login successfully.jpg" });

  await page.close();
})();
