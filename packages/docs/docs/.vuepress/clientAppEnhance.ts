import { defineClientAppEnhance } from '@vuepress/client'
import * as components from '@mazel/ui'

export default defineClientAppEnhance(({ app }) => {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
})