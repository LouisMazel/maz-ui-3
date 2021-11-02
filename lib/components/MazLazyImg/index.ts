import { App } from 'vue'
import MazLazyImg from './MazLazyImg.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazLazyImg)
  },
}

export default Plugin

export { MazLazyImg }
