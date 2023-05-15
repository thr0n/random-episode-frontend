import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:9000');

  await expect(page).toHaveTitle(/random episode - Was hören wir heute\?/);
});

test('navigates to "Die drei ???" episode and back', async ({ page }) => {
    await page.goto('http://localhost:9000');

    await expect(page.getByText('Zufallsgenerator')).toBeVisible()

    await page.getByText("Die drei ???").click()
    await expect(page).toHaveURL(new RegExp(/\/[aA-zZ0-9]{22}\//));

    await page.getByText("Zurück").click()
    await expect(page.getByText('Zufallsgenerator')).toBeVisible()
  });
