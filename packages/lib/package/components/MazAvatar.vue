<template>
  <Component
    :is="componentType"
    :style="{ fontSize: size }"
    class="m-avatar"
    :class="[
      {
        '--has-link': isLink,
      },
    ]"
    v-bind="$attrs"
    :href="href"
    :to="to"
    :target="isLink ? target : undefined"
  >
    <div
      class="m-avatar__wrapper"
      :tabindex="clickable ? 0 : -1"
      :class="{
        '--has-shadow': !noElevation,
        '--bordered': bordered,
        '--clickable': clickable,
        '--square': square,
        '--has-initial': !src && caption,
      }"
      @keydown.enter="clickable ? $emit('click', $event) : undefined"
    >
      <MazLazyImg
        v-if="src"
        class="m-avatar__picture"
        :image="src"
        :alt="alt"
        image-height-full
        :no-loader="noLoader"
        @click="clickable ? $emit('click', $event) : null"
      />
      <slot v-if="caption" name="round-text">
        <span class="m-avatar__initial"> {{ caption?.charAt(0) }} </span>
      </slot>

      <button
        v-if="clickable"
        type="button"
        tabindex="-1"
        class="m-avatar__button maz-flex maz-flex-center"
        @click="$emit('click', $event)"
      >
        <slot name="icon">
          <MazIcon name="Pencil" class="m-avatar__button__icon" />
        </slot>
      </button>
    </div>
    <slot name="caption">
      <p v-if="showCaption && caption" class="m-avatar__caption">
        {{ caption }}
      </p>
    </slot>
  </Component>
</template>

<script lang="ts" setup>
  import { PropType, computed } from 'vue'
  import MazLazyImg from './MazLazyImg.vue'
  import MazIcon from './MazIcon.vue'

  const props = defineProps({
    // url or path of the image
    src: {
      type: String as PropType<undefined | null | string>,
      default: undefined,
    },
    caption: {
      type: String as PropType<undefined | null | string>,
      default: undefined,
    },
    // url or path to link another page
    href: { type: String, default: undefined },
    // route config
    to: { type: Object, default: undefined },
    // alt text of image
    alt: { type: String, default: 'avatar image' },
    // target attribute of link (if url is provide)
    target: { type: String, default: '_self' },
    // size of avatar
    size: { type: String, default: undefined },
    // add border around the avatar
    bordered: { type: Boolean, default: false },
    // add an edit layer & emit `edit` event on click
    clickable: { type: Boolean, default: false },
    // Make the avatar square
    square: { type: Boolean, default: false },
    // Remove the shadow behind the avatar
    noElevation: { type: Boolean, default: false },
    showCaption: { type: Boolean, default: false },
    imageHeightFull: { type: Boolean, default: false },
    noLoader: { type: Boolean, default: false },
  })

  const componentType = computed(() =>
    props.to ? 'RouterLink' : props.href ? 'a' : 'div',
  )
  const isLink = computed(() => !!props.to || !!props.href)

  defineEmits(['click'])
</script>

<style lang="postcss">
  .m-avatar {
    @apply maz-flex maz-flex-col maz-flex-center !maz-no-underline;

    &__caption {
      @apply maz-text-center maz-font-medium maz-mt-[0.5em] maz-truncate maz-w-full maz-capitalize maz-text-[1em] maz-text-black;
    }

    &__initial {
      @apply maz-text-[1.5em] maz-capitalize maz-text-white;
    }

    &__wrapper {
      @apply maz-flex maz-justify-center maz-flex-none maz-rounded-full maz-overflow-hidden maz-relative maz-bg-gray-50
      maz-w-[3em] maz-h-[3em];

      &.--clickable {
        & .m-avatar__button {
          @apply maz-absolute maz-inset-0 maz-w-full maz-border-none maz-outline-none maz-rounded-full maz-bg-transparent maz-cursor-pointer
           maz-opacity-0 maz-scale-0;

          transition: all 200ms ease-in-out;
          transition-property: transform, filter;

          &__icon {
            @apply maz-text-white maz-h-[1.5em] maz-w-[1.5em];
          }
        }

        &:hover,
        &:focus {
          & .m-avatar__picture {
            filter: blur(1.5px);
          }

          & .m-avatar__button {
            @apply maz-opacity-100 maz-scale-105;

            background-color: var(--maz-color-danger-alpha);
          }
        }
      }

      &.--bordered {
        @apply maz-border-2 maz-border-white;
      }

      &.--square {
        @apply maz-rounded-lg;
      }

      &.--has-shadow {
        @apply maz-shadow;
      }

      &.--has-initial {
        @apply maz-bg-primary maz-items-center;

        &.--clickable {
          & .m-avatar__button {
            @apply maz-bg-danger;
          }
        }
      }
    }

    &.--has-link {
      @apply maz-cursor-pointer;
    }
  }
</style>
