import { Directive, DirectiveBinding, FunctionDirective, Plugin } from 'vue'

const handleOutsideClick = (
  event: TouchEvent | MouseEvent,
  element: HTMLElement,
  binding: DirectiveBinding,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vnode: any,
) => {
  event.stopPropagation()

  const { handler, exclude } = binding.value

  let clickedOnExcludedElement = false
  if (exclude && exclude.length > 0) {
    for (const referenceName of exclude) {
      if (!clickedOnExcludedElement) {
        const excludedElement = vnode.context.$refs[referenceName]
        clickedOnExcludedElement = excludedElement.contains(event.target)
      }
    }
  }

  if (
    !element.contains(event.target as HTMLElement) &&
    !clickedOnExcludedElement
  ) {
    vnode.context[handler]()
  }
}

const unbind: FunctionDirective = (element, binding, vnode) => {
  document.removeEventListener('click', (event) =>
    handleOutsideClick(event, element, binding, vnode),
  )
  document.removeEventListener('touchstart', (event) =>
    handleOutsideClick(event, element, binding, vnode),
  )
}

const bind: FunctionDirective = (element, binding, vnode) => {
  document.addEventListener('click', (event) =>
    handleOutsideClick(event, element, binding, vnode),
  )
  document.addEventListener('touchstart', (event) =>
    handleOutsideClick(event, element, binding, vnode),
  )
}

const directive: Directive = {
  mounted: bind,
  unmounted: unbind,
}

const plugin: Plugin = {
  install: (app) => {
    app.directive('closable', directive)
  },
}

export { directive as vClosable, plugin as vClosableInstall }
