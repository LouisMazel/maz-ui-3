<template>
  <Component
    v-bind="$attrs"
    :is="component"
    :disabled="isDisabled"
    class="m-btn"
    :class="[
      `--${size}`,
      btnColorClass,
      cursorClass,
      variantClass,
      {
        '--block': block,
        '--no-underline': noUnderline,
        '--no-leading': noLeading,
        '--fab': fab,
        '--loading': loading,
        '--disabled': isDisabled,
        '--icon': hasIcon,
      },
    ]"
    :type="btnType"
  >
    <div v-if="hasLeftIcon" class="m-btn__icon-left">
      <slot name="left-icon">
        <MazIcon v-if="leftIcon" :name="leftIcon" />
      </slot>
    </div>
    <span>
      <slot></slot>
    </span>
    <div v-if="hasRightIcon" class="m-btn__icon-right">
      <slot name="right-icon">
        <MazIcon v-if="rightIcon" :name="rightIcon" />
      </slot>
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
  import { computed, PropType, useAttrs, useSlots } from 'vue'
  import MazSpinner from './MazSpinner.vue'
  import MazIcon from './MazIcon.vue'

  import { Color, Size } from './types'

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
      type: String as PropType<Size>,
      default: 'md',
      validator: (value: string) => {
        return ['mini', 'xs', 'sm', 'md', 'lg', 'xl'].includes(value)
      },
    },
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
    noUnderline: { type: Boolean, default: false },
    noLeading: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    fab: { type: Boolean, default: false },
    leftIcon: { type: String, default: undefined },
    rightIcon: { type: String, default: undefined },
  })

  const component = computed(() => {
    if (href) return 'a'
    else if (to) return 'router-link'
    return 'button'
  })

  const btnColorClass = computed(() =>
    props.pastel
      ? `--${props.color}-pastel`
      : props.outline || props.loading
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
    ['white'].includes(props.color) ? 'black' : 'white',
  )
  const hasLoader = computed(() => props.loading && props.variant === 'button')
  const hasLeftIcon = computed(() => !!slots['left-icon'] || props.leftIcon)
  const hasRightIcon = computed(() => !!slots['right-icon'] || props.rightIcon)
  const hasIcon = computed(() => hasLeftIcon.value || hasRightIcon.value)
  const btnType = computed(() =>
    component.value === 'button' ? props.type : undefined,
  )
</script>

<style lang="postcss" scoped>
  .m-btn {
    @apply maz-text-center maz-text-base maz-border-solid maz-border maz-border-transparent;

    & span {
      @apply maz-leading-none;
    }

    &__icon-left {
      @apply maz-mr-2 maz--ml-1 maz-leading-none;
    }

    &__icon-right {
      @apply maz-ml-2 maz--mr-1 maz-leading-none;
    }

    &.--cursor-pointer {
      @apply maz-cursor-pointer;
    }

    &.--cursor-default {
      @apply maz-cursor-default;
    }

    &.--is-link {
      @apply maz-bg-transparent maz-text-normal-text maz-inline-flex maz-items-center maz-outline-none maz-transition maz-ease-in-out maz-duration-300;

      &:not(.--no-leading) {
        @apply maz-leading-9;
      }

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        &:not(.--no-underline) {
          @apply maz-underline;
        }
      }

      &.--secondary {
        @apply maz-text-secondary;
      }

      &.--info {
        @apply maz-text-info;
      }

      &.--warning {
        @apply maz-text-warning-600;
      }

      &.--danger {
        @apply maz-text-danger-600;
      }

      &.--success {
        @apply maz-text-success-600;
      }

      &.--white {
        @apply maz-text-white;
      }

      &.--black {
        @apply maz-text-black;
      }
    }

    &.--is-button {
      @apply maz-relative maz-overflow-hidden maz-inline-flex maz-bg-transparent maz-justify-center
      maz-items-center maz-transition maz-ease-in-out maz-duration-300 maz-font-medium maz-no-underline
      maz-rounded-lg maz-border-transparent maz-font-base;

      &.--xl {
        @apply maz-px-8 maz-text-xl;

        padding-top: 1.325rem;
        padding-bottom: 1.325rem;
      }

      &.--lg {
        @apply maz-px-6 maz-text-lg;

        padding-top: 1rem;
        padding-bottom: 1rem;
      }

      &.--md {
        @apply maz-px-4 maz-text-base;

        padding-top: 0.88rem;
        padding-bottom: 0.88rem;
      }

      &.--sm {
        @apply maz-px-3 maz-text-sm;

        padding-top: 0.625rem;
        padding-bottom: 0.625rem;
      }

      &.--xs {
        @apply maz-px-2 maz-text-sm;

        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
      }

      &.--mini {
        @apply maz-px-1 maz-text-xs;

        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
      }

      &.--icon {
        @apply maz-py-2;
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
        @apply maz-rounded-full maz-flex maz-items-center maz-justify-center maz-h-12 maz-w-12
        maz-px-0 maz-py-0 maz-drop-shadow-md;
      }

      &.--block {
        @apply maz-w-full;
      }

      &.--primary {
        @apply maz-text-primary-contrast maz-bg-primary;

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

      &.--info {
        @apply maz-text-info-contrast maz-bg-info;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-info-600;
        }
      }

      &.--success {
        @apply maz-text-success-contrast maz-bg-success;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-success-600;
        }
      }

      &.--warning {
        @apply maz-text-warning-contrast maz-bg-warning;

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

      &.--white {
        @apply maz-bg-white maz-text-white-contrast;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-color-light;
        }
      }

      &.--black {
        @apply maz-bg-black maz-text-black-contrast;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-gray-800;
        }
      }

      &.--transparent {
        @apply maz-bg-transparent maz-text-normal-text;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-bg-color-light;
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

      &.--info-outline {
        @apply maz-text-info maz-border-info;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-white maz-bg-info;
        }
      }

      &.--success-outline {
        @apply maz-text-success maz-border-success;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-white maz-bg-success;
        }
      }

      &.--danger-outline {
        @apply maz-text-danger maz-border-danger;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-white maz-bg-danger;
        }
      }

      &.--warning-outline {
        @apply maz-text-warning maz-border-warning;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-white maz-bg-warning;
        }
      }

      &.--white-outline {
        @apply maz-text-white maz-border-white;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-white maz-bg-white;
        }
      }

      &.--black-outline {
        @apply maz-text-black maz-border-black;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-black maz-bg-black;
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
          @apply maz-text-secondary-contrast maz-bg-secondary;
        }
      }

      &.--info-pastel {
        @apply maz-text-info maz-bg-info-50;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-info-contrast maz-bg-info;
        }
      }

      &.--success-pastel {
        @apply maz-text-success maz-bg-success-50;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-success-contrast maz-bg-success;
        }
      }

      &.--danger-pastel {
        @apply maz-text-danger maz-bg-danger-50;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-danger-contrast maz-bg-danger;
        }
      }

      &.--warning-pastel {
        @apply maz-text-warning maz-bg-warning-50;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-warning-contrast maz-bg-warning;
        }
      }

      &.--white-pastel {
        @apply maz-text-white maz-bg-gray-100;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-white-contrast maz-bg-white;
        }
      }

      &.--black-pastel {
        @apply maz-text-black maz-bg-gray-200;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          @apply maz-text-black-contrast maz-bg-black;
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

        &.--info {
          @apply maz-bg-info;
        }

        &.--warning {
          @apply maz-bg-warning;
        }

        &.--success {
          @apply maz-bg-success;
        }

        &.--danger {
          @apply maz-bg-danger;
        }

        &.--white {
          @apply maz-bg-white;
        }

        &.--black {
          @apply maz-bg-black;
        }
      }
    }
  }
</style>
