import Vue from 'vue'
//추가
import VueRouter from 'vue-router'//1.라우터 기능
//2.불러올 컴포넌트를 import
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
import NotFound from './components/NotFound.vue'
//매개변수를 전달할 컴포넌트
import Baz from './components/Baz.vue'
import Knu from './components/Knu.vue'
//서브 vue추가
import FooChild1 from './components/FooChild1.vue'
import FooChild2 from './components/FooChild2.vue'

Vue.use(VueRouter)//3.Vue객체와 VueRouter객체를 use함수로 연결(bind)

//4.경로지정
const routes=[ //1.path:요청경로 2.component:컴포넌트명 name:이름
    {path:'/',component:Bar,name:"Bar"},
    {path:'/foo',component:Foo,name:"Foo",
       children:[
          {path:'/fooChild1',component:FooChild1},
          {path:'/fooChild2',component:FooChild2}
       ]
    },
    {path:'/my/:id',component:Baz,name:"Baz",props:true},
    {path:'/knu',component:Knu,name:"Knu",props:{username:'테스트'}},
    {path:'*',component:NotFound,name:"NotFound"}
]
//5.router객체 생성->main.js(App)에서 불러다 사용->export
const router=new VueRouter({
    routes
})

export default router;