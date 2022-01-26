<template>
  <span
    class="m-badge"
    :class="[
      `--${color}`,
      { '--outline': outline, '--pastel': pastel, '--nowrap': nowrap },
      `--rounded-${roundedSize}`,
    ]"
    :style="{ fontSize: size }"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
  defineProps({
    color: {
      type: String,
      default: 'primary',
      validator: (value: string) => {
        return [
          'primary',
          'warning',
          'secondary',
          'danger',
          'gray',
          'success',
        ].includes(value)
      },
    },
    size: { type: String, default: undefined },
    nowrap: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    pastel: { type: Boolean, default: false },
    roundedSize: {
      type: String,
      default: 'lg',
      validator: (value: string) => {
        return ['sm', 'md', 'lg', 'xl', 'full'].includes(value)
      },
    },
  })
</script>

<style lang="postcss" scoped>
  .m-badge {
    @apply maz-inline-flex maz-items-center maz-justify-center maz-py-[0.25em]
    maz-px-[0.5em] maz-text-[0.8em] maz-font-medium maz-leading-[1.4em];

    &.--nowrap {
      @apply maz-whitespace-nowrap;
    }

    &.--rounded {
      &-sm {
        @apply maz-rounded-sm;
      }

      &-md {
        @apply maz-rounded;
      }

      &-lg {
        @apply maz-rounded-lg;
      }

      &-xl {
        @apply maz-rounded-xl;
      }

      &-full {
        @apply maz-rounded-full;
      }
    }

    &.--primary {
      @apply maz-border-primary maz-bg-primary maz-text-primary-contrast;

      &.--outline {
        @apply maz-border maz-bg-transparent maz-text-primary;
      }

      &.--pastel {
        @apply maz-border-primary-100 maz-bg-primary-100 maz-text-primary-800;
      }
    }

    &.--gray {
      @apply maz-border-gray-400 maz-bg-gray-400 maz-text-primary-contrast;

      &.--outline {
        @apply maz-border maz-bg-transparent maz-text-gray-400;
      }

      &.--pastel {
        @apply maz-border-gray-100 maz-bg-gray-100 maz-text-gray-800;
      }
    }

    &.--danger {
      @apply maz-border-danger maz-bg-danger maz-text-danger-contrast;

      &.--outline {
        @apply maz-border maz-bg-transparent maz-text-danger;
      }

      &.--pastel {
        @apply maz-border-danger-100 maz-bg-danger-100 maz-text-danger-800;
      }
    }

    &.--secondary {
      @apply maz-border-secondary maz-bg-secondary maz-text-secondary-contrast;

      &.--outline {
        @apply maz-border maz-bg-transparent maz-text-secondary;
      }

      &.--pastel {
        @apply maz-border-secondary-100 maz-bg-secondary-100 maz-text-secondary-800;
      }
    }

    &.--warning {
      @apply maz-border-warning maz-bg-warning maz-text-warning-contrast;

      &.--outline {
        @apply maz-border maz-bg-transparent maz-text-warning;
      }

      &.--pastel {
        @apply maz-border-warning-100 maz-bg-warning-100 maz-text-warning-800;
      }
    }

    &.--success {
      @apply maz-border-success maz-bg-success maz-text-success-contrast;

      &.--outline {
        @apply maz-border maz-bg-transparent maz-text-success;
      }

      &.--pastel {
        @apply maz-border-success-100 maz-bg-success-100 maz-text-success-800;
      }
    }
  }
</style>
