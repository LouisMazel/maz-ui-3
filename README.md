# maz-ui-3

[![license](https://img.shields.io/github/license/LouisMazel/maz-ui-3.svg?style=flat-square)](https://github.com/LouisMazel/maz-ui/blob/master/LICENSE)
[![vue 3](https://img.shields.io/badge/vue-3-42b983.svg?style=flat-square)](https://vuejs.org)
[![npm](https://img.shields.io/npm/v/maz-ui/next.svg?style=flat-square)](https://www.npmjs.com/package/maz-ui)
[![npm](https://img.shields.io/npm/dt/maz-ui.svg?style=flat-square)](https://www.npmjs.com/package/maz-ui)
[![Codacy grade](https://img.shields.io/codacy/grade/3d15a7c11bfe47c69a2aed93cc67cc29.svg?style=flat-square)](https://www.codacy.com/app/LouisMazel/maz-ui)

[![npm](https://nodei.co/npm/maz-ui.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/maz-ui)

> [Maz-ui](https://louismazel.github.io/maz-ui/) is a stand-alone components library for [VueJS](https://vuejs.org) & [NuxtJS](https://nuxtjs.org/)

## Documentation & Components

[Documentation & Components](https://louismazel.github.io/maz-ui-3/)

## Install

[Getting Started](https://louismazel.github.io/maz-ui-3/guide/getting-started)

```shell
npm install maz-ui@next

# Or yarn add maz-ui
```

### On demande install

To optimize your bundle size, it's recommanded to use the [on demand install](https://louismazel.github.io/maz-ui-3/guide/getting-started)

```javascript
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

### Quick Start - Fully install (not recommanded)

```javascript
import { createApp } from "vue";
import MazUi from "maz-ui";

const app = createApp(App);

app.use(MazUi);
```

## Contribute

Read documentation of [CONTRIBUTING.md](./.github/CONTRIBUTING.md)

## LICENSE

[MIT](LICENSE)
