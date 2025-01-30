module.exports = {
  collectCoverage: true,  // Enable code coverage collection
  coverageDirectory: 'coverage',  // Directory for coverage reports
  coverageReporters: ['lcov', 'text-summary'],  // Format of the coverage reports
  testEnvironment: 'jsdom',  // The environment for React tests
};

