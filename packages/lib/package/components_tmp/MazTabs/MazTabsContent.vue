<template>
  <div
    ref="MazTabsContent"
    class="maz-tabs-content maz-relative"
    :class="{ 'maz-overflow-hidden': hideOverflow }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { debounce } from '@/utils/debounce'
  import { ref, watch } from 'vue'
  import { useMazTabs } from './maz-tabs.composable'

  const hideOverflow = ref(false)

  const { currentTab } = useMazTabs()

  const props = defineProps({
    activeTab: { type: Number, default: undefined },
  })

  const setOverflowHiddenTemp = () => {
    hideOverflow.value = true
    allowOverFlow()
  }

  const allowOverFlow = debounce(function () {
    hideOverflow.value = false
  }, 700)

  watch(
    () => [props.activeTab, currentTab.value],
    (values) => {
      setOverflowHiddenTemp()
      if (values[0]) currentTab.value = values[0]
    },
    { immediate: true },
  )
</script>
