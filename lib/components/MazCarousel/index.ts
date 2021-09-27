import { App } from 'vue'
import MazCarousel from './MazCarousel.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazCarousel)
  },
}

export default Plugin

export { MazCarousel }
