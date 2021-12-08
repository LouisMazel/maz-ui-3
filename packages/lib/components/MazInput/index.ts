import { App } from 'vue'
import MazInput from './MazInput.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazInput)
  },
}

export default Plugin

export { MazInput }
