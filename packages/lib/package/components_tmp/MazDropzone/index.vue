<template>
  <button
    ref="MazDropzone"
    type="button"
    name="maz-dropzone"
    class="maz-dropzone"
    :style="[dropzoneStyle]"
  >
    <template v-if="dropzoneReady">
      <slot :options="dropzoneOptions">
        <div class="dz-message">
          <slot name="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              width="2em"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="maz-dropzone__main-icon"
              aria-hidden="true"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"
              />
            </svg>
          </slot>
          <p class="maz-my-2">
            {{ dropzoneOptions?.dictDefaultMessage }}
          </p>
          <p class="maz-mb-0 maz-text-gray-400">
            {{ dropzoneOptions?.dictFilesDescriptions }}
          </p>
        </div>
      </slot>
    </template>
    <MazSpinner v-else />
  </button>
</template>

<script lang="ts">
  import {
    computed,
    defineComponent,
    onBeforeUnmount,
    onMounted,
    ref,
  } from 'vue'
  import Dropzone, { DropzoneOptions, DropzoneFile } from 'dropzone'
  import MazSpinner from '@/components/lib/ui/MazSpinner.vue'

  export interface MazDropzoneOptions extends DropzoneOptions {
    dictFilesDescriptions?: string
  }

  export interface MazDropzoneFile extends DropzoneFile {
    manuallyAdded?: boolean
  }

  export interface MazDropzone {
    manuallyAddFile: (file: DropzoneFile, fileUrl: string) => void
    setOption: (option: string, value: any) => MazDropzoneOptions
    processQueue: Dropzone['processQueue']
    removeFile: Dropzone['removeFile']
    removeAllFiles: Dropzone['removeAllFiles']
    destroy: Dropzone['destroy']
    disable: Dropzone['disable']
    enable: Dropzone['enable']
    accept: Dropzone['accept']
    addFile: Dropzone['addFile']
    resizeImage: Dropzone['resizeImage']
    cancelUpload: Dropzone['cancelUpload']
    getAcceptedFiles: () => MazDropzoneFile[]
    getRejectedFiles: () => MazDropzoneFile[]
    getFilesWithStatus: Dropzone['getFilesWithStatus']
    getQueuedFiles: Dropzone['getQueuedFiles']
    getUploadingFiles: Dropzone['getUploadingFiles']
    getAddedFiles: Dropzone['getAddedFiles']
    getActiveFiles: Dropzone['getActiveFiles']
  }

  const previewTemplate = `<div class="dz-preview dz-file-preview maz-flex-1">
  <div class="dz-image">
      <div data-dz-thumbnail-bg></div>
  </div>
  <div class="dz-details">
      <div class="dz-filename"><span data-dz-name></span></div>
      <div class="dz-size"><span data-dz-size></span></div>
  </div>
  <div class="dz-progress">
    <span class="dz-upload" data-dz-uploadprogress></span>
  </div>
  <div class="dz-success-mark">
    <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" height="6rem" viewBox="0 0 24 24" width="6rem" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
  </div>
  <div class="dz-error-mark">
    <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" height="6rem" viewBox="0 0 24 24" width="6rem" fill="currentColor"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
  </div>
</div>`

  export default defineComponent({
    name: 'MazDropzone',
    components: { MazSpinner },
    props: {
      options: { type: Object, required: true },
      height: { type: [Number, String], default: '245px' },
      width: { type: [Number, String], default: '100%' },
      autoRemove: { type: Boolean, default: false },
      destroyOnUnmount: { type: Boolean, default: false },
    },
    emits: [
      'thumbnail',
      'error',
      'drop',
      'dragstart',
      'dragend',
      'dragenter',
      'dragover',
      'dragleave',
      'paste',
      'addedfile',
      'addedfiles',
      'removedfile',
      'success',
      'processing',
      'processingmultiple',
      'uploadprogress',
      'totaluploadprogress',
      'sending',
      'sendingmultiple',
      'canceled',
      'canceledmultiple',
      'complete',
      'completemultiple',
      'maxfilesexceeded',
      'maxfilesreached',
      'queuecomplete',
      'reset',
    ],
    setup(props, { emit }) {
      const MazDropzone = ref<HTMLElement>()
      const dropzoneReady = ref(false)
      let dropzone: Dropzone
      const dropzoneOptions = ref<MazDropzoneOptions>()

      const dropzoneStyle = computed(() => ({
        width: Number.isInteger(props.width) ? `${props.width}px` : props.width,
        height: Number.isInteger(props.height)
          ? `${props.height}px`
          : props.height,
      }))

      const thumbnail: DropzoneOptions['thumbnail'] = (
        file: MazDropzoneFile,
        dataUrl,
      ) => {
        emit('thumbnail', file, dataUrl)
        let thumbnailElement
        file.previewElement.classList.remove('dz-file-preview')
        const ref = file.previewElement.querySelectorAll(
          '[data-dz-thumbnail-bg]',
        )
        ref.forEach((r) => {
          thumbnailElement = r as HTMLImageElement
          thumbnailElement.alt = file.name
          thumbnailElement.style.backgroundImage = `url('${dataUrl}')`
        })

        if (file.status === 'success') dropzone.emit('complete', file)
      }

      const error: DropzoneOptions['error'] = (file, message, xhr) => {
        emit('error', file, message, xhr)
        if (props.autoRemove) setTimeout(() => dropzone.removeFile(file), 3000)
      }

      const errorMultiple: DropzoneOptions['errormultiple'] = (
        files,
        message,
        xhr,
      ) => {
        emit('error', files, message, xhr)
        if (props.autoRemove)
          setTimeout(() => {
            files.forEach((file) => dropzone.removeFile(file))
          }, 3000)
      }

      onMounted(async () => {
        const DropzoneJs = (await import('dropzone')).default

        const defaultOptions: MazDropzoneOptions = {
          parallelUploads: props.options.maxFiles,
          previewTemplate,
          addRemoveLinks: true,
        }

        dropzone = new DropzoneJs(MazDropzone.value as HTMLElement, {
          ...defaultOptions,
          ...props.options,
        }) as Dropzone

        if (dropzone) {
          dropzoneOptions.value = dropzone.options as MazDropzoneOptions

          dropzoneReady.value = true

          /**
           * Dropzone Events
           */

          dropzone.on('thumbnail', thumbnail)
          dropzone.on('error', error)
          dropzone.on('errormultiple', errorMultiple)
          dropzone.on('drop', (e: DragEvent) => emit('drop', e))
          dropzone.on('dragstart', (e: DragEvent) => emit('dragstart', e))
          dropzone.on('dragend', (e: DragEvent) => emit('dragend', e))
          dropzone.on('dragenter', (e: DragEvent) => emit('dragenter', e))
          dropzone.on('dragover', (e: DragEvent) => emit('dragover', e))
          dropzone.on('dragleave', (e: DragEvent) => emit('dragleave', e))
          dropzone.on('paste', (e: DragEvent) => emit('paste', e))
          dropzone.on('addedfile', (file: DropzoneFile) =>
            emit('addedfile', file),
          )
          dropzone.on('addedfiles', (files: DropzoneFile[]) =>
            emit('addedfiles', files),
          )
          dropzone.on('removedfile', (file: DropzoneFile) =>
            emit('removedfile', file),
          )
          dropzone.on(
            'success',
            (file: DropzoneFile, response: Record<string, unknown> | string) =>
              emit('success', file, response),
          )
          dropzone.on(
            'successmultiple',
            (files: DropzoneFile[], responseText: string) =>
              emit('success', files, responseText),
          )
          dropzone.on('processing', (file: DropzoneFile) =>
            emit('processing', file),
          )
          dropzone.on('processingmultiple', (files: DropzoneFile[]) =>
            emit('processingmultiple', files),
          )
          dropzone.on(
            'uploadprogress',
            (file: DropzoneFile, progress: number, bytesSent: number) =>
              emit('uploadprogress', file, progress, bytesSent),
          )
          dropzone.on(
            'totaluploadprogress',
            (
              totalProgress: number,
              totalBytes: number,
              totalBytesSent: number,
            ) =>
              emit(
                'totaluploadprogress',
                totalProgress,
                totalBytes,
                totalBytesSent,
              ),
          )
          dropzone.on(
            'sending',
            (file: DropzoneFile, xhr: XMLHttpRequest, formData: FormData) =>
              emit('sending', file, xhr, formData),
          )
          dropzone.on(
            'sendingmultiple',
            (files: DropzoneFile[], xhr: XMLHttpRequest, formData: FormData) =>
              emit('sendingmultiple', files, xhr, formData),
          )
          dropzone.on('canceled', (file: DropzoneFile) =>
            emit('canceled', file),
          )
          dropzone.on('canceledmultiple', (files: DropzoneFile[]) =>
            emit('canceledmultiple', files),
          )
          dropzone.on('complete', (file: DropzoneFile) =>
            emit('complete', file),
          )
          dropzone.on('completemultiple', (files: DropzoneFile[]) =>
            emit('completemultiple', files),
          )
          dropzone.on('maxfilesexceeded', (file: DropzoneFile) =>
            emit('maxfilesexceeded', file),
          )
          dropzone.on('maxfilesreached', (files: DropzoneFile[]) =>
            emit('maxfilesreached', files),
          )
          dropzone.on('queuecomplete', () => {
            if (getAcceptedFiles().every((file) => file.manuallyAdded)) return
            emit('queuecomplete')
          })
          dropzone.on('reset', () => emit('reset'))
        }
      })

      const setOption = (option: string, value: any): MazDropzoneOptions => {
        dropzone.options = {
          ...dropzone.options,
          [option]: value,
        }
        return dropzone.options
      }

      const manuallyAddFile: MazDropzone['manuallyAddFile'] = (
        file,
        fileUrl,
      ) => {
        dropzone.emit('addedfile', file)
        dropzone.emit('thumbnail', file, fileUrl)
        dropzone.files.push(file)
      }

      const removeAllFiles: MazDropzone['removeAllFiles'] = (bool) =>
        dropzone.removeAllFiles(bool)
      const processQueue: MazDropzone['processQueue'] = () =>
        dropzone.processQueue()
      const destroy: MazDropzone['destroy'] = () => dropzone.destroy()
      const disable: MazDropzone['disable'] = () => dropzone.disable()
      const enable: MazDropzone['enable'] = () => dropzone.enable()
      const accept: MazDropzone['accept'] = (file, done) =>
        dropzone.accept(file, done)
      const addFile: MazDropzone['addFile'] = (file) => dropzone.addFile(file)
      const resizeImage: MazDropzone['resizeImage'] = (
        file,
        width,
        height,
        resizeMethod,
        callback,
      ) => dropzone.resizeImage(file, width, height, resizeMethod, callback)
      const cancelUpload: MazDropzone['cancelUpload'] = (file) =>
        dropzone.cancelUpload(file)
      const getAcceptedFiles: MazDropzone['getAcceptedFiles'] = () =>
        dropzone.getAcceptedFiles() as MazDropzoneFile[]
      const getRejectedFiles: MazDropzone['getRejectedFiles'] = () =>
        dropzone.getRejectedFiles() as MazDropzoneFile[]
      const getFilesWithStatus: MazDropzone['getFilesWithStatus'] = () =>
        dropzone.getFilesWithStatus(status)
      const getQueuedFiles: MazDropzone['getQueuedFiles'] = () =>
        dropzone.getQueuedFiles()
      const getUploadingFiles: MazDropzone['getUploadingFiles'] = () =>
        dropzone.getUploadingFiles()
      const getAddedFiles: MazDropzone['getAddedFiles'] = () =>
        dropzone.getAddedFiles()
      const getActiveFiles: MazDropzone['getActiveFiles'] = () =>
        dropzone.getActiveFiles()

      onBeforeUnmount(() => {
        if (props.destroyOnUnmount) dropzone.destroy()
      })

      return {
        MazDropzone,
        dropzoneReady,
        dropzoneOptions,
        dropzoneStyle,
        setOption,
        manuallyAddFile,
        removeAllFiles,
        processQueue,
        destroy,
        disable,
        enable,
        accept,
        addFile,
        resizeImage,
        cancelUpload,
        getAcceptedFiles,
        getRejectedFiles,
        getFilesWithStatus,
        getQueuedFiles,
        getUploadingFiles,
        getAddedFiles,
        getActiveFiles,
      }
    },
  })
</script>

<style lang="postcss" scoped>
  @import './style/index.pcss';
</style>
