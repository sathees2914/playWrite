const { chromium } = require("playwright");

(async () => {
  // browser
  const browser = await chromium.launch();
  //newTab
  const page = await browser.newPage();
  //navigate to new page
  await page.goto("https://www.youtube.com/");
  //screenshoot
  await page.screenshot({ path: "youtubePage.jpg", fullPage: true });
  //close
  await browser.close();
})();
