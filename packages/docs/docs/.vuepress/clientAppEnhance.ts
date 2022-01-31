import { defineClientAppEnhance } from '@vuepress/client'
import 'maz-ui/css/main.css'

const mazIconPath = process.env.NODE_ENV === 'production'
    ? '/maz-ui-3/icons'
    : '/icons'

export default defineClientAppEnhance(async ({ app }) => {
  app.provide('mazIconPath', mazIconPath)

  const components = (await import('maz-ui/components')).default
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
})
