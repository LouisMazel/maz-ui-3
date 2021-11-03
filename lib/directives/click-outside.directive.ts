import { Directive, DirectiveBinding, Plugin } from 'vue'

const clickEventType = document.ontouchstart !== null ? 'click' : 'touchstart'

const UNIQUE_ID = '__vue_click_away__'

const onMounted = (el: any, binding: DirectiveBinding) => {
  onUnmounted(el)

  const vm = binding.instance
  const callback = binding.value

  let nextTick = false
  setTimeout(() => {
    nextTick = true
  }, 0)

  el[UNIQUE_ID] = (event: Event) => {
    if ((!el || !el.contains(event.target)) && callback && nextTick && typeof callback === 'function') {
      return callback.call(vm, event)
    }
  }

  document.addEventListener(clickEventType, el[UNIQUE_ID], false)
}

const onUnmounted = (el: any) => {
  document.removeEventListener(clickEventType, el[UNIQUE_ID], false)
  delete el[UNIQUE_ID]
}

const onUpdated = (el: any, binding: any) => {
  if (binding.value === binding.oldValue) {
    return
  }
  onMounted(el, binding)
}

const directive: Directive = {
  mounted: onMounted,
  updated: onUpdated,
  unmounted: onUnmounted,
}

const plugin: Plugin = {
  install: (app) => {
    app.directive('click-away', directive)
  },
}

const mixin = {
  directives: { ClickAway: directive },
}

export { directive, mixin }

export default plugin
