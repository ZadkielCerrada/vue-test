import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';

// import Vue3Material from 'vue3-material';

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// import './assets/main.css'
// Vue.use(VueMaterial)

const app = createApp(App)

app.use(router)
// app.use(Vue3Material)

app.mount('#app')
