<template>
  <VueSvgInline
    class="m-icon"
    :src="`${path}/${name}.svg`"
    :style="`font-size: ${size}`"
  />
</template>

<script lang="ts" setup>
  import VueSvgInline from 'vue-inline-svg'

  defineProps({
    path: { type: String, default: '/icons' },
    name: { type: String, required: true },
    size: { type: String, default: '1.5rem' },
  })
</script>
