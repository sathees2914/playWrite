const { test, expect } = require("@playwright/test");

test("BoostStarp Dropdown", async ({ page }) => {
  await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

  await page.locator(".multiselect").click(); //click the dropdown

  // 1
  const options = await page.locator("ul>li label input");
  await expect(options).toHaveCount(11);

  // 2
  const option = await page.$$("ul>li label input");
  await expect(option).toBe(11);

  await page.waitForTimeout(5000);

  // 3 multi select
  const opts = await page.$$("ul>li label");
  for (let options of opts) {
    const value = await options.textContent();
    //   console.log("value is ", value);
    if (value.includes("Angluar") || value.includes("Jave")) {
      await options.click();
    }
  }

  // 4  delete option
  const opt = await page.$$("ul>li label ");
  for (let option of opt) {
    const value = await option.textContent();
    // console.log("value is",value)
    if (value.includes("Angluar") || value.includes("Java")) {
      await option.click();
    }
  }

  await page.waitForTimeout(5000);
});
