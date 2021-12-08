import { App } from 'vue'
import * as components from './components'
import { setVueInstance } from './utils/config'
import { definePlugin } from './types/helpers'

const install = definePlugin((instance: App) => {
  setVueInstance(instance)
  for (const componentKey in components) {
    instance.use(components[componentKey])
  }
})

export default install

export * from './components'
