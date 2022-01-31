import { Plugin } from 'vue'

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

const directives = [
  {
    name: 'click-outside',
    directive: vClickOutside,
  },
  {
    name: 'closable',
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

const installDirectives: Plugin = {
  install(app) {
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
