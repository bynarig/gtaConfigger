export default {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.jsx'],
  moduleNameMapper: {
    '^#middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '^#utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testEnvironment: 'node', // This is the default, so you can also omit this
};
