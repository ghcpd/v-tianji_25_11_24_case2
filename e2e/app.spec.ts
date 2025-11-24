import { test, expect } from '@playwright/test'

test('basic app flow: header, progress bar, update goal', async ({ page }) => {
  await page.goto('/')

  // header
  await expect(page.getByText('Fitness Progress')).toBeVisible()

  const progress = page.locator('[data-testid="progress-bar"]')

  // read initial width (style attribute should contain width value)
  const initialStyle = await progress.getAttribute('style')
  expect(initialStyle).toBeTruthy()

  // update goal to a larger number to reduce percent
  const goalInput = page.getByLabel('goal-input')
  await goalInput.fill('200')

  // now the progress width should have become smaller
  await page.waitForTimeout(200)
  const afterStyle = await progress.getAttribute('style')
  expect(afterStyle).toBeTruthy()
  expect(afterStyle).not.toEqual(initialStyle)
})
