import { App } from 'vue'
import MazBtnGroup from './MazBtnGroup.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazBtnGroup)
  },
}

export default Plugin

export { MazBtnGroup }
