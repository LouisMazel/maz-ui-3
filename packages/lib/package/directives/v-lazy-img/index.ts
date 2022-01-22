import { Directive, App } from 'vue'
import { LazyImg, DEFAULT_OPTIONS } from './lazy-img-handler'
import { vLazyImg } from './lazy-img.directive'
import { GlobalOptions } from './types'
export * from './types'

const DIRECTIVE_NAME = 'lazy-img'

const directive: Directive = vLazyImg

const plugin = {
  install(app: App, opts: GlobalOptions = {}) {
    const options: GlobalOptions = {
      ...DEFAULT_OPTIONS,
      ...opts,
      observerOptions: {
        ...DEFAULT_OPTIONS.observerOptions,
        ...opts.observerOptions,
      },
    }

    const instance = new LazyImg(options)

    app.directive(DIRECTIVE_NAME, {
      created: instance.add.bind(instance),
      updated: instance.update.bind(instance),
      unmounted: instance.remove.bind(instance),
    })
  },
}

export { directive }

export default plugin
