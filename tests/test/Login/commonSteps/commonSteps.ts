import { Page, expect } from "@playwright/test";
import "dotenv/config";
import { testLocators } from "../../../Locators/Locators";

const siteUrl = process.env.BASE_URL;

export const visit = async (page: Page) => {
  await page.goto(`${siteUrl}`);
};

export const observeLoginScreen = async (page: Page) => {
  const logo = page.getByAltText(testLocators.altTextLocators.logo).first();
  await expect(logo).toBeVisible();

  const email = page
    .getByPlaceholder(testLocators.placeholderLocators.email)
    .first();
  await expect(email).toBeVisible();

  const password = page
    .getByPlaceholder(testLocators.placeholderLocators.password)
    .first();
  await expect(password).toBeVisible();

  const loginBtn = page
    .getByRole("button", { name: testLocators.textLocators.signInTxt })
    .first();
  await expect(loginBtn).toBeVisible();
};

export const loginToApp = async (
  page: Page,
  email: string,
  password: string
) => {
  const enterEmail = page
    .getByPlaceholder(testLocators.placeholderLocators.email)
    .first();
  await expect(enterEmail).toBeVisible();
  await enterEmail.pressSequentially(email);

  const enterPassword = page
    .getByPlaceholder(testLocators.placeholderLocators.password)
    .first();
  await expect(enterPassword).toBeVisible();
  await enterPassword.pressSequentially(password);

  const loginBtn = page
    .getByRole("button", { name: testLocators.textLocators.signInTxt })
    .first();
  await expect(loginBtn).toBeVisible();
  await loginBtn.click({ delay: 1200 });
};

export const observeInvalidCredentialsReponse = async (page: Page) => {
  await expect(page.getByRole("progressbar")).not.toBeVisible();
  const invalidCredentials = page
    .getByText(testLocators.errorMessageLocators.invalidCredentilasAlertMsg)
    .first();
  await expect(invalidCredentials).toBeVisible();
};

export const observeDashboardScreenAfterSuccefulLogin = async (page: Page) => {
  const searchConversationFilter = page
    .getByPlaceholder(testLocators.placeholderLocators.searchConversations)
    .first();
  await expect(searchConversationFilter).toBeVisible();
  const activeBtn = page.getByRole("button").filter({
    hasText: testLocators.textLocators.activeTxt,
  });
  await expect(activeBtn).toBeVisible();
};

export const selectLeadAndObserveDrawer = async (page: Page) => {
  const observeLeadFromTable = page.getByRole("row").first();
  await expect(observeLeadFromTable).toBeVisible();
  await observeLeadFromTable.hover();

  //   Select first lead from table
  const selectLeadFromTable = observeLeadFromTable
    .locator("td")
    .filter({
      has: page.getByTestId(testLocators.dataTestIdLocator.checkBoxOutlineBlankIcon).first(),
    })
    .first();

  await expect(selectLeadFromTable).toBeVisible();
  await selectLeadFromTable.click();
  await expect(
    page.getByTestId(testLocators.dataTestIdLocator.markEmailUnreadOutlinedIcon).first()
  ).toBeVisible();
  await expect(
    page.getByTestId(testLocators.dataTestIdLocator.personOutlineRoundedIcon).first()
  ).toBeVisible();
  await expect(page.getByTestId(testLocators.dataTestIdLocator.archiveOutlinedIcon).first()).toBeVisible();
};
