<template>
  <div
    class="maz-base-component maz-avatar maz-flex maz-flex-center maz-flex-initial"
    :style="[pictureSize]"
    :class="{
      'has-link': !!url,
      'maz-elevation': !noElevation,
      bordered: bordered,
      editable,
      square,
    }"
  >
    <a v-if="url" :href="url" :target="target" class="maz-avatar__avatar-link maz-flex maz-flex-center">
      <img :src="picturePath" :alt="alt" class="maz-avatar__picture" />
    </a>
    <img v-else :src="picturePath" :alt="alt" class="maz-avatar__picture" @click="editable ? $emit('edit', $event) : null" />
    <button
      v-if="editable"
      type="button"
      class="maz-avatar__editable-layer maz-flex maz-flex-center"
      @click="$emit('edit', $event)"
    >
      <i class="material-icons" aria-hidden="true"> edit </i>
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'MazAvatar',
    props: {
      // url or path of the image
      src: { type: String, required: true },
      // url or path to link another page
      url: { type: String, default: null },
      // alt text of image
      alt: { type: String, default: 'avatar image' },
      // target attribute of link (if url is provide)
      target: { type: String, default: '_self' },
      // size of avatar
      size: { type: Number, default: 80 },
      // add border around the avatar
      bordered: { type: Boolean, default: false },
      // add an edit layer & emit `edit` event on click
      editable: { type: Boolean, default: false },
      // Make the avatar square
      square: { type: Boolean, default: false },
      // Remove the shadow behind the avatar
      noElevation: { type: Boolean, default: false },
    },
    emits: ['edit'],
    computed: {
      picturePath(): string {
        return this.src
      },
      pictureSize(): { width: string; height: string } {
        const { size } = this
        return {
          width: `${size}px`,
          height: `${size}px`,
        }
      },
    },
  })
</script>
