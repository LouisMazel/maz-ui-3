<template>
  <VueSvgInline class="m-icon" :src="`${path}/${name}.svg`" />
</template>

<script lang="ts" setup>
  import VueSvgInline from 'vue-inline-svg'

  defineProps({
    path: { type: String, default: '/icons' },
    name: { type: String, required: true },
  })
</script>
