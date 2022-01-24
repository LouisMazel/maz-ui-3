<template>
  <VueSvgInline
    class="m-icon"
    :src="`${iconPath}/${name}.svg`"
    :style="`font-size: ${size}`"
  />
</template>

<script lang="ts" setup>
  import VueSvgInline from 'vue-inline-svg'
  import { computed } from 'vue'
  import { injectStrict } from './../utils/injectStrict'

  let mazIconPath = injectStrict<string>('mazIconPath')

  const props = defineProps({
    path: { type: String, default: '/icons' },
    name: { type: String, required: true },
    size: { type: String, default: '1.5rem' },
  })

  const iconPath = computed(() => mazIconPath ?? props.path)
</script>
