import App from './App.vue'
import 'maz-ui/css/main.css'
import { createApp } from 'vue'
import { vZoomImgInstall, vZoomImgOptions } from 'maz-ui'

const app = createApp(App)

const vLazyImgOptions: vZoomImgOptions = {
  src: '',
  alt: 'alt image',
  disabled: false,
  scale: true,
  blur: true,
}

app.use(vZoomImgInstall, vLazyImgOptions)

app.mount('#app')
