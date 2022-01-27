---
title: MazIcon
description: MazBtn is a stand-alone component to load your svg icons
---

# MazIcon

Basically, this component will load your SVG from your project.

Place your SVG files in public a folder (default `/icons`, use `path` prop to change it)

<MazBtn download href="/maz-ui-3/icons/icons.zip" right-icon="Download">
  Download Maz-UI icons set
</MazBtn>

This component use `vue-inline-svg`

<NpmBadge package="vue-inline-svg" dist-tag="next" />

<CodeGroup>

  <CodeGroupItem title="NPM" active>

```bash
# install in your project
npm install vue-inline-svg@next
```
  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
# install in your project
yarn add vue-inline-svg@next
```
  </CodeGroupItem>
</CodeGroup>

## Basic usage

<br />

<div class="flex items-start flex-wrap gap-05">
  <MazIcon v-for="icon in icons" :key="icon" :name="icon" />
</div>

<script setup lang="ts">
  const icons = [
    'ArrowLeft','ArrowRight','Chart','Check','ChevronDown',
    'ChevronUp','Download','Eye','EyeOff','Home',
    'InformationCircle','Menu','Pencil','Plus','PlusCircle',
    'Template','Terminal','Trash','User','UserAdd','UserGroup','X'
  ]
</script>

```vue
<template>
  <MazIcon
    v-for="icon in icons"
    :key="icon"
    :name="icon"
  />
</template>

<script setup lang="ts">
  import { MazIcon } from 'maz-ui'

  const icons = [
    'ArrowLeft','ArrowRight','Chart','Check','ChevronDown',
    'ChevronUp','Download','Eye','EyeOff','Home',
    'InformationCircle','Menu','Pencil','Plus','PlusCircle',
    'Template','Terminal','Trash','User','UserAdd','UserGroup','X'
  ]
</script>
```

## Options

### Set MazIcon path globally

```typescript
import { createApp } from 'vue'
const app = createApp(App)

app.provide('mazIconPath', '/your/custom/path')
```

## Props & Events emitted

<ComponentPropDoc component="MazIcon" />