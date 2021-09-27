import { App } from 'vue'
import ArrowIcon from './ArrowIcon.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, ArrowIcon)
  },
}

export default Plugin

export { ArrowIcon }
