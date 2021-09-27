import { App } from 'vue'
import MazCard from './MazCard.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazCard)
  },
}

export default Plugin

export { MazCard }
