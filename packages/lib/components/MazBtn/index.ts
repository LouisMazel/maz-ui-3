import { App, Plugin } from 'vue'
import MazBtn from './MazBtn.vue'

import { registerComponent } from './../../utils/plugins/index'

const plugin: Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazBtn)
  },
}

export default plugin

export { MazBtn }
