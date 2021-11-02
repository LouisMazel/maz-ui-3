import { App as Application, Component } from 'vue'

export const registerComponent = (instance: Application, component: Component): Application => {
  return instance.component(component.name || '', component)
}
