import fs from 'fs'
import path from 'path'
import minimist from 'minimist'
import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import PostCSS from 'rollup-plugin-postcss'
import postcssImport from 'postcss-import'
import postcssUrl from 'postcss-url'
import url from '@rollup/plugin-url'
import nested from 'postcss-nested'
import autoprefixer from 'autoprefixer'
import typescript from '@rollup/plugin-typescript'
import css from 'rollup-plugin-css-only'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const BASE_FDIR = './'
const COMPONENTS_DIR = 'components/'
const OUTPUT_DIR = './dist'

const postcssConfigList = [
  postcssImport({
    resolve(id, basedir) {
      // resolve alias @css, @import '@css/style.css'
      // because @css/ has 5 chars
      if (id.startsWith('@css')) {
        return path.resolve('./src/assets/styles/css', id.slice(5))
      }
      // resolve node_modules, @import '~normalize.css/normalize.css'
      // similar to how css-loader's handling of node_modules
      if (id.startsWith('~')) {
        return path.resolve('./node_modules', id.slice(1))
      }
      // resolve relative path, @import './components/style.css'
      return path.resolve(basedir, id)
    },
  }),
  nested,
  postcssUrl({ url: 'inline' }),
  autoprefixer({
    overrideBrowserslist: '> 1%, IE 6, Explorer >= 10, Safari >= 7',
  }),
]

const argv = minimist(process.argv.slice(2))

let postVueConfig = [
  // Process only `<style module>` blocks.
  PostCSS({
    modules: {
      generateScopedName: '[local]___[hash:base64:5]',
    },
    include: /&module=.*\.css$/,
  }),
  // Process all `<style>` blocks except `<style module>`.
  PostCSS({
    include: /(?<!&module=.*)\.css$/,
    plugins: [...postcssConfigList],
  }),
  url({
    include: ['**/*.svg', '**/*.png', '**/*.gif', '**/*.jpg', '**/*.jpeg'],
  }),
]

if (process.env.SEP_CSS) {
  postVueConfig = [
    css({ output: `${OUTPUT_DIR}/bundle.css` }),
    ...postVueConfig,
  ]
}

const baseConfig = {
  plugins: {
    preVue: [
      alias({
        entries: [
          {
            find: '~',
            replacement: path.resolve(__dirname, './../components'),
          },
          {
            find: '~',
            replacement: path.resolve(__dirname, './../utils'),
          },
        ],
        customResolver: resolve({
          extensions: ['.js', '.jsx', '.vue'],
        }),
      }),
    ],
    replace: {
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    },
    vue: {
      target: 'browser',
      preprocessStyles: process.env.SEP_CSS ? false : true,
      postcssPlugins: [...postcssConfigList],
    },
    postVue: [...postVueConfig],
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue'],
      babelHelpers: 'bundled',
    },
  },
}

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'vue',
]

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue',
}

const components = fs
  .readdirSync(BASE_FDIR + COMPONENTS_DIR)
  .filter((f) =>
    fs.statSync(path.join(BASE_FDIR + COMPONENTS_DIR, f)).isDirectory(),
  )

const entriespath = {
  index: './index.ts',
  ...components.reduce((object, name) => {
    object[name] = `${BASE_FDIR + COMPONENTS_DIR + name}/index.ts`
    return object
  }, {}),
}

// const capitalize = (s) => {
//   if (typeof s !== 'string') return ''
//   return s.charAt(0).toUpperCase() + s.slice(1)
// }

let buildFormats = []

if (!argv.format || argv.format === 'es') {
  const esConfig = {
    input: entriespath,
    external,
    output: {
      format: 'esm',
      dir: `${OUTPUT_DIR}/components`,
      extend: true,
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        // useTsconfigDeclarationDir: false,
      }),
      peerDepsExternal(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [['@babel/preset-env', { modules: false }]],
      }),
      commonjs(),
    ],
  }

  const esMainConfig = {
    input: './index.ts',
    external,
    output: {
      format: 'esm',
      file: `${OUTPUT_DIR}/index.js`,
      extend: true,
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        // useTsconfigDeclarationDir: false,
      }),
      peerDepsExternal(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [['@babel/preset-env', { modules: false }]],
      }),
      commonjs(),
    ],
  }
  // const ind = [...components.map((f) => mapComponent(f)).reduce((r, a) => r.concat(a), [])]
  buildFormats.push(esConfig, esMainConfig)
  buildFormats = [...buildFormats]
}

if (!argv.format || argv.format === 'cjs') {
  const cjsConfig = {
    ...baseConfig,
    input: entriespath,
    external,
    output: {
      compact: true,
      format: 'cjs',
      dir: `${OUTPUT_DIR}/cjs`,
      exports: 'named',
      globals,
      extend: true,
      sourcemap: true,
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        // useTsconfigDeclarationDir: false,
      }),
      peerDepsExternal(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue({
        ...baseConfig.plugins.vue,
        template: {
          ...baseConfig.plugins.vue.template,
          optimizeSSR: true,
        },
      }),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
      commonjs(),
    ],
  }

  const cjsMainConfig = {
    input: './index.ts',
    external,
    output: {
      format: 'cjs',
      file: `${OUTPUT_DIR}/index.cjs.js`,
      extend: true,
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        // useTsconfigDeclarationDir: false,
      }),
      peerDepsExternal(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel({
        ...baseConfig.plugins.babel,
        presets: [['@babel/preset-env', { modules: false }]],
      }),
      commonjs(),
    ],
  }
  buildFormats.push(cjsConfig, cjsMainConfig)
  buildFormats = [...buildFormats]
}
// Export config
export default buildFormats
