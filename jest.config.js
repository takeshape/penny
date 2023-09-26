module.exports = {
  // add test-utils direct import
  moduleDirectories: ['node_modules', '.jest', 'src'],
  // add jest-dom and emotion's extra matchers
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.js'],
  // coverage
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  // ignore cypress folder
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/e2e/'],
  // jest 27 introduced 'node' as new default `testEnvironment`
  // this can be set on a per-file basis: https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
};
