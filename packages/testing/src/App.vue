<template>
  <MazPhoneNumberInput v-model="inputValue" :options="options" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { MazPhoneNumberInput } from 'maz-ui'

  const inputValue = ref()
  const options = ref([{
    value: 'okok',
    label: 'okok',
  }])
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
