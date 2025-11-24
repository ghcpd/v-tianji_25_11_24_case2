import { test, expect } from '@playwright/test'

test('homepage renders and shows main data', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /Fitness Progress Tracker/i })).toBeVisible()
  await expect(page.getByRole('heading', { name: /Activity Overview/i })).toBeVisible({ timeout: 15_000 })
  await expect(page.getByRole('heading', { name: /Goals/i })).toBeVisible({ timeout: 15_000 })
})
