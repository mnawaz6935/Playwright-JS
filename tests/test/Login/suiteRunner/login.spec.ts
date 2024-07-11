import { test } from "@playwright/test";
import {
  loginToApp,
  observeDashboardScreenAfterSuccefulLogin,
  observeInvalidCredentialsReponse,
  observeLoginScreen,
  selectLeadAndObserveDrawer,
  visit,
} from "../commonSteps/commonSteps";

test.describe(`Page - Login`, () => {
  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test('Test 1:- Login with "Valid Credentials" and observe response', async ({
    page,
  }) => {
    await test.step('Visit to the link and Observe the "Login Screen"', async () => {
      await visit(page);
      await observeLoginScreen(page);
    });
    await test.step("Login to the app with Valid Credentials", async () => {
      await loginToApp(
        page,
        `${process.env.LOGIN_EMAIL}`,
        `${process.env.LOGIN_PASSWORD}`
      );
    });
    // await test.step("Observe screen after successfully login", async () => {
    //   await observeDashboardScreenAfterSuccefulLogin(page);
    // });
  });

  test('Test 2:- Login with "Invalid Credentials" and observe response', async ({
    page,
  }) => {
    await test.step('Visit to the link and Observe the "Login Screen"', async () => {
      await visit(page);
      await observeLoginScreen(page);
    });
    await test.step("Login to the app with Invalid Credentials", async () => {
      await loginToApp(
        page,
        `${process.env.LOGIN_EMAIL}`,
        `${process.env.LOGIN_PASSWORD}invalid`
      );
    });
    await test.step('Observe the "Error Message" after entering Invalid Credentials', async () => {
      await observeInvalidCredentialsReponse(page);
    });
  });

  test('Test 3:- Click first lead in the Active section and observe the drawer', async ({
    page,
  }) => {
    await test.step('Visit to the link and Observe the "Login Screen"', async () => {
      await visit(page);
      await observeLoginScreen(page);
    }); 
    await test.step("Login to the app with Valid Credentials", async () => {
      await loginToApp(
        page,
        `${process.env.LOGIN_EMAIL}`,
        `${process.env.LOGIN_PASSWORD}`
      );
    });
    await test.step("Observe screen after successfully login", async () => {
      await observeDashboardScreenAfterSuccefulLogin(page);
    });
    await test.step("Click first lead in the Active section and observe the drawer", async () => {
      await selectLeadAndObserveDrawer(page);
    });
  });
});


