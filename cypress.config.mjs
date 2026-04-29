import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "401d7420-913e-4d26-b70e-a7d8071ab71a",
  e2e: {
    baseUrl: 'http://localhost:8080',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
