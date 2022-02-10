<template>
  <Transition :name="transitionName">
    <div
      v-show="isActive"
      ref="Toaster"
      class="m-toast"
      :class="[`-${color}`, `-${positionY}`, `-${positionX}`]"
      role="alert"
      @mouseover="toggleTimer(true)"
      @mouseleave="toggleTimer(false)"
      @click="click"
    >
      <div class="-icon">
        <NIcon :name="`alert-${color}`" size="2.3em" />
      </div>

      <button v-if="!persistent" class="-close">
        <NIcon name="close" />
      </button>

      <p class="maz-font-bold">
        {{ message }}
      </p>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
  import { Color } from 'package/components/types'
  import { computed, onMounted, PropType, ref } from 'vue'
  import { ToasterPositions } from './positions'
  import { ToasterTimer } from './timer'

  const Toaster = ref<HTMLDivElement>()

  const props = defineProps({
    position: {
      type: String as PropType<ToasterPositions>,
      default: ToasterPositions.TOP,
      required: true,
    },
    maxToasts: { type: [Number, Boolean], default: false },
    timeout: { type: Number, required: true },
    queue: { type: Boolean, default: false },
    noPauseOnHover: { type: Boolean, default: false },
    color: {
      type: String as PropType<Color>,
      default: 'info',
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
    message: { type: String, default: undefined },
    persistent: { type: Boolean, default: false },
  })

  const emits = defineEmits(['close', 'click'])

  const positionY = computed(() =>
    props.position.includes('top') ? 'top' : 'bottom',
  )
  const positionX = computed(() => {
    if (props.position.includes('left')) return 'left'
    if (props.position.includes('right')) return 'right'
    return 'center'
  })

  const transitionName = computed(() => {
    if (positionX.value !== 'center') {
      return positionX.value === 'right' ? 'n-slide-right' : 'n-slide-left'
    }
    return positionY.value === 'top' ? 'n-slide-top' : 'n-slide-bottom'
  })

  const isActive = ref(false)
  const timer = ref<ToasterTimer>()
  const queueTimer = ref<ReturnType<typeof setTimeout>>()

  const containerClassName = `n-toast-container -${positionY.value} -${positionX.value}`
  const selectorContainerClass = `.${containerClassName.replaceAll(' ', '.')}`

  const createParents = () => {
    const container = document.querySelector(selectorContainerClass)

    if (container) return

    if (!container) {
      const body = document.body
      const toCreate = document.createElement('div')
      toCreate.className = containerClassName
      body.append(toCreate)
    }
  }

  const shouldQueue = () => {
    const container = document.querySelector(selectorContainerClass)

    if (!props.queue && props.maxToasts === false) {
      return false
    }

    if (props.maxToasts !== false && container) {
      return props.maxToasts <= container.childElementCount
    }
    return container && container.childElementCount > 0
  }

  const showNotice = () => {
    if (shouldQueue()) {
      queueTimer.value = setTimeout(showNotice, 250)
      return
    }

    const container = document.querySelector(selectorContainerClass)

    if (Toaster.value && container) {
      container.prepend(Toaster.value)
    }

    isActive.value = true
    timer.value = props.timeout
      ? new ToasterTimer(close, props.timeout)
      : undefined
  }

  function click() {
    // eslint-disable-next-line unicorn/prefer-prototype-methods
    emits('click')
    if (!props.persistent) {
      close()
    }
  }

  const toggleTimer = (newVal: boolean) => {
    if (timer.value && !props.noPauseOnHover) {
      newVal ? timer.value.pause() : timer.value.resume()
    }
  }

  const stopTimer = () => {
    timer.value && timer.value.stop()
    if (queueTimer.value) {
      clearTimeout(queueTimer.value)
    }
  }

  const close = () => {
    stopTimer()
    isActive.value = false

    setTimeout(() => {
      // eslint-disable-next-line unicorn/prefer-prototype-methods
      emits('close')
      Toaster.value?.remove()

      const container = document.querySelector(selectorContainerClass)
      if (container && !container?.hasChildNodes()) {
        container.remove()
      }
    }, 250)
  }

  onMounted(() => {
    createParents()
    showNotice()
  })
</script>

<style lang="postcss">
  .m-toast-container {
    @apply maz-fixed maz-z-50 maz-flex maz-flex-col maz-space-y-4 maz-p-4;

    &.-top {
      @apply maz-top-0 maz-flex maz-pt-0;
    }

    &.-center {
      @apply maz-w-full maz-items-center;
    }

    &.-bottom {
      @apply maz-bottom-0 maz-flex maz-flex-col-reverse maz-pb-0;

      & > :not([hidden]) ~ :not([hidden]) {
        margin-bottom: calc(1rem * calc(1 - var(--maz-space-y-reverse)));
        margin-top: calc(1rem * var(--maz-space-y-reverse));
      }
    }

    &.-right {
      @apply maz-right-0 maz-w-full tab-m:maz-w-auto;
    }

    &.-left {
      @apply maz-left-0 maz-w-full tab-m:maz-w-auto;
    }
  }
</style>

<style lang="postcss" scoped>
  .m-toast {
    @apply maz-relative maz-flex maz-w-full maz-cursor-pointer maz-items-center maz-self-center maz-py-3
      maz-pl-2 maz-pr-5 maz-text-white maz-transition
      maz-duration-300 maz-ease-in-out tab-m:maz-pr-4;

    &.-left,
    &.-right {
      @apply tab-m:maz-w-80;
    }

    &.-center {
      @apply tab-m:maz-w-10/12 tab-m:maz-justify-center;
    }

    &.-bottom {
      @apply maz-rounded-t;

      & + .-bottom {
        @apply maz-rounded;
      }
    }

    &.-top {
      @apply maz-rounded-b;

      & + .-top {
        @apply maz-rounded;
      }
    }

    & .-icon {
      @apply maz-pr-1;
    }

    & .-close {
      @apply maz-absolute maz-top-2 maz-right-2;
    }

    &.-info {
      @apply maz-bg-info hover:maz-bg-info-600;
    }

    &.-success {
      @apply maz-bg-success hover:maz-bg-success-600;
    }

    &.-warning {
      @apply maz-bg-warning hover:maz-bg-warning-600;
    }

    &.-danger {
      @apply maz-bg-danger hover:maz-bg-danger-600;
    }
  }
</style>
