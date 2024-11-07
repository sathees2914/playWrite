const { test, expect } = require("@playwright/test");

test("handle nested frame", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frames_3.html",
  });
  // frame3.locator("input[name='mytest3']").fill('welcome')

  // nested frame
  const childFrames = await frame3.childFrames();
  await childFrames[0].locator("//*[@id='15']/div[3]/div").check();

  await page.waitForTimeout(5000);
});
