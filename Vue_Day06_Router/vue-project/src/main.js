
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // index.js 생략 가능

const app = createApp(App)

app.use(router)

app.mount('#app')
