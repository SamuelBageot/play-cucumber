import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 1,
  globalTimeout: 1,
  testDir: './src/test',
  fullyParallel: true,
  workers: 1,
});