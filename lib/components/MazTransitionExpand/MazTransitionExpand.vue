<template>
  <transition
    class="maz-base-component maz-transition-expand"
    name="maz-expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script lang="ts">
  import { defineComponent, nextTick } from 'vue'

  const enter = (element: HTMLElement) => {
    const width = getComputedStyle(element).width

    element.style.width = width
    element.style.position = 'absolute'
    element.style.visibility = 'hidden'
    element.style.height = 'auto'
    element.style.top = 'bottom'

    const height = getComputedStyle(element).height

    element.style.width = ''
    element.style.position = ''
    element.style.visibility = ''
    element.style.height = '0px'

    // Force repaint to make sure the
    // animation is triggered correctly.
    /* eslint-disable */
    getComputedStyle(element).height
    /* eslint-enable */

    // Trigger the animation.
    // We use `setTimeout` because we need
    // to make sure the browser has finished
    // painting after setting the `height`
    // to `0` in the line above.
    nextTick(() => {
      element.style.height = height
    })
  }
  const afterEnter = (element: HTMLElement) => {
    element.style.height = 'auto'
  }
  const leave = (element: HTMLElement) => {
    const height = getComputedStyle(element).height
    element.style.height = height

    // Force repaint to make sure the
    // animation is triggered correctly.
    /* eslint-disable */
        getComputedStyle(element).height
        /* eslint-enable */
    nextTick(() => {
      element.style.height = '0px'
    })
  }

  export default defineComponent({
    name: 'MazTransitionExpand',
    setup() {
      return {
        enter,
        afterEnter,
        leave,
      }
    },
  })
</script>
