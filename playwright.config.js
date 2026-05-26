const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './test',
  // worker:4,
  // fullyParallel: true,

  //retries: 2,

  reporter: [
    ['html', { open: 'on-failure' }]
  ],

  use: {

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 10000,

    navigationTimeout: 30000,
  },

  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      },
    },

  ],

});