import { App, Plugin } from 'vue'
import MazBottomSheet from './MazBottomSheet.vue'

import { registerComponent } from './../../utils/plugins/index'

const plugin: Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazBottomSheet)
  },
}

export default plugin

export { MazBottomSheet }
