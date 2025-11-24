import { test, expect } from '@playwright/test'

const selectors = {
  header: 'text=Fitness Progress Tracker',
  totalStepsCard: 'text=Total Steps',
  summaryChart: '[data-testid="summary-chart"]',
  weeklyToggle: '[data-testid="toggle-week"]',
  monthlyToggle: '[data-testid="toggle-month"]',
  breakdownTable: '[data-testid="weekly-breakdown"]',
}

test('renders dashboard and toggles views', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator(selectors.header)).toBeVisible()
  await expect(page.locator(selectors.totalStepsCard)).toBeVisible()
  await expect(page.locator(selectors.summaryChart)).toBeVisible()

  // Switch to monthly view
  await page.click(selectors.monthlyToggle)
  await expect(page.getByText('Monthly Overview')).toBeVisible()
  await expect(page.locator(selectors.breakdownTable)).toContainText('Week 1')

  // Switch back to weekly view
  await page.click(selectors.weeklyToggle)
  await expect(page.getByText('Weekly Overview')).toBeVisible()
  await expect(page.locator(selectors.breakdownTable)).toContainText('Mon')
})
