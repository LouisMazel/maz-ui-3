<template>
  <div
    class="maz-tabs-bar"
    :class="{
      '--align-left': alignLeft,
    }"
  >
    <MazBtn
      v-for="({ label, disabled }, i) in items"
      :key="i"
      color="transparent"
      :class="{ '--active': currentTab === i, '--disabled': disabled }"
      class="maz-tabs-bar__item --no-styling"
      :disabled="disabled"
      :to="useAnchor ? `#${labelNormalize(label)}` : undefined"
      @click="setValue(i)"
    >
      {{ label }}
    </MazBtn>
    <div :style="tabsIndicatorState" class="maz-tabs-bar__indicator">
      <div class="maz-sub-bar" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, PropType, computed, onBeforeMount, onMounted } from 'vue'
  import { useMazTabs } from './maz-tabs.composable'
  import MazBtn from '@/components/lib/ui/MazBtn.vue'

  // const toSnakeCase = (string: string) => {
  //   return string
  //     .replace(/\W+/g, ' ')
  //     .split(/ |\B(?=[A-Z])/)
  //     .map((word) => word.toLowerCase())
  //     .join('_')
  // }

  const getIndexOfCurrentAnchor = (tabs: MazTabsItem[], value: number) => {
    if (typeof window === 'undefined') return value
    const anchor = window.location.hash.replace('#', '')
    const index = tabs.findIndex(({ label }) => label === anchor)
    return index === -1 ? 0 : index
  }

  const { currentTab } = useMazTabs()

  interface MazTabsItem {
    label: string
    disabled?: boolean
  }

  const props = defineProps({
    items: { type: Array as PropType<MazTabsItem[]>, required: true },
    modelValue: { type: Number, default: 1 },
    alignLeft: { type: Boolean, default: false },
    useAnchor: { type: Boolean, default: false },
  })

  const emits = defineEmits(['update:modelValue'])

  const isMounted = ref(false)

  const tabsIndicatorState = computed(() => {
    if (typeof currentTab.value !== 'number' || !isMounted.value) {
      return
    }

    const tabItems = document.querySelectorAll('.maz-tabs-bar__item')
    const tabItemActive = tabItems?.[currentTab.value] as HTMLElement

    const indicatorWidth = tabItemActive ? tabItemActive.clientWidth : 0
    const translateXValue = tabItemActive ? tabItemActive.offsetLeft : 0
    return {
      transform: `translateX(${translateXValue}px)`,
      width: `${indicatorWidth}px`,
    }
  })

  onBeforeMount(() => {
    const { modelValue, useAnchor, items } = props
    if (modelValue < 1 || modelValue > items.length)
      throw new Error(
        `[Maz-ui](maz-tabs-bar) The init value should be between 1 and ${items.length}`,
      )

    if (!useAnchor) setValue(modelValue - 1)
  })

  onMounted(async () => {
    setTimeout(() => {
      const { useAnchor, items, modelValue } = props

      if (useAnchor) {
        const valueIndex = modelValue - 1
        const tabActive =
          useAnchor && !Number.isInteger(currentTab.value)
            ? getIndexOfCurrentAnchor(items, valueIndex)
            : valueIndex
        setValue(tabActive)
      }
      isMounted.value = true
    }, 300)
  })

  const setValue = (i: number) => {
    currentTab.value = i
    emits('update:modelValue', i + 1)
  }

  const labelNormalize = (label: string) => {
    return label
  }
</script>

<style lang="postcss" scoped>
  /* stylelint-disable no-descending-specificity */
  .maz-tabs-bar {
    @apply maz-relative maz-flex maz-space-x-1 maz-overflow-x-auto;

    &:not(.--align-left) {
      & .maz-tabs-bar__item {
        @apply maz-flex-1;
      }
    }

    &__item {
      &.--active {
        @apply maz-text-primary;
      }
    }

    &__indicator {
      @apply maz-absolute maz-bottom-0 maz-left-0 maz-h-[2px] maz-text-center maz-transition-all maz-duration-500 maz-ease-in-out;

      & .maz-sub-bar {
        @apply maz-mx-auto maz-h-[2px] maz-w-[60%] maz-bg-primary;
      }
    }
  }
</style>
