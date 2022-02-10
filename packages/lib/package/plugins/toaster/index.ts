import { ToasterPositions } from './positions'
import { Toaster, ToasterOptions } from './use-toast'

const defaultOptions: ToasterOptions = {
  position: ToasterPositions.BOTTOM,
  timeout: 10_000,
  closable: true,
}

export const plugin = {
  install(app, options?: ToasterOptions) {
    const toaster: Toaster = new Toaster(app, { ...defaultOptions, ...options })
    app.config.globalProperties.$toaster = toaster
  },
}
