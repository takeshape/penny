/**
 * @type {import('jest').Config}
 */
const config = {
  moduleDirectories: ['node_modules', '.jest', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.js'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/e2e/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
};

module.exports = config;
