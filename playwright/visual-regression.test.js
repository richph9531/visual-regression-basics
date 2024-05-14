const { test, expect } = require('@playwright/test');

test('Initial Load', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchSnapshot();
});

test('Can change colours', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('img', { name: 'Red Strap' }).click();
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchSnapshot();
});

test('Can switch to heart rate', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: 'Heart Rate' }).click();
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchSnapshot();
});

test('Can add to basket', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: 'Buy Now' }).click();
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchSnapshot();
});

