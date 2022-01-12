import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from '@/store'

function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  app.mount('#app')
}

bootstrap()
