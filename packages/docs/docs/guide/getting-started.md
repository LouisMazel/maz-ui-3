# Getting Started

## Prerequisites

- [Node.js v12+](https://nodejs.org/)
- [Vue 3](https://v3.vuejs.org/)

## Installation

This section will help you to install the library. You have to way to do this. The recommanded way is the "partial"

### Library installation from NPM

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```bash
npm i maz-ui
```
  </CodeGroupItem>
  <CodeGroupItem title="YARN">

```bash
yarn add maz-ui
```
  </CodeGroupItem>

</CodeGroup>

### Partial installation (recommanded)

> Example with some components

```typescript
import { createApp } from 'vue'
import {
  ...
  MazBtn
  MazInput
  MazPicker
  MazPhoneNumberInput
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

### Global installation (not recommanded)

```typescript
import { createApp } from 'vue'
import MazUi from 'maz-ui'

const app = createApp(App)

app.use(MazUi)
```
