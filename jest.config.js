const { compilerOptions } = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest')
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/'
})

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js'
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.ts`,
    ...paths
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``
  },
  testEnvironmentOptions: {
    url: 'http://localhost'
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  modulePathIgnorePatterns: ['<rootDir>/tests/', '<rootDir>/tests-examples/']
}
