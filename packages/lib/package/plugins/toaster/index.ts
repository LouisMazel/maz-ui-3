import { ToasterPositions } from './positions'
import { ToasterHandler, ToasterOptions } from './use-toast'

const defaultOptions: ToasterOptions = {
  position: ToasterPositions.BOTTOM,
  timeout: 10_000,
  closable: true,
}

export const plugin = {
  install(app, options?: ToasterOptions) {
    const toaster = new ToasterHandler(app, {
      ...defaultOptions,
      ...options,
    })

    app.provide('toast', toaster)
    app.config.globalProperties.$toaster = toaster
  },
}
