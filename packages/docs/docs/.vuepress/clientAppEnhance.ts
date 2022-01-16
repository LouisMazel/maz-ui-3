import { defineClientAppEnhance } from '@vuepress/client'
import * as components from './../../../lib/dist/index'
import './../../../lib/dist/main.css'

export default defineClientAppEnhance(({ app, siteData }) => {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
})