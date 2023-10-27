// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

function readTsConfig() {
  const tsconfig = fs.readFileSync('./tsconfig.json', 'utf8');
  const tsconfigWithoutComments = tsconfig.replace(
    /\/\*[\s\S]*?\*\/|\/\/.*/g,
    ''
  );

  console.log('roudou ', JSON.parse(tsconfigWithoutComments));
  return JSON.parse(tsconfigWithoutComments);
}

module.exports = {
  bail: true,

  clearMocks: true,

  coverageProvider: 'v8',

  objeto: readTsConfig(),

  moduleNameMapper: pathsToModuleNameMapper({
    '@src/*': ['<rootDir>/src/*'],
    '@cars-entities/*': ['<rootDir>/src/modules/cars/entities/*'],
    '@cars-repositories/*': ['<rootDir>/src/modules/cars/repositories/*'],
    '@cars-services/*': ['<rootDir>/src/modules/cars/services/*'],
    '@cars-useCases/*': ['<rootDir>/src/modules/cars/useCases/*'],
    '@accounts/*': ['<rootDir>/src/modules/accounts/*'],
    '@routes/*': ['<rootDir>/src/routes/*'],
    '@shared/*': ['<rootDir>/src/shared/*'],
    '@errors/*': ['<rootDir>/src/errors/*'],
    '@utils/*': ['<rootDir>/src/utils/*'],
  }),

  preset: 'ts-jest',

  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],

  testEnvironment: 'node',

  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  verbose: true,
};
