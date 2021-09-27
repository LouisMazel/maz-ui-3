import { App } from 'vue'
import MazButtonGroup from './MazBtnGroup.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazButtonGroup)
  },
}

export default Plugin

export { MazButtonGroup as MazBtnGroup }
