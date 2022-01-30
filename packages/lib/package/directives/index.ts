import {
  directive as vClickOutside,
  default as vClickOutsideInstall,
} from './click-outside.directive'
import {
  directive as vClosable,
  default as vClosableInstall,
} from './closable.directive'
import {
  directive as vZoomImg,
  default as vZoomImgInstall,
} from './zoom-img.directive'
import { directive as vLazyImg, default as vLazyImgInstall } from './v-lazy-img'
import { App } from 'vue'

const directives = [
  {
    name: 'click-outside',
    directive: vClickOutside,
  },
  {
    name: 'click-outside',
    directive: vClosable,
  },
  {
    name: 'zoom-img',
    directive: vZoomImg,
  },
  {
    name: 'lazy-img',
    directive: vLazyImg,
  },
]

export type Directives = typeof directives

const installDirectives = {
  install(app: App) {
    directives.forEach(({ name, directive }) => {
      app.directive(name, directive)
    })
  },
}

export {
  vClickOutside,
  vClickOutsideInstall,
  vClosable,
  vClosableInstall,
  vLazyImg,
  vLazyImgInstall,
  vZoomImg,
  vZoomImgInstall,
  installDirectives,
}
