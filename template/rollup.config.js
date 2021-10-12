import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'
import autoExternal from 'rollup-plugin-auto-external';
import pkg from './package.json';
import visualizer from 'rollup-plugin-visualizer';
import del from 'rollup-plugin-delete';
import image from '@rollup/plugin-image'
import {terser} from 'rollup-plugin-terser';

const svgr = require('@svgr/rollup').default

const config = [
    {
        input: pkg.source,
        output: [
            { file: pkg.main, format: 'cjs' }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled'
            }),
            svgr(),
            image(),
            postcss({
                minimize: true,
                extract: true
            }),
            terser(),
            autoExternal({
                builtins: false,
                dependencies: true,
                peerDependencies: true,
                packagePath: './package.json'
            }),
            visualizer({
                title: 'visualizer',
                template: 'treemap'
            }),
            del({ targets: ['dist/*'] })
        ]
    }
]

export default config;