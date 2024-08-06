import { expect } from "chai";
import request from "request";
import calculateInsurance from "../services/insuranceCalculator.js";
import http from "http";
import app from "../app.js";

describe("Insurance Calculator", function () {
  it("should calculate the correct insurance for different kilometer ranges", function () {
    // Hardcoded expected results
    const testCases = [
      { km: 10, expected: 200 },   // 0-20 km
      { km: 30, expected: 210 },   // 21-50 km
      { km: 70, expected: 236 },   // 51-100 km
      { km: 150, expected: 285 }   // 101+ km
    ];

    testCases.forEach(({ km, expected }) => {
      expect(calculateInsurance(km)).to.equal(expected);
    });
  });
});

describe("API Endpoint /calculate-insurance", function () {
  const baseUrl = "http://localhost:3001";
  let server;

  before(function (done) {
    // Start the server before running tests
    server = http.createServer(app);
    server.listen(3001, done);
  });

  after(function (done) {
    // Stop the server after running tests
    server.close(done);
  });

  it("should return the correct total insurance cost", function (done) {
    const options = {
      url: `${baseUrl}/calculate-insurance`,
      method: "POST",
      // Hardcoded expected total cost: 200 + 210 + 236 + 285 = 931
      json: { kilometers: [10, 30, 70, 150] },
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body.totalCost).to.equal(931);
      done();
    });
  });
});

