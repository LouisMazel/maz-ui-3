<template>
  <picture
    v-lazy-img="{
        noPhoto,
        observerOnce: !noObserverOnce,
        loadOnce,
        onIntersecting: (el: HTMLElement) => $emit('intersecting', el),
        onLoading: (el: HTMLElement) => $emit('loading', el),
        onLoaded: (el: HTMLElement) => $emit('loaded', el),
        onError: (el: HTMLElement) => $emit('error', el),
        observerOptions,
      }"
    class="m-lazy-img-component"
    :class="{ '-use-loader': !noLoader, '--height-full': imageHeightFull }"
  >
    <source v-for="({ srcset, media }, sourceIndex) in sources" :key="sourceIndex" :data-srcset="srcset" :media="media" />
    <img v-bind="$attrs" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
    <div v-if="!noLoader" class="m-lazy-img-component-loader">
      <MazSpinner color="black" size="2em" />
    </div>
    <slot />
  </picture>
</template>

<script lang="ts">
  import { defineComponent, Prop, computed } from 'vue'
  import { GlobalOptions } from '~directives/v-lazy-img/types'
  import { lazyImgDirective } from '~directives/v-lazy-img/lazy-img.directive'
  import MazSpinner from './../MazSpinner/MazSpinner.vue'

  interface Source {
    srcset?: string
    media?: string
  }

  export interface DataImage {
    sources?: Source[]
  }

  export type Image = DataImage | string

  export default defineComponent({
    components: { MazSpinner },
    directives: {
      lazyImg: lazyImgDirective,
    },

    props: {
      image: { type: [String, Object], default: undefined } as Prop<Image>,
      noPhoto: { type: Boolean, default: false },
      noLoader: { type: Boolean, default: false },
      noObserverOnce: { type: Boolean, default: false },
      loadOnce: { type: Boolean, default: false },
      imageHeightFull: { type: Boolean, default: false },
      observerOptions: { type: Object, default: null } as Prop<GlobalOptions['observerOptions']>,
    },

    emits: ['intersecting', 'loading', 'loaded', 'error'],

    setup(props) {
      const sources = computed(() => (typeof props.image === 'string' ? [{ srcset: props.image }] : props.image?.sources))

      return {
        sources,
      }
    },
  })
</script>

<style lang="postcss" scoped>
  /* stylelint-disable no-descending-specificity */
  .m-lazy-img-component {
    @apply maz-relative maz-bg-gray-100 maz-flex maz-flex-center;

    &-loader {
      @apply maz-hidden maz-absolute maz-inset-0 maz-flex-center;
    }

    &:not(.m-lazy-error):not(.m-lazy-no-photo) img {
      @apply maz-h-full maz-w-full;
    }

    &.--height-full img {
      @apply !maz-w-min !maz-max-w-min !maz-max-h-full;
    }

    &:not(.m-lazy-loaded):not(.m-lazy-no-photo) {
      & .m-lazy-img-component-loader {
        @apply maz-flex;
      }
    }
  }
</style>
