<template>
  <div class="maz-padded-container">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div class="maz-flex maz-flex-col">
      <MazBtn>OKok</MazBtn>
      <MazInput v-model="inputValue" />
      <MazInput2 v-model="inputValue" label="Label" placeholder="example" />
      <MazBtnGroup v-model="btnGroupValue" :items="btnGroupItems" />
      <MazGallery
        :images="[
          'https://www.stevensegallery.com/640/500',
          {
            slug: 'https://www.stevensegallery.com/640/600',
            alt: 'image description',
          },
          {
            slug: 'https://www.stevensegallery.com/640/700',
            alt: 'image description',
          },
          'https://www.stevensegallery.com/640/800',
          'https://www.stevensegallery.com/640/1000',
          'https://www.stevensegallery.com/1200/1200',
        ]"
        :height="400"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'App',
    setup() {
      const btnGroupValue = ref(null)
      const btnGroupItems = ref([
        { value: 55, label: '55' },
        { value: 44, label: '44' },
      ])
      const inputValue = ref()

      return {
        inputValue,
        btnGroupItems,
        btnGroupValue,
      }
    },
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
