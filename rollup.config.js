import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel'
const { name, version } = require('./package.json')

const NODE_ENV = process.env.NODE_ENV
const isProd = NODE_ENV === 'production'

const plugs = [
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

const banner = `/*!\n * ${name} v${version}\n * @author blesstosam\n */`

export default {
  input: 'src/index.js',
  output: [
    {
      file: isProd ? 'lib/bundle.prod.js' : 'lib/bundle.js',
      name: 'MyLib',
      format: 'umd',
      banner
    },
    {
      file: isProd ? 'lib/bundle-es.prod.js' : 'lib/bundle-es.js',
      format: 'esm',
      banner
    }
  ],
  plugins: isProd ? [...plugs, terser()] : plugs
}
