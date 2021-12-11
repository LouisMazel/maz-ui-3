import { App } from 'vue'
import MazDialog from './MazDialog.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazDialog)
  },
}

export default Plugin

export { MazDialog }
