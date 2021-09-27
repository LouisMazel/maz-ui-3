import { App, Plugin } from 'vue'
import * as components from './components'
import { setVueInstance } from './utils/config'

const install: Exclude<Plugin['install'], undefined> = (instance: App) => {
  setVueInstance(instance)
  for (const componentKey in components) {
    instance.use((components as any)[componentKey])
  }
}

export default install

export * from './components'
