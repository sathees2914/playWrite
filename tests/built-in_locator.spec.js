const { test, expect } = require("@playwright/test");

test("Built-inLocator", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // page.getByAltText() - to locate an element, usually image,by its text alternative. this used Alt
  const logo = await page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  // page.getByPlaceholder() - to locate an input by placeholder. this used test box in placeholder
  await page.getByPlaceholder("username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  //   page.getByRole() to locate by explicit and implicit accessibility attributes. this used button and link
  await page.getByRole("button", { type: "submit" }).click();

  //    page.getByText() to locate by text content.
  //  first method in await expect(await page.getByText('UarxHNNJOf tyfv')).toBeVisible();

  const name = await page
    .locator("//p[@class='oxd-userdropdown-name']")
    .textContent();

  await expect(await page.getByText(name)).toBeVisible();

  //   page.getByLable() to locate a form control by assciated label's text,this is synatx <label>Password <input type="password" /></label>
  await page.getByLabel("password").fill("password"); //this is only used in lable tag

  // page.getByTitle() to locate an element by its title attribute.
  //                  Example tags: <span title ='Issues count'> 25 issues </span>
  await expect(await page.getByTitle("Issues count")).toHaveText("25 issues");

  //    page.getByTextId() to locate an element based on its data-testid attribute.used in id.
  //                    <button data-testid="directions">Itineraire</button>
  await page.getByTestId("directions").click();
});
