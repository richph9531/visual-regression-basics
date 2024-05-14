# visual-regression-basics

This repository consists of a very basic single page React website that has some elements that interact with each other.

It also includes an installation of Playwright, which is the testing framework used for running the visual regression tests

### 1. Install dependencies
Run `npm install`

### 2. Start the application locally
Run `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 3. Start the mocked application locally
Run `npm run start:mock`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 4. Run the visual regression tests
Run `npm test`

You do not need to have started up the website locally before running the tests. The tests run against the mocked version of the app.

You might need to also run `npx install playwright` the first time you run the tests. This gives you the required browsers.