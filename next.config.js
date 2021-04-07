const path = require('path');
const fs = require('fs');
const ESLintPlugin = require('eslint-webpack-plugin')

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    webpack(config) {
        config.plugins.push(new ESLintPlugin({
            // Plugin options
            extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
            eslintPath: require.resolve('eslint'),
            context: resolveApp('src'),
            cache: true,
            cacheLocation: path.resolve(
                resolveApp('node_modules'),
                '.cache/.eslintcache'
            ),
            // ESLint class options
            cwd: resolveApp('.'),
            resolvePluginsRelativeTo: __dirname,
            baseConfig: {
                extends: [require.resolve('eslint-config-react-app/base')],
                rules: {},
            },
        }))

        return config
    }
}