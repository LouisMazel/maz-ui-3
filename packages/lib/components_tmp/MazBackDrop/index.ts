import { App } from 'vue'
import { definePlugin } from 'types/helpers'
import { registerComponent } from '~utils/plugins'

import MazBackDrop from './MazBackDrop.vue'

const plugin = definePlugin({
  install(vue: App): void {
    registerComponent(vue, MazBackDrop)
  },
})

export default plugin

export { MazBackDrop }
