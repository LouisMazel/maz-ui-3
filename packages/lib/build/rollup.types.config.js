import { resolve } from 'path'
import dts from 'rollup-plugin-dts'
import multi from '@rollup/plugin-multi-entry'

const INPUT_TYPES = resolve(__dirname, './../types_tmp/index.d.ts')
const INPUT_COMPONENTS_TYPES = resolve(
  __dirname,
  './../types_tmp/components/index.d.ts',
)

const config = [
  {
    input: [INPUT_TYPES, INPUT_COMPONENTS_TYPES],
    output: [{ file: 'lib/maz-ui.d.ts', format: 'es' }],
    plugins: [multi(), dts()],
  },
]

export default config
