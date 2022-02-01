<template>
  <div class="maz-flex maz-flex-col">
    <MazBtn @click="toggleDarkMode" style="margin-bottom: 16px;">
      Dark Switch
    </MazBtn>
    <MazDropzone
      ref="MazDropzoneElem"
      :options="dropzoneOptions"
      @error="error"
      :width="500"
      @success="success"
      auto-remove
    />
    <!-- <MazPhoneNumberInput /> -->
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { onMounted } from 'vue'
  import MazBtn from 'maz-ui/components/MazBtn'
  import MazDropzone, { MazDropzoneInstance, MazDropzoneOptions } from 'maz-ui/components/MazDropzone'

  const MazDropzoneElem = ref<MazDropzoneInstance>()

  onMounted(() => {
    autoSetDarkMode()
  })

  const autoSetDarkMode = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  const toggleDarkMode = () => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }

  const dropzoneOptionsBase: MazDropzoneOptions = {
    url: 'https://httpbin.org/post',
    headers: { 'My-Awesome-Header': 'header value' },
    acceptedFiles: 'image/jpeg,image/jpg,image/png',
    maxFilesize: 10,
    maxFiles: 5,
    maxThumbnailFilesize: 3,
    autoProcessQueue: true,
    autoRemoveOnError: true,
  }

  const translations: MazDropzoneOptions = {
    dictDefaultMessage: 'Choose or drop a file',
    dictFilesDescriptions: `(PNG or JPG under ${dropzoneOptionsBase.maxFilesize} MB)`, // { maxFilesize: dropzoneOptionsBase.maxFilesize, maxFiles: dropzoneOptionsBase.maxFiles },
    dictFallbackMessage: 'Your browser is not supported',
    dictFileTooBig: `File(s) too big (max: ${dropzoneOptionsBase.maxFilesize} MB)`, // { maxFilesize: dropzoneOptionsBase.maxFilesize },
    dictInvalidFileType: `File(s) too big (max: ${dropzoneOptionsBase.maxFilesize} MB)`, // { maxFilesize: dropzoneOptionsBase.maxFilesize }),
    dictRemoveFile: 'Remove',
    dictCancelUpload: 'Cancel upload',
    dictMaxFilesExceeded: `You can not upload any more files. (max: ${dropzoneOptionsBase.maxFiles})`, // { maxFiles: dropzoneOptionsBase.maxFiles },
    dictUploadCanceled: 'Upload canceled', // TODO translations
  }

  const dropzoneOptions: MazDropzoneOptions = {
    ...dropzoneOptionsBase,
    ...translations
  }

  const error = (error: any) => console.log('dropzone-error', error)
  const success = (success: any) => console.log('dropzone-success', success)
</script>


<style>
body {
  margin: 0;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
