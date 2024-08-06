/**
 * Application entry point for the fleet insurance calculation service.
 *
 * To run the application:
 * - Start the server: `node app.js` or `npm start`
 * - Run the server with nodemon: `npm run dev`
 *
 * To run the tests:
 * - Ensure the server is not running.
 * - Run the tests: `NODE_ENV=test npm test` or `npm test`
 */

import express from "express";
import helmet from "helmet";
import cors from "cors";
import { body, validationResult } from "express-validator";
import calculateInsurance from "./services/insuranceCalculator.js";

const app = express();

// Use Helmet to set various HTTP headers for security
app.use(helmet());

// Enable CORS with default settings
app.use(cors());

// Parse JSON bodies
app.use(express.json());

/**
 * POST /calculate-insurance
 * This endpoint calculates the total insurance cost for a fleet of vehicles.
 * Request body should contain an array of kilometers driven for each vehicle.
 * Example request body: { "kilometers": [10, 30, 70, 150] }
 * Example response body: { "totalCost": 931 }
 */
app.post(
  "/calculate-insurance",
  [
    // Validate and sanitize input
    body("kilometers")
      .isArray()
      .withMessage("Input should be an array of kilometers."),
    body("kilometers.*")
      .isInt({ min: 0 })
      .withMessage("Each kilometer value should be a non-negative integer."),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { kilometers } = req.body;

    // Calculate total insurance cost for the fleet of vehicles
    const totalCost = kilometers.reduce(
      (acc, km) => acc + calculateInsurance(km),
      0
    );

    res.json({ totalCost });
  }
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// The server should not be started manually if running tests.
// It will be started and stopped automatically by the test setup.
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the app for testing purposes
export default app;
