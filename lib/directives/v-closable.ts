import { Directive, DirectiveBinding, FunctionDirective } from 'vue'

const handleOutsideClick = (event: TouchEvent | MouseEvent, element: HTMLElement, binding: DirectiveBinding, vnode: any) => {
  event.stopPropagation()

  const { handler, exclude } = binding.value

  let clickedOnExcludedElement = false
  if (exclude && exclude.length > 0) {
    for (const referenceName of exclude) {
      if (!clickedOnExcludedElement) {
        const excludedElement = vnode.context.$refs[referenceName]
        clickedOnExcludedElement = excludedElement.contains(e.target)
      }
    }
  }

  if (!element.contains(event.target as HTMLElement) && !clickedOnExcludedElement) {
    vnode.context[handler]()
  }
}

const unbind: FunctionDirective = (element, binding, vnode) => {
  document.removeEventListener('click', (event) => handleOutsideClick(event, element, binding, vnode))
  document.removeEventListener('touchstart', (event) => handleOutsideClick(event, element, binding, vnode))
}

const bind: FunctionDirective = (element, binding, vnode) => {
  document.addEventListener('click', (event) => handleOutsideClick(event, element, binding, vnode))
  document.addEventListener('touchstart', (event) => handleOutsideClick(event, element, binding, vnode))
}

export default {
  bind,
  unbind,
} as Directive
