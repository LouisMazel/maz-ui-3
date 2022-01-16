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
  onLoading?: (el: Element) => unknown
  onLoaded?: (el: Element) => unknown
  onError?: (el: Element) => unknown
  onIntersecting?: (el: Element) => unknown
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
  onLoading?: (el: Element) => unknown
  onLoaded?: (el: Element) => unknown
  onError?: (el: Element) => unknown
  onIntersecting?: (el: Element) => unknown
}

interface BindingOptions extends GlobalOptions {
  src?: string
}

export interface LazyImgBinding extends DirectiveBinding {
  value: string | BindingOptions
}
