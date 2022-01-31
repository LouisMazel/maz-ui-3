---
title: MazDialog
description: MazBottom is a stand-alone component like a simple dialog but at the bottom of screen
---

# MazDialog

> Before you have to import the global css files in your project, follow instructions in [Getting Started](/maz-ui-3/guide/getting-started.html)

## Basic usage

<br />

<MazBtn @click="isOpen = true">Open Dialog</MazBtn>

<MazDialog v-model="isOpen">
  <div class="maz-text-center maz-w-full">
    Your content
  </div>
  <template #footer>
    <MazBtn @click="isOpen = false">
      Confirm
    </MazBtn>
  </template>
</MazDialog>

<script setup>
  import { ref } from 'vue'
  const isOpen = ref(false)
</script>

```vue
<template>
  <MazBtn @click="isOpen = true">Open Dialog</MazBtn>

  <MazDialog v-model="isOpen">
    <div class="maz-text-center maz-w-full">
      Your content
    </div>
    <template #footer>
      <MazBtn @click="isOpen = false">
        Confirm
      </MazBtn>
    </template>
  </MazDialog>
</template>

<script setup>
  import { ref } from 'vue'
  import MazDialog from 'maz-ui/components/MazDialog'

  const isOpen = ref(false)
</script>
```

## Props & Events emitted

<ComponentPropDoc component="MazDialog" />
