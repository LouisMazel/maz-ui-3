---
title: Toaster
description: Show message to your users in flexible toasts
---

# Toaster

## Install

`main.ts` or `main.js`

```ts
import { createApp } from 'vue'
import { installToaster, ToasterOptions } from 'maz-ui'

const app = createApp(App)

// DEFAULT OPTIONS
const defaultOptions: ToasterOptions = {
  position: 'bottom-right',
  timeout: 10_000,
  persistent: false,
}

app.use(installToaster, toasterOptions)

app.mount('#app')
```

## Basic usage

<br />

<div class="flex flex-wrap gap-05">
  <MazBtn color="info" @click="showInfo">
    Show info toast on top
  </MazBtn>

  <MazBtn color="danger" @click="showError">
    Show error toast on bottom
  </MazBtn>

  <MazBtn color="warning" @click="showWarning">
    Show warning toast on top right
  </MazBtn>

  <MazBtn color="success" @click="showSuccess">
    Show success toast on bottom left
  </MazBtn>
</div>

<script lang="ts" setup>
  import { inject } from 'vue'

  const toast = inject<ToasterHandler>('toast')

  function showInfo () {
    toast.info('Info message', {
      position: 'top'
    })
  }

  function showError () {
    toast.error('Error message', {
      position: 'bottom'
    })
  }

  function showWarning () {
    toast.warning('Warning message', {
      position: 'top-right'
    })
  }

  function showSuccess () {
    toast.success('Success message', {
      position: 'bottom-left'
    })
  }
</script>
