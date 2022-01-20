---
title: MazBtn
description: MazBtn is a stand-alone component replaces the standard html button with a beautiful design system. Many options like colors, sizes, disabled state, loading state, includes icons. Support of router-link and nuxt-link
---

# MazBtn

> Before you have to import the global css files in your project, follow instructions in [Getting Started](/guide/getting-started.md)

## Options

### Basic usage

<br />

<MazBtn>Button</MazBtn>

```vue
<template>
  <MazBtn>Button</MazBtn>
</template>

<script lang="ts" setup>
  import { MazBtn } from 'maz-ui'
</script>
```

### Loading

<br />

<MazBtn loading>Button</MazBtn>

```vue
<template>
  <MazBtn loading>Button</MazBtn>
</template>
```

### Colors

> Use the attribute `color` with a value in this [list](/guide/colors.md), the component will use this color

<div class="flex items-start gap-05">
  <MazBtn>primary</MazBtn>
  <MazBtn color="secondary">secondary</MazBtn>
  <MazBtn color="info">info</MazBtn>
  <MazBtn color="success">success</MazBtn>
  <MazBtn color="warning">warning</MazBtn>
  <MazBtn color="danger">danger</MazBtn>
  <MazBtn color="white">white</MazBtn>
  <MazBtn color="black">black</MazBtn>
</div>

```vue
<template>
  <MazBtn>primary</MazBtn>
  <MazBtn color="secondary">secondary</MazBtn>
  <MazBtn color="info">info</MazBtn>
  <MazBtn color="success">success</MazBtn>
  <MazBtn color="warning">warning</MazBtn>
  <MazBtn color="danger">danger</MazBtn>
  <MazBtn color="white">white</MazBtn>
  <MazBtn color="black">black</MazBtn>
</template>
```

### Outline

<br />

<div class="flex items-start gap-05">
  <MazBtn outline>primary</MazBtn>
  <MazBtn color="secondary" outline>secondary</MazBtn>
  <MazBtn color="info" outline>info</MazBtn>
  <MazBtn color="success" outline>success</MazBtn>
  <MazBtn color="warning" outline>warning</MazBtn>
  <MazBtn color="danger" outline>danger</MazBtn>
  <MazBtn color="white" outline>white</MazBtn>
  <MazBtn color="black" outline>black</MazBtn>
</div>

```vue
<template>
  <MazBtn outline>primary</MazBtn>
  <MazBtn color="secondary" outline>secondary</MazBtn>
  <MazBtn color="info" outline>info</MazBtn>
  <MazBtn color="success" outline>success</MazBtn>
  <MazBtn color="warning" outline>warning</MazBtn>
  <MazBtn color="danger" outline>danger</MazBtn>
  <MazBtn color="white" outline>white</MazBtn>
  <MazBtn color="black" outline>black</MazBtn>
</template>
```

### Pastel

> It's better in light mode

<br />

<div class="flex items-start gap-05 rounded maz-bg-white maz-p-3">
  <MazBtn pastel>primary</MazBtn>
  <MazBtn color="secondary" pastel>secondary</MazBtn>
  <MazBtn color="info" pastel>info</MazBtn>
  <MazBtn color="success" pastel>success</MazBtn>
  <MazBtn color="warning" pastel>warning</MazBtn>
  <MazBtn color="danger" pastel>danger</MazBtn>
  <MazBtn color="white" pastel>white</MazBtn>
  <MazBtn color="black" pastel>black</MazBtn>
</div>

```vue
<template>
  <MazBtn pastel>primary</MazBtn>
  <MazBtn color="secondary" pastel>secondary</MazBtn>
  <MazBtn color="info" pastel>info</MazBtn>
  <MazBtn color="success" pastel>success</MazBtn>
  <MazBtn color="warning" pastel>warning</MazBtn>
  <MazBtn color="danger" pastel>danger</MazBtn>
  <MazBtn color="white" pastel>white</MazBtn>
  <MazBtn color="black" pastel>black</MazBtn>
</template>
```

### Block

> Will add `width: 100%;`

<MazBtn block>block</MazBtn>

```vue
<template>
  <MazBtn block>block</MazBtn>
</template>
```

### Link

> With the attribute `variant="link"`, the button looks like a link but it's a button, so you can use the event `@click`

<MazBtn variant="link" @click="$emit('click')">Is Link</MazBtn>

```vue
<template>
  <MazBtn variant="link" @click="$emit('click')">Is Link</MazBtn>
</template>
```

### [HTMLLinkElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement)

> When `href` attribute is provided, the component automatically becomes a `<a href="..." />`

<MazBtn href="https://www.google.com" target="_blank">Is Button Link</MazBtn>

```vue
<template>
  <MazBtn href="https://www.google.com" target="_blank">
    Is Button Link
  </MazBtn>
</template>
```

### [RouterLink](https://router.vuejs.org/api/#router-link)

> When `to` attribute is provided, the component automatically becomes a `<RouterLink to="..." />`

<MazBtn :to="{ path: '/made-with-maz-ui.html' }">Is Router Link</MazBtn>

```vue
<template>
  <MazBtn :to="{ path: '/made-with-maz-ui.html' }">
    Is RouterLink
  </MazBtn>
</template>
```

## Props

<ComponentPropDoc component="MazBtn" />