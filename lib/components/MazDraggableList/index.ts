import { App } from 'vue'
import MazDraggableList from './MazDraggableList.vue'

import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazDraggableList)
  },
}

export default Plugin

export { MazDraggableList }
