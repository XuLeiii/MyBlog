import Vue from 'vue'
import App from './App.vue'

import ElementUI  from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"



import store from "./store"

import router from './router/index.js';

Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
