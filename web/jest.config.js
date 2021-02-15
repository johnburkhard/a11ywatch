const { defaults } = require('jest-config')

module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/dist/',
    '<rootDir>/coverage/',
    '<rootDir>/node_modules/(?!(monaco-editor)/)',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
    '@app-strings': '<rootDir>/src/content/strings/a11y/',
    '@app-theme': '<rootDir>/src/theme/main/',
    '@app-config': '<rootDir>/web-config.js',
  },
  verbose: true,
  coverageDirectory: './coverage/',
  collectCoverage: true,
}
