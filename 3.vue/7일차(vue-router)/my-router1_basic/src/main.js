import Vue from 'vue'
import App from './App.vue'
//6.router객체를 불러와서 연결(App)
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router,//7.뷰객체에 router객체를 연결
  render: h => h(App),
}).$mount('#app')
