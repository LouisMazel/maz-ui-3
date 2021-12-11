import { App } from 'vue'
import MazTransitionExpand from './MazTransitionExpand.vue'
import { registerComponent } from './../../utils/plugins/index'

const Plugin = {
  install(vue: App): void {
    registerComponent(vue, MazTransitionExpand)
  },
}

export default Plugin

export { MazTransitionExpand }
