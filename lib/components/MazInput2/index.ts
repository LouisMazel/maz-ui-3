import { App } from 'vue'
import MazInput2 from './MazInput2.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazInput2)
  },
}

export default Plugin

export { MazInput2 }
