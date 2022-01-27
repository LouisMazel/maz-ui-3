import Dropzone, { DropzoneFile, DropzoneOptions } from 'dropzone'
import { ComponentPublicInstance } from 'vue'

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
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'black'
  | 'transparent'

export const colors: Color[] = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'white',
  'black',
  'transparent',
]

export type Size = 'mini' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Position =
  | 'top'
  | 'top right'
  | 'top left'
  | 'bottom'
  | 'bottom right'
  | 'bottom left'

export interface Source {
  srcset?: string
  media?: string
}

export interface DataImage {
  sources?: Source[]
}

export type Image = DataImage | string

export interface MazDropzoneOptions extends DropzoneOptions {
  dictFilesDescriptions?: string
  autoRemoveOnError?: boolean
}

export interface MazDropzoneFile extends DropzoneFile {
  manuallyAdded?: boolean
}

export interface IMazDropzone extends Dropzone {
  options: MazDropzoneOptions
}

export interface MazDropzoneInstance extends ComponentPublicInstance {
  manuallyAddFile: (file: DropzoneFile, fileUrl: string) => void
  setOption: (option: string, value: any) => IMazDropzone['options']
  processQueue: IMazDropzone['processQueue']
  removeFile: IMazDropzone['removeFile']
  removeAllFiles: IMazDropzone['removeAllFiles']
  destroy: IMazDropzone['destroy']
  disable: IMazDropzone['disable']
  enable: IMazDropzone['enable']
  accept: IMazDropzone['accept']
  addFile: IMazDropzone['addFile']
  resizeImage: IMazDropzone['resizeImage']
  cancelUpload: IMazDropzone['cancelUpload']
  getAcceptedFiles: () => MazDropzoneFile[]
  getRejectedFiles: () => MazDropzoneFile[]
  getFilesWithStatus: IMazDropzone['getFilesWithStatus']
  getQueuedFiles: IMazDropzone['getQueuedFiles']
  getUploadingFiles: IMazDropzone['getUploadingFiles']
  getAddedFiles: IMazDropzone['getAddedFiles']
  getActiveFiles: IMazDropzone['getActiveFiles']
}
