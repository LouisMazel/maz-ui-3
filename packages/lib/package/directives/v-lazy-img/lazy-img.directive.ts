import { Directive } from 'vue'
import { LazyImg, LazyImgBinding } from './lazy-img-handler'

let instance: LazyImg

const vLazyImg: Directive = {
  created(el: HTMLElement, binding: LazyImgBinding) {
    const options = typeof binding.value === 'object' ? binding.value : {}
    instance = new LazyImg(options)
    instance.add(el, binding)
  },
  updated(el: HTMLElement, binding: LazyImgBinding): void {
    instance.update(el, binding)
  },
  unmounted(el: HTMLElement, binding: LazyImgBinding): void {
    instance.remove(el, binding)
  },
}

export { vLazyImg }
