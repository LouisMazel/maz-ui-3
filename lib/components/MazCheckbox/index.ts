import { App } from 'vue'
import MazCheckbox from './MazCheckbox.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazCheckbox)
  },
}

export default Plugin

export { MazCheckbox }
