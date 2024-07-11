## Playwright JS Project

This project contains test cases written using Playwright, an end-to-end testing framework. The test cases cover the following scenarios:

### Test Cases
1. **Login with valid credentials**
2. **Login with invalid credentials and observe response**
3. **Observe the dialog box after clicking on the checkbox**

## Setup

### Prerequisites
- Node.js installed on your machine
- npm (Node Package Manager) installed

### Installation
1. **Clone the repository**
   ```sh
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Install Playwright**
   ```sh
   npx playwright install
   ```

## Running Tests
To run the test cases, execute the following command:
```sh
npm run test
```

## Show Report
To view the test report, use the following command:
```sh
npx playwright show-report
```

This will open an HTML report in your default browser, providing a detailed overview of the test results.