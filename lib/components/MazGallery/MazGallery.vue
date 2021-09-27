<template>
  <div v-if="images.length || hasEmptyLayer" class="maz-gallery" :style="[sizeStyle]" :class="{ '--rounded': radius }">
    <section class="maz-gallery__wrapper">
      <figure v-for="(image, i) in imagesShown" :key="i" class="maz-gallery__item" :class="[`maz-gallery__item--${i + 1}`]">
        <img
          v-zoom-img="{
            src: image.slug,
            alt: image.alt,
            disabled: !zoom || shouldHaveRemainingLayer(i),
            blur: blur,
            scale: scale,
          }"
          v-lazy-img:background-image="{ slug: image.slug, disabled: !lazy }"
          class="maz-gallery__item__image"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          :alt="image.alt"
        />
        <div
          v-if="shouldHaveRemainingLayer(i)"
          v-zoom-img="{ src: image.slug, alt: image.alt, disabled: !zoom, blur: blur, scale: scale }"
          class="maz-gallery__remaining-layer maz-bg-overlay"
        >
          <span>+{{ numberImagesRemaining }}</span>
        </div>
      </figure>
      <div
        v-if="hasEmptyLayer && !images.length"
        class="maz-gallery__empty-layer"
        :class="{ '--rounded': radius }"
        :style="[sizeStyle]"
      >
        <i class="material-icons maz-text-gray-400">no_photography</i>
      </div>
    </section>
    <div
      v-for="(image, i) in imagesHidden"
      :key="i"
      v-zoom-img="{ src: image.slug, disabled: !zoom }"
      class="maz-gallery__hidden"
    />
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue'
  import imgDirective from 'vue-zoom-img'
  import Lazy from '../../directives/v-lazy-img'

  export default defineComponent({
    name: 'MazGallery',
    directives: {
      'zoom-img': imgDirective,
      'lazy-img': Lazy,
    },
    props: {
      // Array of string or object: `['https://via.placeholder.com/500', 'https://via.placeholder.com/600']` or `[{ slug: 'https://via.placeholder.com/500', alt: 'image descripton' }, { slug: 'https://via.placeholder.com/600', alt: 'image descripton' }]`
      images: { type: Array as PropType<string[] | { slug: string; alt?: string }[]>, default: Array },
      // Images count shown (max: 5)
      imagesShownCount: { type: Number, default: 5 },
      // Remove transparent layer with the remain count (ex: +2)
      noRemaining: { type: Boolean, default: false },
      // Height of gallery
      height: { type: [Number, String] as PropType<string | number>, default: 150 },
      // Remove default height
      noHeight: { type: Boolean, default: false },
      // Width of gallery
      width: { type: [Number, String], default: '100%' },
      // Remove default width
      noWidth: { type: Boolean, default: false },
      // Add the default border radius to gallery
      radius: { type: Boolean, default: true },
      // Add feature to show the carousel images on click
      zoom: { type: Boolean, default: true },
      // Layer with photography icon when no images is provided
      hasEmptyLayer: { type: Boolean, default: true },
      // Lazy load image - if false, images are directly loaded
      lazy: { type: Boolean, default: true },
      // Blur animation effect on image hover
      blur: { type: Boolean, default: true },
      // Scale animation effect on image hover
      scale: { type: Boolean, default: true },
    },
    setup(props) {
      if (props.imagesShownCount > 5) console.warn('[MazUI](maz-gallery) The maximum of "images-shown-count" is 5')

      const sizeStyle = computed(() => {
        const { height, width, noWidth, noHeight } = props
        return {
          ...(!noWidth
            ? {
                flex: `0 0 ${typeof width === 'number' ? `${width}px` : width}`,
                width: Number.isInteger(width) ? `${width}px` : width,
              }
            : {}),
          ...(!noHeight
            ? {
                height: Number.isInteger(height) ? `${height}px` : `${height}`,
                minHeight: Number.isInteger(height) ? `${height}px` : `${height}`,
              }
            : {}),
        }
      })

      const imagesCount = computed(() => {
        const { imagesShownCount } = props
        return imagesShownCount <= 5 ? imagesShownCount : 5
      })

      const imagesNormalized = computed(() =>
        props.images.map((image: string | { slug: string; alt?: string }) => {
          return typeof image === 'string' ? { slug: image, alt: undefined } : image
        })
      )

      const imagesShown = computed(() => imagesNormalized.value.slice(0, imagesCount.value))

      const imagesHidden = computed(() => {
        const { images } = props
        return imagesNormalized.value.slice(imagesCount.value, images.length)
      })

      const numberImagesRemaining = computed(() => {
        const { images } = props
        return images.length - (images.length < imagesCount.value ? images.length : imagesCount.value)
      })

      const shouldHaveRemainingLayer = (index: number) => {
        return numberImagesRemaining.value && index + 1 === imagesShown.value.length && !props.noRemaining
      }

      return {
        sizeStyle,
        imagesCount,
        imagesNormalized,
        imagesHidden,
        imagesShown,
        numberImagesRemaining,
        shouldHaveRemainingLayer,
      }
    },
  })
</script>

<style lang="postcss" scoped>
  .maz-gallery {
    @apply maz-relative maz-overflow-hidden maz-flex;

    &.--rounded {
      @apply maz-rounded;
    }

    &__wrapper {
      @apply maz-flex maz-flex-1;
    }

    &__hidden {
      @apply maz-hidden;
    }

    &__item {
      @apply maz-flex maz-m-0 maz-absolute maz-top-0 maz-h-1/2 maz-p-0 maz-items-center maz-justify-center
      maz-w-full maz-border-l maz-border-transparent maz-overflow-hidden;

      &--1 {
        @apply maz-left-0 maz-h-full;

        &:not(:last-child) {
          @apply maz-w-1/2;
        }
      }

      &--2 {
        @apply maz-left-1/2 maz-w-1/2 maz-h-1/2;

        &:last-child {
          @apply maz-h-full;
        }

        &:nth-last-child(4) {
          @apply maz-w-1/4;
        }
      }

      &--3 {
        @apply maz-top-1/2 maz-left-1/2 maz-w-1/2;

        &:last-child {
          @apply maz-w-1/2;
        }

        &:nth-last-child(3) {
          @apply maz-top-0 maz-left-3/4;
        }
      }

      &--4 {
        @apply maz-top-1/2 maz-left-1/2 maz-w-1/4 maz-border-t maz-border-transparent;

        &:last-child {
          @apply maz-left-3/4 maz-w-1/4;
        }
      }

      &--5 {
        @apply maz-border-t maz-border-transparent maz-top-1/2 maz-left-3/4 maz-w-1/4;
      }

      &:first-child {
        @apply maz-border-l-0;
      }

      &--3:last-child,
      &--3:nth-last-child(2),
      &--4:last-child,
      &--5 {
        @apply maz-border-t maz-border-transparent;
      }

      &__image {
        @apply maz-flex-1 maz-h-full maz-w-full maz-bg-center maz-bg-cover maz-bg-no-repeat;

        background-color: rgba(0, 0, 0, 0.05);
      }
    }

    &__remaining-layer {
      @apply maz-absolute maz-top-0 maz-bottom-0 maz-left-0 maz-right-0 maz-flex maz-items-center maz-justify-center;

      span {
        @apply maz-text-white maz-text-4xl;
      }
    }

    &__empty-layer {
      /* maz-flex-center */

      /* maz-bg-color-light */

      @apply maz-flex maz-w-full maz-items-center maz-justify-center;

      &.--rounded {
        @apply maz-rounded;
      }
    }
  }
</style>
