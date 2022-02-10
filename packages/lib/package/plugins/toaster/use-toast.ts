import { App, createApp } from 'vue'
import NToast from './NToast.vue'
import { ToasterPositions } from './positions'

export interface ToasterOptions {
  position?: ToasterPositions
  timeout?: number
  closable?: boolean
}

export interface LocalToasterOptions extends ToasterOptions {
  type?: 'success' | 'info' | 'warning' | 'danger'
}

export class Toaster {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly app: App,
    private readonly globalOptions: ToasterOptions,
  ) {}

  private show(message: string, options: LocalToasterOptions) {
    const mountEl = document.createElement('div')
    document.body.appendChild(mountEl)

    const localOptions = { message, ...options }

    const propsData = Object.assign(
      {},
      localOptions,
      this.globalOptions,
      options,
    )

    const toaster = createApp(
      { extends: NToast },
      {
        propsData,
      },
    )

    toaster.mount(mountEl)
  }

  private getLocalOptions(
    type: LocalToasterOptions['type'],
    options?: ToasterOptions,
  ): LocalToasterOptions {
    return {
      type,
      ...options,
    }
  }

  success(message: string, options?: ToasterOptions) {
    return this.show(message, this.getLocalOptions('success', options))
  }

  error(message: string, options?: ToasterOptions) {
    return this.show(message, this.getLocalOptions('danger', options))
  }

  info(message: string, options?: ToasterOptions) {
    return this.show(message, this.getLocalOptions('info', options))
  }

  warning(message: string, options?: ToasterOptions) {
    return this.show(message, this.getLocalOptions('warning', options))
  }
}
