import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import peerDeps from 'rollup-plugin-peer-deps-external'

export default {
    plugins: [
        peerDeps(),
        resolve({
            module: true,
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        commonjs({
            include: 'node_modules/**',
        }),
    ],
    external: ['react', 'react-dom', 'prop-types', 'stream'],
    output: {
        format: 'cjs',
    },
}
