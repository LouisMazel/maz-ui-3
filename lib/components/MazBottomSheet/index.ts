import { App } from 'vue'
import MazBottomSheet from './MazBottomSheet.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazBottomSheet)
  },
}

export default Plugin

export { MazBottomSheet }
