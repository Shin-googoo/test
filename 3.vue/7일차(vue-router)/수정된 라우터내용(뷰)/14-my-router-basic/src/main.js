import Vue from 'vue'
import App from './App.vue'
//추가
import router from './router'

//Vue.config.productionTip = false

new Vue({
  router,//router객체 추가시켜준다.(Vue객체에 )
  render: h => h(App),
}).$mount('#app')
