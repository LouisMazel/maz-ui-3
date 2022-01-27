---
description: MazDropzone is a stand-alone component to help user upload different type of files with a beautiful design system. It works with dropzone.js and is not SSR compatible with Nuxt.JS
---

# MazDropzone

> Before you have to import the global css files in your project, follow instructions in [Getting Started](/guide/getting-started.md)

To use this component, you have to install the dependency `dropzone`

<NpmBadge package="dropzone" dist-tag="5" />

<CodeGroup>

  <CodeGroupItem title="NPM" active>

```bash
# install in your project
npm install dropzone@5
```
  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
# install in your project
yarn add dropzone@5
```
  </CodeGroupItem>
</CodeGroup>

## Basic usage


<MazDropzone
  ref="MazDropzone"
  :options="dropzoneOptions"
  @error="error"
  @removedfile="fileRemoved"
  @success="success"
/>

<script lang="ts" setup>
  import { MazDropzoneOptions } from 'maz-ui'

  const dropzoneOptionsBase: MazDropzoneOptions = {
    url: 'https://httpbin.org/post',
    headers: { 'My-Awesome-Header': 'header value' },
    acceptedFiles: 'image/jpeg,image/jpg,image/png',
    maxFilesize: 10,
    maxFiles: 5,
    maxThumbnailFilesize: 1,
    autoProcessQueue: false,
  }

  const translations = {
    dictDefaultMessage: 'product.picture_upload.choose_or_drop',
    dictFilesDescriptions: 'product.picture_upload.files_descriptions', // { maxFilesize: dropzoneOptionsBase.maxFilesize, maxFiles: dropzoneOptionsBase.maxFiles },
    dictFallbackMessage: 'product.picture_upload.browser_is_not_supported',
    dictFileTooBig: 'product.picture_upload.invalid_file_type', // { maxFilesize: dropzoneOptionsBase.maxFilesize },
    dictInvalidFileType: 'product.picture_upload.invalid_file_type', // { maxFilesize: dropzoneOptionsBase.maxFilesize }),
    dictRemoveFile: 'product.picture_upload.dict_remove_file',
    dictCancelUpload: 'product.picture_upload.dict_cancel_upload',
    dictMaxFilesExceeded: 'product.picture_upload.dict_max_files_exceeded', // { maxFiles: dropzoneOptionsBase.maxFiles },
    dictUploadCanceled: 'Upload canceled' // TODO translations
  }

  const dropzoneOptions: MazDropzoneOptions = {
    ...dropzoneOptionsBase,
    ...translations
  }

  const error = (error) => console.log('dropzone-error', error)
  const success = (success) => console.log('dropzone-success', success)
</script>