//src/index.js(React)와 기능이 유사한 파일

import Vue from 'vue'//vue모듈에서 컴포넌트정보
import App from './App.vue'//화면에 출력할 컴포넌트 얻어오기

Vue.config.productionTip = false //배포에 대한 팁을 알려주지 않겠다
/*
 vue.config=>vue의 전역설정을 가진객체
*/

new Vue({ //render함수->h매개변수 받아서 App태그 생성(화면에 부착시킬 컴포넌트)
  render: h => h(App),
}).$mount('#app')//id가 app인 부분에 App컴포넌트를 결합시킨다.(public/index.html)
//ReactDOM.render(<App />,document.getElementById('app'))