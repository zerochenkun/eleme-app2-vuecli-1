import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Goods from './components/goods/goods.vue'

Vue.use(VueRouter)

let app = Vue.extend(App)
let router = new VueRouter()

router.map({
  './goods': {
    component: Goods
  }
})

router.start(app, '#app');

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
