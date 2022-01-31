---
title: currency
description: vClickOutside is a Vue 3 directive to fire click outside from a html element
---

# currency

> This module use the native api [Intl.NumberFormat](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) from browsers


Enter only numbers

<MazInput v-model="numberValue" type="number" />

<div
  style="padding: 16px; margin-top: 16px; background-color: var(--maz-color-bg-lighter);"
  class="flex flex-center rounded"
>
  {{ priceFormatted }}
</div>

<script lang="ts" setup>
  import { currency } from 'maz-ui'
  import { ref, computed } from 'vue'

  const numberValue = ref(69)

  const priceFormatted = computed(() =>
    currency(numberValue.value, 'fr-FR', { currency: 'EUR' }),
  )
</script>

```vue
<template>
  <MazInput v-model="numberValue" type="number" />

  <div
    style="padding: 16px; margin-top: 16px; background-color: var(--maz-color-bg-lighter);"
    class="flex flex-center rounded"
  >
    {{ priceFormatted }}
  </div>
</template>

<script lang="ts" setup>
  import { currency } from 'maz-ui'
  import { ref, computed } from 'vue'

  const numberValue = ref(69)

  const priceFormatted = computed(() =>
    currency(numberValue.value, 'fr-FR', { currency: 'EUR' }),
  )
</script>
```

# Options

> All options from [Intl.NumberFormat](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) are availables

```ts
export interface FilterCurrencyOptions extends Intl.NumberFormatOptions {
  round?: boolean
}
```