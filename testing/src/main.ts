import { createApp } from 'vue'
import App from './App.vue'
import MazUi from '~mazui/index'
import '~mazui/css/tailwind.css'

const app = createApp(App)

app.use(MazUi)

app.mount('#app')
