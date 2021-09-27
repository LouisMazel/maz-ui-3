import { App } from 'vue'
import MazButton from './MazBtn.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazButton)
  },
}

export default Plugin

export { MazButton as MazBtn }
