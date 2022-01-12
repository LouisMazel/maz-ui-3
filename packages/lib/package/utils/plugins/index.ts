import { App, Component } from 'vue'

export const registerComponent = (instance: App, component: Component): App => {
  if (!component.name) {
    throw new Error(`[registerComponent] component has no name ${component}`)
  }
  return instance.component(component.name || '', component)
}
