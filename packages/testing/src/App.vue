<template>
  <div class="maz-padded-container maz-flex-1 maz-flex maz-flex-center">
    <div class="maz-flex maz-flex-col">
      <MazSpinner />
      <MazArrowIcon />
      <MazBtn color="primary"> okok </MazBtn>
      <MazAvatar
        src="https://upload.wikimedia.org/wikipedia/commons/f/ff/G%C3%A9rard_Depardieu_avp_2016_3.jpg"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {
    MazSpinner,
    MazArrowIcon,
    MazBtn,
    MazAvatar,
  } from '~mazui/package/entry.esm'
</script>
