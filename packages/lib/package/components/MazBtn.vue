<template>
  <Component
    v-bind="$attrs"
    :is="component"
    :disabled="isDisabled"
    class="m-btn maz-bg-primary"
    :class="[
      `--${size}`,
      btnColorClass,
      cursorClass,
      variantClass,
      {
        '--block': block,
        '--no-bordered': noBordered,
        '--no-underline': noUnderline,
        '--no-leading': noLeading,
        '--is-active': active,
        '--fab': fab,
        '--disabled': isDisabled,
        '--icon': hasIcon,
      },
    ]"
    :type="btnType"
  >
    <div v-if="hasLeftIcon" class="m-btn__icon-left">
      <slot name="left-icon"></slot>
    </div>
    <span>
      <slot></slot>
    </span>
    <div v-if="hasRightIcon" class="m-btn__icon-right">
      <slot name="right-icon"></slot>
    </div>
    <div
      v-if="hasLoader"
      class="m-btn__loading-wrapper"
      :class="loaderBgColorClass"
    >
      <MazSpinner size="2em" :color="loaderColor" />
    </div>
  </Component>
</template>

<script lang="ts" setup>
  import { computed, useAttrs, useSlots } from 'vue'
  import MazSpinner from './MazSpinner.vue'

  const { href, to } = useAttrs()
  const slots = useSlots()

  const props = defineProps({
    variant: {
      type: String,
      default: 'button',
      validator: (value: string) => {
        return ['button', 'link'].includes(value)
      },
    },
    size: {
      type: String,
      default: 'md',
      validator: (value: string) => {
        return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
      },
    },
    color: {
      type: String,
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
          'transparent',
        ].includes(value)
      },
    },
    type: {
      type: String,
      default: 'button',
      validator: (value: string) => {
        return ['button', 'submit'].includes(value)
      },
    },
    outline: { type: Boolean, default: false },
    pastel: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    noBordered: { type: Boolean, default: false },
    noUnderline: { type: Boolean, default: false },
    noLeading: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    fab: { type: Boolean, default: false },
  })

  const component = computed(() => {
    if (href) return 'a'
    else if (to) return 'router-link'
    return 'button'
  })

  const btnColorClass = computed(() =>
    props.pastel
      ? `--${props.color}-pastel`
      : props.outline
      ? `--${props.color}-outline`
      : `--${props.color}`,
  )
  const isDisabled = computed(
    () => (props.loading || props.disabled) && component.value === 'button',
  )
  const cursorClass = computed(() =>
    isDisabled.value ? '--cursor-default' : '--cursor-pointer',
  )
  const variantClass = computed(() => `--is-${props.variant}`)
  const loaderBgColorClass = computed(() => `--${props.color}`)
  const loaderColor = computed(() =>
    ['white', 'light', 'transparent'].includes(props.color) ? 'black' : 'white',
  )
  const hasLoader = computed(() => props.loading && props.variant === 'button')
  const hasLeftIcon = computed(() => !!slots['left-icon'])
  const hasRightIcon = computed(() => !!slots['right-icon'])
  const hasIcon = computed(() => hasLeftIcon.value || hasRightIcon.value)
  const btnType = computed(() =>
    component.value === 'button' ? props.type : undefined,
  )
</script>

<style lang="postcss">
  .m-btn {
    @apply maz-text-center maz-text-base;

    &__icon-left {
      @apply maz-mr-[0.5em];

      margin-left: -0.25em;
    }

    &__icon-right {
      @apply maz-ml-[0.5em];

      margin-right: -0.25em;
    }

    &.--cursor-pointer {
      @apply maz-cursor-pointer;
    }

    &.--cursor-default {
      @apply maz-cursor-default;
    }

    &.--is-link {
      @apply maz-bg-transparent maz-inline-flex maz-items-center maz-outline-none maz-transition maz-ease-in-out maz-duration-300;

      &:not(.--no-leading) {
        @apply maz-leading-9;
      }

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        &:not(.-no-underline) {
          @apply maz-underline;
        }
      }

      &.--secondary {
        @apply maz-text-secondary;
      }

      &.--warning {
        @apply maz-text-warning-600;
      }

      &.--white {
        @apply maz-text-white;
      }
    }

    &.--is-button {
      @apply maz-relative maz-overflow-hidden maz-border-none maz-border maz-border-transparent maz-inline-flex maz-bg-transparent maz-justify-center maz-items-center maz-transition maz-ease-in-out maz-duration-300 maz-font-medium maz-no-underline
      maz-rounded-lg maz-px-[1em] maz-py-[0.6em];

      &.--icon {
        @apply maz-py-[0.5em];
      }

      transition: background 300ms ease-in-out 0ms, color 300ms ease-in-out 0ms;

      /* Not disabled */

      &:not(.--disabled) {
        &:hover,
        &:focus {
          @apply maz-bg-gray-200;
        }
      }

      /* Fab */

      &.--fab {
        @apply maz-rounded-full maz-flex maz-items-center maz-justify-center maz-h-[3em] maz-w-[3em]
        maz-px-0 maz-py-0 maz-drop-shadow-md;
      }

      /* Active */
      &.--is-active {
        @apply maz-bg-secondary maz-text-white !important;
      }

      &.--block {
        @apply maz-w-full;
      }

      &.--primary {
        @apply maz-text-primary-contrast maz-bg-primary maz-border-primary;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-primary-600;
        }
      }

      &.--secondary {
        @apply maz-text-white maz-bg-secondary;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-secondary-600;
        }
      }

      &.--warning {
        @apply maz-text-white maz-bg-warning;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-warning-600;
        }
      }

      &.--danger {
        @apply maz-text-white maz-bg-danger;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-danger-600;
        }
      }

      &.--light {
        @apply maz-bg-gray-100 maz-text-gray-700;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-gray-200;
        }
      }

      &.--transparent {
        @apply maz-bg-transparent;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-gray-100;
        }
      }

      &.--white {
        @apply maz-bg-white;

        &:not(.--no-bordered) {
          @apply maz-border maz-border-gray-200;
        }

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-gray-100;
        }
      }

      &.--primary-outline {
        @apply maz-text-primary maz-border-primary;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-primary-contrast maz-bg-primary;
        }
      }

      &.--secondary-outline {
        @apply maz-text-secondary maz-border-secondary;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-white maz-bg-secondary;
        }
      }

      &.--light-outline {
        @apply maz-text-gray-600 maz-border-gray-300;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-white maz-bg-gray-300;
        }
      }

      &.--primary-pastel {
        @apply maz-text-primary maz-bg-primary-50;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-primary-contrast maz-bg-primary;
        }
      }

      &.--secondary-pastel {
        @apply maz-text-secondary maz-bg-secondary-50;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-white maz-bg-secondary;
        }
      }

      &.--light-pastel {
        @apply maz-text-gray-600 maz-bg-gray-50;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-white maz-bg-gray-300;
        }
      }

      /* Disabled */
      &.--disabled {
        @apply maz-text-gray-400 maz-bg-gray-100 maz-cursor-not-allowed;
      }

      /* Loader */
      .m-btn__loading-wrapper {
        @apply maz-absolute maz-inset-0 maz-flex maz-items-center maz-justify-center;

        &.--primary {
          @apply maz-bg-primary;
        }

        &.--secondary {
          @apply maz-bg-secondary;
        }

        &.--light {
          @apply maz-bg-gray-100;
        }

        &.--white {
          @apply maz-bg-white;
        }

        &.--transparent {
          @apply maz-bg-gray-200;
        }
      }
    }
  }
</style>
