import plugin from './index.esm'
import * as components from './components'

type NamedExports = Exclude<typeof components, 'default'>
type ExtendedPlugin = typeof plugin & NamedExports

Object.entries(components).forEach(([componentName, component]) => {
  if (componentName !== 'default') {
    const key = componentName as Exclude<keyof NamedExports, 'default'>
    const val = component as Exclude<ExtendedPlugin, typeof plugin>
    ;(plugin as ExtendedPlugin)[key] = val
  }
})

export default plugin

export * from './utils'
export * from './components'
export * from './components/types'
export * from './directives'
export * from './filters'
export { components }
