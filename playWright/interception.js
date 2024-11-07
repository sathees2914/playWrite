const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newPage();

  await page.route("**/*.{png,jpg,jpeg,gif}", (route) => route.abort());

  await page.goto("https://amazon.in/");
  await page.screenshot({ path: "interception.jpg" });
})();
