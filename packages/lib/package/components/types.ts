export type ModelValueSimple = string | number | null | undefined | boolean

export type MazGalleryImage =
  | {
      slug: string
      alt?: string
    }
  | string

export type Color =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'info'
  | 'success'
  | 'white'
  | 'black'
  | 'transparent'

export type Size = 'mini' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
