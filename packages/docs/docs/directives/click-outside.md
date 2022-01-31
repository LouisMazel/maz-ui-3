---
title: vClickOutside
description: vClickOutside is a Vue 3 directive to fire click outside from a html element
---

# vClickOutside

<div
  style="padding: 50px; background-color: var(--maz-color-bg-lighter);"
  class="flex flex-center rounded"
>
  <MazCard v-click-outside="clikedOutside">
    Click outside me
  </MazCard>
</div>

<div
  v-if="hasClikedOutside"
  style="padding: 16px; margin-top: 16px; background-color: var(--maz-color-success);"
  class="flex flex-center rounded"
>
  You clicked outside
</div>

<script lang="ts" setup>
  import { vClickOutside } from 'maz-ui'
  import { ref } from 'vue'

  const hasClikedOutside = ref(false)

  const clikedOutside = () => {
    hasClikedOutside.value = true
    setTimeout(() => hasClikedOutside.value = false, 2000)
  }
</script>

```vue
<template>
  <div
    style="padding: 50px; background-color: var(--maz-color-bg-lighter);"
    class="flex flex-center rounded"
  >
    <MazCard v-click-outside="clikedOutside">
      Click outside me
    </MazCard>
  </div>

  <div
    v-if="hasClikedOutside"
    style="padding: 16px; margin-top: 16px; background-color: var(--maz-color-success);"
    class="flex flex-center rounded"
  >
    You clicked outside
  </div>
</template>

<script lang="ts" setup>
  import { vClickOutside } from 'maz-ui'
  import { ref } from 'vue'

  const hasClikedOutside = ref(false)

  const clikedOutside = () => {
    hasClikedOutside.value = true
    setTimeout(() => hasClikedOutside.value = false, 2000)
  }
</script>
```