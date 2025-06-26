module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: false,
                ignoredNodes: ['TSTypeParameterInstantiation'],
                outerIIFEBody: 0,
                VariableDeclarator: 'firstLine',
                MemberExpression: 1,
                FunctionDeclaration: {
                    parameters: 'first',
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 'first',
                    body: 1,
                },
                CallExpression: {
                    arguments: 'first',
                },
                ArrayExpression: 'first',
                ObjectExpression: 'first',
                ImportDeclaration: 'first',
            },
        ],
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                useTabs: false,
                endOfLine: 'lf',
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
    },
};
