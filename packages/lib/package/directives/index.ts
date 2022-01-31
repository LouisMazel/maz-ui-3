import { Plugin } from 'vue'

import {
  vClickOutside,
  vClickOutsideInstall,
  vClickOutsideMixin,
} from './click-outside.directive'
import { vClosable, vClosableInstall } from './closable.directive'
import { vZoomImg, vZoomImgInstall } from './zoom-img.directive'
import { vLazyImg, vLazyImgInstall } from './v-lazy-img'

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
  vClickOutsideMixin,
  vClosable,
  vClosableInstall,
  vLazyImg,
  vLazyImgInstall,
  vZoomImg,
  vZoomImgInstall,
  installDirectives,
}
