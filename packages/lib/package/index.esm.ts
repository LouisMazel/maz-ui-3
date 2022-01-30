import { Plugin } from 'vue'

// Import vue components
import * as components from './components'

const plugin: Plugin = {
  install: (app) => {
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component)
    })
  },
}

export default plugin

export * from './utils'
export * from './components'
export * from './components/types'
export * from './directives'
export * from './filters'
export { components }
