<template>
  <svg
    :width="size"
    :height="size"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    xml:space="preserve"
    class="m-spinner"
    :class="`m-spinner--${color}`"
    style="enable-background: new 0 0 50 50"
  >
    <path
      d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
    />
  </svg>
</template>

<script lang="ts" setup>
  defineProps({
    size: { type: String, default: '2em' },
    color: {
      type: String,
      default: 'primary',
      validator: (value: string) => {
        return [
          'info',
          'white',
          'success',
          'warning',
          'danger',
          'primary',
          'black',
        ].includes(value)
      },
    },
  })
</script>

<style lang="postcss" scoped>
  .m-spinner {
    @apply maz-fill-current maz-text-white maz-animate-spin !maz-m-0;

    &--primary {
      @apply maz-text-primary;
    }

    &--black {
      @apply maz-text-black;
    }
  }
</style>
