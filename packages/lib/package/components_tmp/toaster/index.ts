import { App, Plugin } from 'vue'

import { Positions } from './positions'
import { Toaster, ToasterOptions } from './use-toast'

const defaultOptions: ToasterOptions = {
  position: Positions.BOTTOM,
  timeout: 10_000,
  closable: true,
}

const plugin: Plugin = {
  install(app: App, options?: ToasterOptions) {
    const toaster: Toaster = new Toaster(app, { ...defaultOptions, ...options })
    app.config.globalProperties.$toaster = toaster
  },
}

export default plugin
