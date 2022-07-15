import { defineConfig } from 'cypress'

import packageJson from './package.json'
import { findNextPort } from './src/utils'

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${findNextPort(packageJson.scripts.dev)}`,
  },
})
