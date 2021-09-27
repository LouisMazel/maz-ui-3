import { App } from 'vue'
import MazGallery from './MazGallery.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazGallery)
  },
}

export default Plugin

export { MazGallery }
