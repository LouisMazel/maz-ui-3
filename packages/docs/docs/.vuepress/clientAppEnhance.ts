import { defineClientAppEnhance } from '@vuepress/client'
import * as components from 'maz-ui'
import 'maz-ui/dist/main.css'
import 'maz-ui/config/tailwindcss/css/_subs/colors-vars.css'

export default defineClientAppEnhance(({ app }) => {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
})