module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    extends: ['airbnb-base', 'plugin:vue/essential', 'standard', 'plugin:prettier/recommended'],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        node: true,
        sourceType: 'module',
        ecmaVersion: 2021,
        parser: '@typescript-eslint/parser',
    },
    plugins: ['@typescript-eslint', 'prettier', 'vue', 'html'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
            },
        },
        'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx', '.vue'],
    },
    globals: {
        APP_ENV: 'readonly',
        MODE: 'readonly',
        VERSION: 'readonly',
        RENDER_ENV: 'readonly',
        NodeJS: 'readonly',
        Electron: 'readonly',
    },
    rules: {
        indent: ['error', 4],
        'spaced-comment': ['error', 'always'],
        'no-tabs': 'off',
        'vue/comment-directive': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/multi-word-component-names': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    },
}
