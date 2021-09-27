import { App } from 'vue'
import MazDropdown from './MazDropdown.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazDropdown)
  },
}

export default Plugin

export { MazDropdown }
