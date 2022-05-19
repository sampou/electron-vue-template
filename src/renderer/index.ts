import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { component } from './components'

const app = createApp(App)

app.use(store)
app.use(router)
component(app)

app.mount('#app')
