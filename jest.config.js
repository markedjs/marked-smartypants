export default {
  restoreMocks: true,
  clearMocks: true,
  // collectCoverage: true,
  collectCoverageFrom: [
    'src/index.js',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testRegex: /\.test\.[cm]?js$/.source,
  transform: {},
  transformIgnorePatterns: ['/node_modules/(?!(marked)/)'],
};
