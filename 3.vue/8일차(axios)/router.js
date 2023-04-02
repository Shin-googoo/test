/*
src/router.js
요청에 따라서 어떻게 처리해서 페이지를 보여주는지 결정
*/
import Vue from 'vue'
//추가
import VueRouter from 'vue-router'  //1.라우터 기능(모듈)
//2.불러올 컴포넌트를 import
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
import NotFound from './components/NotFound.vue'


//3.Vue객체와 VueRouter객체를 use함수로 연결(bind)
Vue.use(VueRouter)

//4.경로 지정
const routes=[  //1.path경로 2.component:컴포넌트명 name:이름
           {path:'/',component:Bar,name:"Bar"},
           {path:'/login',component:Foo,name:"Foo"},
           {path:'*',component:NotFound,name:"NotFound"}

]
//5.router객체 생성->main.js(App)에서 불러다 사용->export
const router=new VueRouter({
    routes
})

export default router;