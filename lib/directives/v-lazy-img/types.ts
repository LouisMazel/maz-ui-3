import { DirectiveBinding } from 'vue'

export interface ClassOptions {
  baseClass: string
  loadingClass: string
  loadedClass: string
  errorClass: string
  noPhotoClass: string
  noPhoto: boolean
  noUseErrorPhoto: boolean
  observerOnce: boolean
  loadOnce: boolean
  observerOptions: {
    root?: HTMLElement | null
    threshold: number
    rootMargin?: string
  }
  errorPhoto?: string
  onLoading?: (el: Element) => any
  onLoaded?: (el: Element) => any
  onError?: (el: Element) => any
  onIntersecting?: (el: Element) => any
}

export interface GlobalOptions {
  baseClass?: string
  loadingClass?: string
  loadedClass?: string
  errorClass?: string
  noPhotoClass?: string
  noPhoto?: boolean
  noUseErrorPhoto?: boolean
  observerOnce?: boolean
  loadOnce?: boolean
  imgElement?: HTMLImageElement
  observerOptions?: {
    root?: HTMLElement | null
    threshold?: number
    rootMargin?: string
  }
  errorPhoto?: string
  onLoading?: (el: Element) => any
  onLoaded?: (el: Element) => any
  onError?: (el: Element) => any
  onIntersecting?: (el: Element) => any
}

interface BindingOptions extends GlobalOptions {
  src?: string
}

export interface LazyImgBinding extends DirectiveBinding {
  value: string | BindingOptions
}
