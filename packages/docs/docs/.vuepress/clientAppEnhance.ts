import { defineClientAppEnhance } from '@vuepress/client'
import * as components from './../../../lib/dist'

export default defineClientAppEnhance(({ app, siteData }) => {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
})