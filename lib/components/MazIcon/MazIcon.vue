<template>
  <VueSvgInline class="m-icon" :src="`/icons/${name}.svg`" />
</template>

<script lang="ts" setup>
  import VueSvgInline from 'vue-inline-svg'

  defineProps({
    name: { type: String, required: true },
  })
</script>
