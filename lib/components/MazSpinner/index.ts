import { App } from 'vue'
import MazSpinner from './MazSpinner.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazSpinner)
  },
}

export default Plugin

export { MazSpinner }
