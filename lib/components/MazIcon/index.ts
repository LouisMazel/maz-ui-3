import { App } from 'vue'
import MazIcon from './MazIcon.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazIcon)
  },
}

export default Plugin

export { MazIcon }
