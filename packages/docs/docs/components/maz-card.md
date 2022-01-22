---
title: MazCard
description: MazCard is a stand-alone component to display some texts, images and you can add buttons actions
---

# MazCard

> Before you have to import the global css file in your project, follow instructions in [Getting Started](/guide/getting-started.md)

## Basic usage

<br />

<!-- :images="images" -->
<MazCard>
  <template #title>
    <h4>
      Steven Seagal
    </h4>
  </template>
  <template #subtitle>
    <h5>
      Actor
    </h5>
  </template>
  <template #content>
    <p class="maz-text-muted">
      You're awesome! You're awesome! You're awesome! You're awesome! You're awesome!
    </p>
  </template>
  <template #actions>
    <MazBtn
      size="sm"
      fab
      color="danger"
    />
    <MazBtn
      size="sm"
      color="white"
    >
      <strong>5</strong>
    </MazBtn>
  </template>
</MazCard>

<script setup>
  import { ref } from 'vue'
  const images = ref(['https://www.stevensegallery.com/600/800'])
</script>

```vue
<template>
  <MazCard :images="images">
    <template #title>
      <h4>
        Steven Seagal
      </h4>
    </template>
    <template #subtitle>
      <h5>
        Actor
      </h5>
    </template>
    <template #content>
      <p class="maz-text-muted">
        You're awesome! You're awesome! You're awesome! You're awesome! You're awesome!
      </p>
    </template>
    <template #actions>
      <MazBtn
        size="sm"
        fab
        color="danger"
      />
      <MazBtn
        size="sm"
        color="white"
      >
        <strong>5</strong>
      </MazBtn>
    </template>
  </MazCard>
</template>

<script lang="ts" setup>
  import { MazCard } from 'maz-ui'
  import { ref } from 'vue'
  const images = ref(['https://www.stevensegallery.com/600/800'])
</script>
```

## Props

<ComponentPropDoc component="MazCard" />