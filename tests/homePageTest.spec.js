const { test, expect } = require("@playwright/test"); // export

test("Home page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/"); // open the webpage

  const pageTitle = page.title();
  console.log("page title is", pageTitle); // check the title using javascript

  await expect(page).toHaveTitle("STORE"); // check the title using playwright

  const pageURl = page.url();
  console.log("page URL is", pageURl);

  await expect(page).toHaveURL("https://www.demoblaze.com/");

  await page.close(); // close the webpage
});
