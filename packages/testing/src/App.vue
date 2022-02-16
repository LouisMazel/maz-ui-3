<template>
  <div
    class="maz-flex maz-flex-col maz-w-full maz-flex-center maz-text-normal-text"
  >
    <MazBtn style="margin-bottom: 16px" @click="toggleDarkMode">
      Dark Switch
    </MazBtn>

    <MazGallery :images="images" style="width: 600px" />

    <MazCard collapsable collapse-open overflow-hidden>
      <template #header> Coucou </template>
      <div class="maz-p-2">
        <MazAvatar clickable caption="coucou" />
      </div>
    </MazCard>

    <MazBadge> Coucou </MazBadge>

    <div style="position: relative; width: 500px">
      <MazTabsBar :items="tabs" color="secondary" />

      <MazTabsContent>
        <MazTabsContentItem :tab="1">
          <p>evzionfez</p>
        </MazTabsContentItem>
        <MazTabsContentItem :tab="2">
          <p>evzionfez</p>
        </MazTabsContentItem>
      </MazTabsContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { MazTabsItem } from 'maz-ui/package/components/MazTabsBar.vue'
  import MazBadge from 'maz-ui/components/MazBadge'
  import {
    MazAvatar,
    MazCard,
    MazBtn,
    MazTabsBar,
    MazTabsContent,
    MazTabsContentItem,
    MazGallery,
  } from 'maz-ui/package/components'

  const images = [
    'https://placekitten.com/640/500',
    { src: 'https://placekitten.com/640/600', alt: 'image description' },
    { src: 'https://placekitten.com/640/700', alt: 'image description' },
    'https://placekitten.com/640/800',
    'https://placekitten.com/640/1000',
    'https://placekitten.com/800/800',
  ]

  const tabs: MazTabsItem[] = [
    { label: 'First Tab', disabled: false },
    { label: 'Second Tab', disabled: false },
    { label: 'Third Tab', disabled: false },
  ]

  onMounted(() => {
    autoSetDarkMode()
  })

  const autoSetDarkMode = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  const toggleDarkMode = () => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
