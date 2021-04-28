// import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'bundle.js',
      name: 'MyLib',
      format: 'umd'
    },
    {
      file: 'bundle.es.js',
      format: 'esm'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    // getBabelOutputPlugin({
    //   allowAllFormats: true,
    //   // exclude: 'node_modules/**',
    //   presets: ['@babel/preset-env' ],
    //   plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
    // }),
    
    // 必须加上 exclude 否则报错 https://github.com/rollup/plugins/issues/381
    // babel({babelHelpers: 'runtime', exclude: 'node_modules/**' }}),
    babel({ babelHelpers: 'runtime', exclude: 'node_modules/**' })
  ]
}
