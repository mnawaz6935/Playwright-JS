import { defineConfig, devices } from '@playwright/test';

 
export default defineConfig({
  testDir: './tests',
  
  timeout: 1 * 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 20 * 1 * 1000,
  },

  retries: 1,
  workers: 1,
  reporter:  [['html', { open: 'never' }]],
  
  use: { 
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
 
  projects: [
    // process.platform == 'win32' ?
    {
      name: 'chromium',
      // use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 864 } },
      use: { ...devices['Desktop Chrome'] },
    }
    // : 
    // {
    //     name: 'webkit',
    //     use: { ...devices['Desktop Safari'] },
    // }
  ]
});
