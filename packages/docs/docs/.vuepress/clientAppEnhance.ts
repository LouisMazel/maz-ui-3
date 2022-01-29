import { defineClientAppEnhance } from '@vuepress/client'
import { components } from 'maz-ui'
import 'maz-ui/css/main.css'

const mazIconPath = process.env.NODE_ENV === 'production'
    ? '/maz-ui-3/icons'
    : '/icons'

export default defineClientAppEnhance(({ app }) => {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)

    app.provide('mazIconPath', mazIconPath)
  })
})
