<template>
  <div
    ref="mazSelect"
    class="m-select"
    :class="{ '--is-open': hasListOpen, '--disabled': disabled }"
    @blur.capture="closeList"
    @keydown.esc="closeList"
  >
    <MazInput
      ref="mazInput"
      class="m-select-input"
      v-bind="{
        ...$attrs,
        // 'onUpdate:modelValue': () => {},
      }"
      :color="color"
      :model-value="mazInputValue"
      readonly
      :size="size"
      :disabled="disabled"
      @focus="openList"
      @click="openList"
      @keydown="keyboardHandler($event)"
    >
      <template #right-icon>
        <button
          tabindex="-1"
          class="maz-custom maz-flex maz-flex-center"
          @click="openList"
        >
          <MazIcon
            name="ChevronDown"
            class="m-select-chevron maz-h-5 maz-w-5 maz-mr-2 maz-text-normal-text"
          />
        </button>
      </template>
    </MazInput>
    <Transition :name="listTransition">
      <div
        v-if="hasListOpen"
        ref="optionsList"
        class="m-select-list"
        :style="{ maxHeight: `${maxListHeight}px` }"
      >
        <button
          v-for="(option, i) in options"
          :key="i"
          tabindex="-1"
          type="button"
          class="m-select-list-item maz-custom"
          :class="{
            '--is-keyboard-selected': tmpModelValueIndex === i,
            '--is-selected': selectedOption?.value === option.value,
          }"
          :style="{ height: `${itemHeight}px` }"
          @click.prevent.stop="updateValue(option)"
        >
          <slot :option="option">
            {{ option.label }}
          </slot>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
  import { ref, PropType, computed, onBeforeMount, nextTick } from 'vue'
  import MazInput from './MazInput.vue'
  import MazIcon from './MazIcon.vue'
  import { Color, ModelValueSimple, Size } from './types'

  export interface MazSelectOptions {
    label: string
    value: string | number | boolean | Record<string, any>
  }

  const props = defineProps({
    modelValue: {
      type: [Number, String, Boolean] as PropType<ModelValueSimple>,
      default: undefined,
    },
    options: { type: Array as PropType<MazSelectOptions[]>, required: true },
    position: {
      type: String,
      default: 'left bottom',
      validator: (value: string) => {
        return ['top', 'top right', 'bottom right', 'left bottom'].includes(
          value,
        )
      },
    },
    disabled: { type: Boolean, default: false },
    color: {
      type: String as PropType<Color>,
      default: 'primary',
      validator: (value: string) => {
        return [
          'primary',
          'secondary',
          'warning',
          'danger',
          'info',
          'success',
          'white',
          'black',
          'transparent',
        ].includes(value)
      },
    },
    itemHeight: { type: Number, default: 40 },
    maxListHeight: { type: Number, default: 240 },
    size: {
      type: String as PropType<Size>,
      default: 'md',
      validator: (value: string) => {
        return ['mini', 'xs', 'sm', 'md', 'lg', 'xl'].includes(value)
      },
    },
  })
  const emits = defineEmits(['close', 'open', 'update:model-value', 'blur'])

  const hasListOpen = ref(false)
  const tmpModelValueIndex = ref<number>()

  onBeforeMount(() => {
    if (selectedOption.value)
      tmpModelValueIndex.value = props.options.findIndex(
        ({ value }) => value === selectedOption.value?.value,
      )
  })

  const mazSelect = ref<HTMLDivElement>()
  const mazInput = ref<typeof MazInput>()
  const optionsList = ref<HTMLDivElement>()

  const selectedOption = computed(() =>
    props.options.find(({ value }) => props.modelValue === value),
  )

  const mazInputValue = computed(() => selectedOption.value?.label)

  const listTransition = computed(() =>
    props.position.includes('bottom') ? 'maz-slide' : 'maz-slideinvert',
  )

  const closeList = async (event?: FocusEvent | KeyboardEvent) => {
    if (
      event &&
      (('relatedTarget' in event &&
        mazSelect.value?.contains(event.relatedTarget as Node)) ||
        event.type === 'keydown')
    ) {
      return event.preventDefault()
    }

    await nextTick()
    hasListOpen.value = false
    emits('close', event)
  }

  const openList = (event?: Event) => {
    event?.preventDefault()
    if (props.disabled) return
    hasListOpen.value = true
    scrollToSelected()
    emits('open', event)
  }

  const keyboardHandler = (event: KeyboardEvent) => {
    const code = event.code

    const currentIndex = tmpModelValueIndex.value

    if (code === 'ArrowUp' || code === 'ArrowDown') {
      event.preventDefault()
      if (!hasListOpen.value) openList(event)
      const optionsLength = props.options.length
      if (typeof currentIndex !== 'number') {
        return (tmpModelValueIndex.value =
          code === 'ArrowDown' ? 0 : optionsLength - 1)
      } else {
        if (currentIndex === optionsLength - 1 && code === 'ArrowDown') {
          tmpModelValueIndex.value = 0
        } else if (currentIndex === 0 && code === 'ArrowUp') {
          tmpModelValueIndex.value = optionsLength - 1
        } else {
          tmpModelValueIndex.value =
            code === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1
        }
        updateValue(props.options[tmpModelValueIndex.value], false)
      }
      scrollToSelected()
    } else if (code === 'Enter' && hasListOpen.value) {
      event.preventDefault()
      if (typeof currentIndex === 'number') {
        const newValue = props.options[currentIndex]
        if (newValue.value !== props.modelValue) updateValue(newValue)
        else {
          closeList()
        }
      }
    } else if (hasListOpen.value) {
      searching(event)
    }
  }

  const searchQuery = ref<string>('')

  const searching = ({ key, code }: KeyboardEvent) => {
    let queryTimer: ReturnType<typeof setTimeout> | undefined = undefined

    clearTimeout(queryTimer)
    queryTimer = setTimeout(() => {
      searchQuery.value = ''
    }, 2000)

    if (code === 'Backspace') {
      searchQuery.value = searchQuery.value.substring(
        0,
        searchQuery.value.length - 1,
      )
    } else if (key.match(/^[a-z0-9]+$/i) && key.length === 1) {
      searchQuery.value += key.toLowerCase()

      const resultIndex = props.options.findIndex((option) => {
        return option.label.toLowerCase().includes(searchQuery.value)
      })
      tmpModelValueIndex.value = resultIndex
      scrollToSelected()
    }
  }

  const scrollToSelected = async (itemIndex = tmpModelValueIndex.value) => {
    if (itemIndex) {
      await nextTick()
      optionsList.value?.scrollTo({
        top: itemIndex * props.itemHeight - props.itemHeight,
      })
    }
  }

  const updateValue = ({ value }: MazSelectOptions, mustCloseList = true) => {
    tmpModelValueIndex.value = props.options.findIndex(
      (option) => value === option.value,
    )
    if (mustCloseList) closeList()
    return emits('update:model-value', value)
  }
</script>

<style lang="postcss" scoped>
  .m-select {
    @apply maz-relative;

    &:not(.--disabled) {
      @apply maz-cursor-pointer;

      &:deep(input) {
        @apply maz-cursor-pointer;
      }
    }

    &-chevron {
      @apply maz-transition-all maz-ease-out maz-duration-300;
    }

    &.--is-open {
      & .m-select-chevron {
        @apply maz-rotate-180;
      }
    }

    &-list {
      @apply maz-absolute maz-bg-color maz-drop-shadow maz-rounded-lg maz-z-100 maz-overflow-auto maz-elevation;

      min-width: 3.5rem;

      &-item {
        @apply maz-px-4 hover:maz-bg-color-light maz-w-full maz-flex maz-items-center maz-text-left;

        &.--is-keyboard-selected {
          @apply maz-font-medium maz-bg-color-light;
        }

        &.--is-selected {
          @apply maz-bg-primary maz-font-semibold maz-text-white;
        }
      }
    }

    & button.maz-custom {
      @apply maz-appearance-none maz-border-none maz-bg-transparent maz-cursor-pointer;
    }
  }
</style>
