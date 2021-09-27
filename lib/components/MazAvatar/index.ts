import { App } from 'vue'
import MazAvatar from './MazAvatar.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazAvatar)
  },
}

export default Plugin

export { MazAvatar }
