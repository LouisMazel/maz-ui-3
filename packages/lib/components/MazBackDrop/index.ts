import { App } from 'vue'
import MazBackDrop from './MazBackDrop.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazBackDrop)
  },
}

export default Plugin

export { MazBackDrop }
