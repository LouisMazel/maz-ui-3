import MazSpinner from './MazSpinner.vue'

import { registerComponent } from './../../utils/plugins/index'
import { definePlugin } from 'types/helpers'

const plugin = definePlugin({
  install(vue): void {
    registerComponent(vue, MazSpinner)
  },
})

export default plugin

export { MazSpinner }
