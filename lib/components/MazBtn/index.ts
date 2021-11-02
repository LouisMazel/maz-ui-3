import { App } from 'vue'
import MazBtn from './MazBtn.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazBtn)
  },
}

export default Plugin

export { MazBtn }
