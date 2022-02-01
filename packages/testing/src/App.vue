<template>
  <div class="maz-flex maz-flex-col maz-w-full maz-flex-center">
    <MazBtn @click="toggleDarkMode" style="margin-bottom: 16px;">
      Dark Switch
    </MazBtn>

    <div style="position: relative; width: 500px;">
      <MazTabsBar :items="tabs" color="secondary" />

      <MazTabsContent>
        <MazTabsContentItem :tab="1">
          <p> evzionfez </p>
        </MazTabsContentItem>
        <MazTabsContentItem :tab="2">
          <p> evzionfez </p>
        </MazTabsContentItem>
      </MazTabsContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import MazBtn from 'maz-ui/components/MazBtn'
  import MazTabsBar, { MazTabsItem } from 'maz-ui/components/MazTabsBar'
  import MazTabsContent from 'maz-ui/components/MazTabsContent'
  import MazTabsContentItem from 'maz-ui/components/MazTabsContentItem'

  const tabs: MazTabsItem[] = [
    { label: 'First Tab', disabled: false },
    { label: 'Second Tab', disabled: false },
    { label: 'Third Tab', disabled: false },
  ]

  onMounted(() => {
    autoSetDarkMode()
  })

  const autoSetDarkMode = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
