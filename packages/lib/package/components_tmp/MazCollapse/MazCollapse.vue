<template>
  <div
    class="maz-base-component maz-collapse maz-position-relative"
    :class="{
      'maz-is-dark': dark,
      'is-open': isOpen,
    }"
  >
    <MazBtn
      class="maz-collapse__header-btn maz-flex maz-flex-center maz-border-radius-0"
      color="transparent"
      size="md"
      no-shadow
      @click="openContent"
    >
      <!-- Header slot: replace the text in collapse button -->
      <slot name="header-text">
        <!-- `Default Header` -->
        Default Header
      </slot>
      <ArrowIcon
        class="maz-collapse__header-btn__arrow maz-ml-2"
        :white="dark"
        :color="arrowColor"
        :orientation="isOpen ? 'up' : null"
      />
    </MazBtn>
    <MazTransitionExpand class="maz-collapse__content">
      <div v-show="hasContentOpen">
        <!-- Content default slot -->
        <slot>
          <!-- `<p>Default Content</p>` -->
          <p>Default Content</p>
        </slot>
      </div>
    </MazTransitionExpand>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MazTransitionExpand from '../../components/MazTransitionExpand.vue'
  import ArrowIcon from '../ArrowIcon/ArrowIcon.vue'
  import MazBtn from './../MazBtn/MazBtn.vue'

  /**
   * > MazCollpase is a component to show or not content
   */

  export default defineComponent({
    name: 'MazCollapse',
    components: {
      MazTransitionExpand,
      ArrowIcon,
      MazBtn,
    },
    props: {
      // Value is a Boolean to open or close the collapse
      modelValue: { type: Boolean, default: false },
      // Set `true` to enable dark mode
      dark: { type: Boolean, default: false },
      // Is the color of the arrow, must be a hex color
      arrowColor: { type: String, default: 'black' },
    },
    emits: ['update:modelValue'],
    data() {
      return {
        isOpen: this.modelValue,
      }
    },
    computed: {
      hasContentOpen: {
        get(): boolean {
          return this.isOpen
        },
        set(value: boolean) {
          // return a `true` or `false` if the collapse is open or not
          // @arg Boolean
          this.$emit('update:modelValue', value)
          this.isOpen = value
        },
      },
    },
    watch: {
      value(value) {
        this.isOpen = value
      },
    },
    methods: {
      openContent() {
        this.hasContentOpen = !this.hasContentOpen
      },
    },
  })
</script>
