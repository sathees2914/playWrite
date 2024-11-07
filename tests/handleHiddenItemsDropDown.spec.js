const { test, expect } = require("@playwright/test");

test("Handle hidden iems Dropdown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "PIM" }).click();
  await page.waitForTimeout(5000);
  await page.locator("form i").nth(2).click();
  //   await page.getByRole("option", { name: "Account Assistant" }).click();
  await page.waitForTimeout(5000);
  const options = await page.$$("//div[@role='listbox']//span");

  for (let option of options) {
    const jobTitle = await option.textContent();
    //   console.log(jobtitle);
    if (jobTitle.includes("QA Engineer")) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
