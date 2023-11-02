/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-node',
  transform: {},
  clearMocks: true,
  coverageProvider: "v8",
};

export default config;
