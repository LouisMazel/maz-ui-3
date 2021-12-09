<template>
  <div class="maz-padded-container maz-flex-1 maz-flex maz-flex-center">
    <div class="maz-flex maz-flex-col">
      <MazNavBar :items="items" class="maz-w-[500px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import MazNavBar, {
    NavItems,
  } from '~mazui/components/MazNavBar/MazNavBar.vue'

  const items = ref<NavItems>([
    { label: 'Home', link: '#' },
    { label: 'Profile', link: '#' },
    { label: 'Settings', link: '#' },
    { label: 'Admin', link: '#' },
  ])
</script>
