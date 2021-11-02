import { App as Application, Component } from 'vue'

export const registerComponent = (instance: Application, component: Component): void => {
  if (component) {
    instance.component(component.name || '', component)
  }
}
