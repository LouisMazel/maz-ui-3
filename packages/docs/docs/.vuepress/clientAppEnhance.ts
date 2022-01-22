import { defineClientAppEnhance } from '@vuepress/client'
import * as components from 'maz-ui'
import 'maz-ui/main.css'

export default defineClientAppEnhance(({ app }) => {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
})
