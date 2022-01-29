import { resolve } from 'path'
import dts from 'rollup-plugin-dts'

const INPUT_TYPES = resolve(__dirname, './../types/index.esm.d.ts')

const config = [
  {
    input: INPUT_TYPES,
    output: [{ file: 'lib/maz-ui.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]

export default config
