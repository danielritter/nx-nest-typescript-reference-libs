const {withNx} = require('@nx/rollup/with-nx');

module.exports = withNx(
    {
        main: './src/index.ts',
        outputPath: './dist',
        tsConfig: './tsconfig.lib.json',
        compiler: 'swc',
        format: ["esm"],
        generatePackageJson: true
    },
    {
        // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
        // e.g.
        // output: { sourcemap: true },
    }
);
