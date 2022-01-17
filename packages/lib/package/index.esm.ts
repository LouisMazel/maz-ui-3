import 'core-js/stable' // only stable feature also is possible with only `core-js`
import 'regenerator-runtime/runtime' // To ensure that regeneratorRuntime is defined globally

import { App, Plugin } from 'vue'

// Import vue components
import * as components from './components/index'

// install function executed by Vue.use()
const install: Exclude<Plugin['install'], undefined> = function installMazUi(
  app: App,
) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
}

// Create module definition for Vue.use()
export default install

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './components/index'
