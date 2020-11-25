const path = require('path');

module.exports = {
    rootDir: path.resolve(__dirname, './'),
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: process.env.JEST_CLOVER_OUTPUT_DIR || './_devops/artifacts/reports',
    coverageReporters: ['text', 'clover', 'lcov'],
    modulePathIgnorePatterns: ['dist'],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'json',
        'jsx'
    ]
};