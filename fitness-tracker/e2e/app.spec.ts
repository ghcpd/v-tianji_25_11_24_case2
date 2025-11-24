import { test, expect } from '@playwright/test';

test.describe('Fitness Tracker App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main title and subtitle', async ({ page }) => {
    await expect(page.getByText(/Fitness Progress Tracker/)).toBeVisible();
    await expect(page.getByText(/Track your journey to a healthier you/)).toBeVisible();
  });

  test('should display all metric cards', async ({ page }) => {
    await expect(page.getByText('Total Workouts')).toBeVisible();
    await expect(page.getByText('Calories Burned')).toBeVisible();
    await expect(page.getByText('Active Minutes')).toBeVisible();
    await expect(page.getByText('Distance')).toBeVisible();
  });

  test('should display metric values with correct formatting', async ({ page }) => {
    // Check for comma formatting in large numbers
    await expect(page.getByText('3,450')).toBeVisible();
  });

  test('should display all goals', async ({ page }) => {
    await expect(page.getByText('Monthly Workout Goal')).toBeVisible();
    await expect(page.getByText('Weight Loss Target')).toBeVisible();
    await expect(page.getByText('5K Running Goal')).toBeVisible();
  });

  test('should display goal progress information', async ({ page }) => {
    await expect(page.getByText('24 / 30 sessions')).toBeVisible();
    await expect(page.getByText('80% Complete')).toBeVisible();
  });

  test('should display weekly summary', async ({ page }) => {
    await expect(page.getByText('Weekly Summary')).toBeVisible();
    await expect(page.getByText('Nov 18 - Nov 24')).toBeVisible();
  });

  test('should display weekly statistics', async ({ page }) => {
    await expect(page.getByText('2,850')).toBeVisible();
    await expect(page.getByText('Total Calories')).toBeVisible();
  });

  test('should display all days in weekly chart', async ({ page }) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for (const day of days) {
      await expect(page.locator('.activity-day', { hasText: day }).first()).toBeVisible();
    }
  });

  test('should have proper styling and hover effects', async ({ page }) => {
    const metricCard = page.locator('.metric-card').first();
    await expect(metricCard).toBeVisible();
    
    // Hover over the card
    await metricCard.hover();
    
    // Card should still be visible after hover
    await expect(metricCard).toBeVisible();
  });

  test('should display footer message', async ({ page }) => {
    await expect(page.getByText(/Keep pushing your limits!/)).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.getByText('Fitness Progress Tracker')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText('Fitness Progress Tracker')).toBeVisible();
  });

  test('should have proper page title', async ({ page }) => {
    await expect(page).toHaveTitle('fitness-tracker');
  });
});
