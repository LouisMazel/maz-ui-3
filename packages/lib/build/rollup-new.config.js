// rollup.config.js
import { readFileSync } from 'fs'
import { resolve } from 'path'

import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import url from '@rollup/plugin-url'

import PostCSS from 'rollup-plugin-postcss'
import nested from 'postcss-nested'
import postcssImport from 'postcss-import'
import postcssUrl from 'postcss-url'
import autoprefixer from 'autoprefixer'

import { terser } from 'rollup-plugin-terser'
import ttypescript from 'ttypescript'
import typescript from 'rollup-plugin-typescript2'
import minimist from 'minimist'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const INPUT_ENTRY = './package/entry.ts'
const COMPONENT_INPUT = './package/components/index.ts'

// Get browserslist config and remove ie from es build targets
const esbrowserslist = readFileSync('./.browserslistrc')
  .toString()
  .split('\n')
  .filter((entry) => entry && entry.substring(0, 2) !== 'ie')

// Extract babel preset-env config, to combine with esbrowserslist
const babelPresetEnvConfig = require('../babel.config').presets.filter(
  (entry) => entry[0] === '@babel/preset-env',
)[0][1]

const argv = minimist(process.argv.slice(2))

const projectRoot = resolve(__dirname, '..')

const postcssConfigList = [
  postcssImport({
    resolve(id, basedir) {
      // resolve alias @css, @import '@css/style.css'
      // because @css/ has 5 chars
      if (id.startsWith('@css')) {
        return resolve('./src/assets/styles/css', id.slice(5))
      }
      // resolve node_modules, @import '~normalize.css/normalize.css'
      // similar to how css-loader's handling of node_modules
      if (id.startsWith('~')) {
        return resolve('./node_modules', id.slice(1))
      }
      // resolve relative path, @import './components/style.css'
      return resolve(basedir, id)
    },
  }),
  nested,
  postcssUrl({ url: 'inline' }),
  autoprefixer({
    overrideBrowserslist: '> 1%, IE 6, Explorer >= 10, Safari >= 7',
  }),
]

const baseConfig = {
  input: INPUT_ENTRY,
  plugins: {
    preVue: [
      alias({
        entries: [
          {
            find: '@',
            replacement: `${resolve(projectRoot, 'src')}`,
          },
        ],
      }),
    ],
    replace: {
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    vue: {
      target: 'browser',
      preprocessStyles: true,
      postcssPlugins: [...postcssConfigList],
    },
    postVue: [
      nodeResolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      }),
      // Process only `<style module>` blocks.
      PostCSS({
        modules: {
          generateScopedName: '[local]___[hash:base64:5]',
        },
        include: /&module=.*\.css$/,
        plugins: postcssConfigList,
      }),
      // Process all `<style>` blocks except `<style module>`.
      PostCSS({ include: /(?<!&module=.*)\.css$/ }),
      commonjs(),
      url({
        include: ['**/*.svg', '**/*.png', '**/*.gif', '**/*.jpg', '**/*.jpeg'],
      }),
    ],
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
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

// Customize configs for individual targets
const buildFormats = []
if (!argv.format || argv.format === 'es') {
  const esConfig = {
    ...baseConfig,
    input: COMPONENT_INPUT,
    external,
    output: {
      file: 'dist/maz-ui.esm.js',
      format: 'esm',
      exports: 'named',
    },
    plugins: [
      peerDepsExternal(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      // Only use typescript for declarations - babel will
      // do actual js transformations
      typescript({
        typescript: ttypescript,
        useTsconfigDeclarationDir: true,
        emitDeclarationOnly: true,
      }),
      babel({
        ...baseConfig.plugins.babel,
        presets: [
          [
            '@babel/preset-env',
            {
              ...babelPresetEnvConfig,
              targets: esbrowserslist,
            },
          ],
        ],
      }),
    ],
  }
  buildFormats.push(esConfig)
}

if (!argv.format || argv.format === 'cjs') {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/maz-ui.ssr.js',
      format: 'cjs',
      name: 'MazUi',
      exports: 'auto',
      globals,
    },
    plugins: [
      peerDepsExternal(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
    ],
  }
  buildFormats.push(umdConfig)
}

if (!argv.format || argv.format === 'iife') {
  const unpkgConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/maz-ui.min.js',
      format: 'iife',
      name: 'MazUi',
      exports: 'auto',
      globals,
    },
    plugins: [
      peerDepsExternal(),
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
      terser({
        output: {
          ecma: 5,
        },
      }),
    ],
  }
  buildFormats.push(unpkgConfig)
}

// Export config
export default buildFormats
