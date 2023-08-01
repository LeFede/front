import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', vitePreprocessor())
    },
    video: false,
    screenshotOnRunFailure: false,
  },
})
