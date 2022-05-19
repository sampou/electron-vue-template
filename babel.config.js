module.exports = {
    env: {
        main: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 7,
                        },
                    },
                    'es2015',
                ],
            ],
        },
        renderer: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                    },
                ],
            ],
        },
    },
    plugins: [
        [
            'transform-runtime',
            {
                helpers: false,
                polyfill: false,
                regenerator: true,
                moduleName: 'babel-runtime',
            },
            [
                'import',
                {
                    libraryName: 'ant-design-vue',
                    libraryDirectory: 'es',
                    style: 'css', // `style: true` 会加载 less 文件
                },
                'ant-design-vue',
            ],
        ],
    ],
}
