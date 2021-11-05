import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'
import autoExternal from 'rollup-plugin-auto-external';
import pkg from './package.json';
import visualizer from 'rollup-plugin-visualizer';
import del from 'rollup-plugin-delete';
import image from '@rollup/plugin-image'
import nodeResolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from "@rollup/plugin-commonjs";

const svgr = require('@svgr/rollup').default

const config = [
    {
        input: pkg.source,
        output: [
            { file: pkg.main, format: 'cjs' }
        ],
        plugins: [
            nodeResolve({
                mainFields: ['main'],
                extensions: ['.js', '.jsx']
            }),
            svgr(),
            image(),
            postcss({
                extract: true,
                minimize: true
            }),
            terser(),
            typescript({tsconfig: './tsconfig.json'}),
            commonjs(),
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
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**'
            }),
            del({targets: ['dist/*']})
        ],
        external: ['react', 'react-dom', 'react-scripts', 'prop-types']
    }
]

export default config;