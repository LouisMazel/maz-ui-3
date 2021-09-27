import { Directive, DirectiveBinding } from 'vue'

let observers: IntersectionObserver[] = []

const success = (element: HTMLImageElement) => {
  setTimeout(() => element.classList.add('maz-lazy-loaded'), 100)
}
const error = (element: HTMLImageElement) => {
  setTimeout(() => element.classList.add('maz-lazy-loaded'), 100)
}

const loadImage = (element: HTMLImageElement, binding: DirectiveBinding) => {
  const valueNormalized = typeof binding.value === 'object' ? binding.value : { slug: binding.value, disabled: false }

  element.addEventListener('load', () => success(element))
  element.addEventListener('error', () => error(element))
  if (binding.arg === 'background-image') {
    element.style.backgroundImage = `url('${valueNormalized.slug}')`
    success(element)
  } else {
    element.src = valueNormalized.slug
  }
}

const handleIntersect = (
  element: HTMLImageElement,
  binding: DirectiveBinding,
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => {
  observers.push(observer)
  for (const entry of entries) {
    if (entry.isIntersecting) {
      loadImage(element, binding)
      observer.unobserve(element)
    }
  }
}

const createObserver = (element: HTMLImageElement, binding: DirectiveBinding) => {
  const options = {
    root: null,
    threshold: 0,
  }
  const observer = new IntersectionObserver((entries, observer) => handleIntersect(element, binding, entries, observer), options)
  observer.observe(element)
}

const imageHandler = (element: HTMLImageElement, binding: DirectiveBinding, type: string) => {
  if (type === 'update') {
    // Clean all previous observers
    for (const observer of observers) observer.unobserve(element)
  }
  if (window.IntersectionObserver) {
    createObserver(element, binding)
  } else {
    loadImage(element, binding)
  }
}

const directive: Directive = {
  mounted: (element: HTMLImageElement, binding: DirectiveBinding) => imageHandler(element, binding, 'bind'),
  updated: (element: HTMLImageElement, binding: DirectiveBinding) => imageHandler(element, binding, 'update'),
  beforeUnmount: (element: HTMLImageElement, binding: DirectiveBinding) => {
    if (binding.arg === 'background-image') element.style.backgroundImage = ''
    element.classList.remove('maz-lazy-loaded')
    element.classList.remove('maz-lazy-error')
    element.removeEventListener('load', () => success(element))
    element.removeEventListener('error', () => error(element))
    for (const observer of observers) observer.unobserve(element)
    observers = []
  },
}

export default directive
