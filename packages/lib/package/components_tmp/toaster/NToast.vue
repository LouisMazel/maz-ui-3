<template>
  <Transition :name="transitionName">
    <div
      v-show="isActive"
      ref="toaster"
      class="n-toast"
      :class="[`-${type}`, `-${positionY}`, `-${positionX}`]"
      role="alert"
      @mouseover="toggleTimer(true)"
      @mouseleave="toggleTimer(false)"
      @click="click"
    >
      <div class="-icon">
        <NIcon :name="`alert-${type}`" size="2.3em" />
      </div>

      <button v-if="dismissible" class="-close">
        <NIcon name="close" />
      </button>

      <p class="tw-font-bold">
        {{ message }}
      </p>
    </div>
  </Transition>
</template>

<script lang="ts">
  /* eslint-disable vue/no-boolean-default */
  import {
    computed,
    defineComponent,
    onMounted,
    ref,
  } from '@nuxtjs/composition-api'

  import { Positions } from '~/plugins/toaster/positions'
  import { Timer } from '~/plugins/toaster/timer'

  export default defineComponent({
    inheritAttrs: false,
    props: {
      position: {
        type: String,
        default: Positions.TOP,
        required: true,
      },
      maxToasts: {
        type: [Number, Boolean],
        default: false,
      },
      timeout: {
        type: Number,
        required: true,
      },
      queue: {
        type: Boolean,
        default: false,
      },
      pauseOnHover: {
        type: Boolean,
        default: true,
      },
      onClose: {
        type: Function,
        default: () => {},
      },
      onClick: {
        type: Function,
        default: () => {},
      },
      type: {
        type: String,
        default: 'info',
        validator: (value: string) => {
          return ['info', 'success', 'warning', 'danger'].includes(value)
        },
      },
      message: {
        type: String,
        default: '',
      },
      dismissible: {
        type: Boolean,
        default: true,
      },
    },
    setup(props, { refs }) {
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
      const timer = ref<Timer | null>(null)
      const queueTimer = ref<ReturnType<typeof setTimeout> | null>(null)

      const containerClassName = `n-toast-container -${positionY.value} -${positionX.value}`
      const selectorContainerClass = `.${containerClassName.replaceAll(
        ' ',
        '.',
      )}`

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

        if (props.maxToasts !== false) {
          return props.maxToasts <= container!.childElementCount
        }
        return container!.childElementCount > 0
      }

      const showNotice = () => {
        if (shouldQueue()) {
          queueTimer.value = setTimeout(showNotice, 250)
          return
        }

        document
          .querySelector(selectorContainerClass)!
          .prepend(refs.toaster as Element)
        isActive.value = true
        timer.value = props.timeout ? new Timer(close, props.timeout) : null
      }

      const click = () => {
        // eslint-disable-next-line unicorn/prefer-prototype-methods
        Reflect.apply(props.onClick, null, arguments)
        if (props.dismissible) {
          close()
        }
      }

      const toggleTimer = (newVal: boolean) => {
        if (timer.value && props.pauseOnHover) {
          newVal ? timer.value!.pause() : timer.value!.resume()
        }
      }

      const stopTimer = () => {
        timer.value && timer.value.stop()
        clearTimeout(queueTimer.value!)
      }

      const close = () => {
        stopTimer()
        isActive.value = false

        setTimeout(() => {
          // eslint-disable-next-line unicorn/prefer-prototype-methods
          Reflect.apply(props.onClose, null, arguments)
          ;(refs.toaster as Element).remove()

          const container = document.querySelector(selectorContainerClass)
          if (container && !container?.hasChildNodes()) {
            container!.remove()
          }
        }, 250)
      }

      onMounted(() => {
        createParents()
        showNotice()
      })

      return {
        transitionName,
        isActive,
        click,
        toggleTimer,
        positionY,
        positionX,
      }
    },
  })
</script>

<style lang="postcss">
  .n-toast-container {
    @apply tw-flex tw-flex-col tw-fixed tw-z-50 tw-p-4 tw-space-y-4;

    &.-top {
      @apply tw-flex tw-top-0 tw-pt-0;
    }

    &.-center {
      @apply tw-items-center tw-w-full;
    }

    &.-bottom {
      @apply tw-flex tw-bottom-0 tw-flex-col-reverse tw-pb-0;

      & > :not([hidden]) ~ :not([hidden]) {
        margin-bottom: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
        margin-top: calc(1rem * var(--tw-space-y-reverse));
      }
    }

    &.-right {
      @apply tw-right-0 tw-w-full tab-m:tw-w-auto;
    }

    &.-left {
      @apply tw-left-0 tw-w-full tab-m:tw-w-auto;
    }
  }
</style>

<style lang="postcss" scoped>
  .n-toast {
    @apply tw-w-full tw-relative tw-flex tw-py-3 tw-pl-2 tw-pr-5 tab-m:tw-pr-4
      tw-text-white tw-items-center tw-self-center tw-cursor-pointer
      tw-transition tw-ease-in-out tw-duration-300;

    &.-left,
    &.-right {
      @apply tab-m:tw-w-80;
    }

    &.-center {
      @apply tab-m:tw-w-10/12 tab-m:tw-justify-center;
    }

    &.-bottom {
      @apply tw-rounded-t;

      & + .-bottom {
        @apply tw-rounded;
      }
    }

    &.-top {
      @apply tw-rounded-b;

      & + .-top {
        @apply tw-rounded;
      }
    }

    & .-icon {
      @apply tw-pr-1;
    }

    & .-close {
      @apply tw-absolute tw-top-2 tw-right-2;
    }

    &.-info {
      @apply tw-bg-info hover:tw-bg-info-600;
    }

    &.-success {
      @apply tw-bg-success hover:tw-bg-success-600;
    }

    &.-warning {
      @apply tw-bg-warning hover:tw-bg-warning-600;
    }

    &.-danger {
      @apply tw-bg-danger hover:tw-bg-danger-600;
    }
  }
</style>
