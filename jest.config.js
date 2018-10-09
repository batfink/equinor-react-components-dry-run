module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    globals: {
        NODE_ENV: 'test'
    },
    moduleDirectories: ['node_modules', 'packages'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    moduleFileExtensions: ['js', 'jsx'],
    roots: ['./'],
    setupTestFrameworkScriptFile: './enzyme.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.js$': './jestTransformer.js',
        '^.+\\.jsx$': './jestTransformer.js'
    },
    verbose: true
};
