import { App } from 'vue'
import { definePlugin } from 'types/helpers'
import { registerComponent } from '~utils/plugins'

import MazNavBar from './MazNavBar.vue'

const plugin = definePlugin({
  install(vue: App): void {
    registerComponent(vue, MazNavBar)
  },
})

export default plugin

export { MazNavBar }
