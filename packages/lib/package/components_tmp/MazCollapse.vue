<template>
  <div class="m-collapse" :class="{ '-collapsed': !showMore }">
    <slot name="preview"></slot>

    <MazTransitionExpand>
      <div v-show="showMore" class="m-collapse-content">
        <slot></slot>
      </div>
    </MazTransitionExpand>
    <div>
      <MazBtn
        color="white"
        block
        class="m-collapse-toggle-btn"
        :class="{ 'maz-mt-4': showMore }"
        @click="showMore = !showMore"
      >
        <slot name="collapse-toggle" :collapsed="!showMore">
          {{ collapseToggleTxt }}
        </slot>
      </MazBtn>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import MazBtn from './MazBtn.vue'
  import MazTransitionExpand from './MazTransitionExpand.vue'

  const props = defineProps({
    showMoreTxt: { type: String, default: 'Voir plus' },
    showLessTxt: { type: String, default: 'Voir moins' },
    collapsed: { type: Boolean, default: false },
  })

  const showMore = ref(props.collapsed)
  const collapseToggleTxt = computed(() =>
    showMore.value ? props.showLessTxt : props.showMoreTxt,
  )
</script>
