import { createApp } from 'vue'
import App from './App.vue'
import 'maz-ui/css/main.css'
import Mazui from 'maz-ui'

const app = createApp(App)

app.use(Mazui)

app.mount('#app')
