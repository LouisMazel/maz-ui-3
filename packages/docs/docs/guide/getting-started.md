# Getting Started

## Prerequisites

- [Node.js v12+](https://nodejs.org/)
- [Vue 3](https://v3.vuejs.org/)

## Installation

This section will help you to install the library.

### Library installation from NPM

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```bash
npm i maz-ui@next
```
  </CodeGroupItem>
  <CodeGroupItem title="YARN">

```bash
yarn add maz-ui@next
```
  </CodeGroupItem>

</CodeGroup>

### Import necessary CSS files

In the `main.js` or `main.ts`, import these files.

```ts
import 'maz-ui/main.css'
import 'maz-ui/colors-vars.css'
```

### Recommanded

To optimize your bundle size, it's recommanded to use the partial import

#### Global component installation (recommanded)

> Example with some components

```typescript
import { createApp } from 'vue'
import {
  ...
  MazBtn,
  MazInput,
  MazPicker,
  MazPhoneNumberInput,
  ...
} from 'maz-ui'

const app = createApp(App)

...
app.component('MazBtn', MazBtn)
app.component('MazInput', MazInput)
app.component('MazPicker', MazPicker)
app.component('MazPhoneNumberInput', MazPhoneNumberInput)
...
```

#### Component import

> Import the module chosen directly in your component

```html
<template>
  <MazBtn>Button</MazBtn>
</template>

<script lang="ts" setup>
  import { MazBtn } from 'maz-ui'
</script>
```

### Not recommanded

#### Fully library installation

```typescript
import { createApp } from 'vue'
import MazUi from 'maz-ui'
import 'maz-ui/main.css'
import 'maz-ui/colors-vars.css'

const app = createApp(App)

app.use(MazUi)
```
