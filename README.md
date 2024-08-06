# Fleet Insurance Calculator

This Node.js application calculates the insurance cost for a fleet of vehicles insured with pay-as-you-drive insurance. The service uses an express server to handle HTTP requests and calculates the insurance cost based on the kilometers driven by each vehicle in the fleet.

## Features

- Insurance Cost Calculation: Calculate the total insurance cost for a fleet of vehicles based on the kilometers driven.

- Security: Uses Helmet for setting various HTTP headers to enhance security.

- Input Validation: Uses express-validator to validate and sanitize user input.

- CORS: Configured to handle Cross-Origin Resource Sharing.

## Logic Used

The insurance cost is calculated based on the following rules:

- 0-20 km: Flat rate of R200.
- 21-50 km: R200 + R1 per km above 20 km.
- 51-100 km: R220 + R0.80 per km above 50 km.
- 101+ km: R260 + R0.50 per km above 100 km.

## Tests

The application includes unit tests and integration tests to ensure correctness and reliability:

- Unit Tests: Tests for the insurance calculation logic to ensure the correct cost is calculated for different kilometer ranges.

- Integration Tests: Tests for the API endpoint /calculate-insurance to ensure it returns the correct total insurance cost for a given set of kilometers.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/M311HAN/fleet-insurance-calculator.git

   cd fleet-insurance-calculator
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

## Running the Application

### In Development

To start the server with `nodemon` (auto-restarts on file changes):

    ```bash
    npm run dev
    ```

### In Production

    ```bash
    npm start
    ```

The server will run on [http://localhost:3001](http://localhost:3001).

## Running the Tests

To run the tests:

1. Ensure the server is not running.
2. Run the tests with the following command:

   ```bash
   NODE_ENV=test npm test
   ```

The tests will automatically start and stop the server as needed.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **NPM**: Node Package Manager, comes with Node.js.

## Final Check

1. **Install `nodemon`**: If you haven't already installed it, make sure it is installed as a development dependency:

   ```bash
   npm install --save-dev nodemon
   ```

2. Run the server with `nodemon` during development:

   ```bash
   npm run dev
   ```

3. Run tests:

   ```bash
   NODE_ENV=test npm test
   ```

## Security and Best Practices

- **Helmet**: Used to set various HTTP headers for security.
- **CORS**: Configured to handle Cross-Origin Resource Sharing.
- **Express-Validator**: Used to validate and sanitize user input.

This setup ensures a smooth development experience with `nodemon` and proper testing setup with `NODE_ENV=test`. Additionally, Helmet enhances security and aligns with best practices for web development.
