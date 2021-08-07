module.exports = {
  preset: 'ts-jest',
  globals: {
      'ts-jest': {
          tsconfig: '<rootDir>/test/tsconfig.json'
      }
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}