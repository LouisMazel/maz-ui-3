import { createApp } from 'vue'
import App from './App.vue'
import 'maz-ui/css/main.css'
import MazUI from 'maz-ui'

const app = createApp(App)

app.use(MazUI)

app.mount('#app')
