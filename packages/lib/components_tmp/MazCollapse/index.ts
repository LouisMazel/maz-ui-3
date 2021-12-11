import { App } from 'vue'
import MazCollapse from './MazCollapse.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazCollapse)
  },
}

export default Plugin

export { MazCollapse }
