module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
 testMatch: ['**/?(*.)+(spec|test).[tj]s'], // ou simplement ['**/*.test.ts', '**/*.spec.ts']
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!tests/**/*.test.ts',
    '!tests/**/*.spec.ts'
  ]
};