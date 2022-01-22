---
title: MazDialog
description: MazBottom is a stand-alone component like a simple dialog but at the bottom of screen
---

# MazDialog

> Before you have to import the global css file in your project, follow instructions in [Getting Started](/guide/getting-started.md)

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
  import { MazDialog } from 'maz-ui'

  const isOpen = ref(false)
</script>
```

## Props

<ComponentPropDoc component="MazDialog" />
