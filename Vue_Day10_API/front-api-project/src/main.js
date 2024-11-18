import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useKakao } from 'vue3-kakao-maps/@utils';

useKakao(import.meta.env.VITE_KAKAO_API_KEY);  // 재발급 받는다면 바꿔주면 됨

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
