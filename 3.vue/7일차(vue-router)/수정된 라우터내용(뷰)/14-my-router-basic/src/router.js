/*
 src/router.js(요청을 받아서 처리해주는 경로를 지정=>export)
*/
import Vue from 'vue'  //Vue객체는 기본적으로 필요->라우터와 연결하기때문에
import VueRouter from 'vue-router'//라우터 객체필요
//1.요청받아서 처리할 컴포넌트를 불러오기
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
import NotFound from './components/NotFound.vue'
//2.추가(매개변수를 전달)
import Baz from './components/Baz.vue'
import Knu from './components/Knu.vue'
//3.서브 vue추가
import FooChild1 from './components/FooChild1.vue'
import FooChild2 from './components/FooChild2.vue'

Vue.use(VueRouter)//1.Vue객체와 vueRouter객체를 use함수로 연결함

//2.요청경로에 따라서 어떤 컴포넌트를 거쳐서 특정위치에 출력을 할지 설정한다.
const routes=[ //path:경로 ,component:컴포넌트명 name:컴포넌트별칭
              {path:'/',component:Bar, name:"Bar"},
              /* (1)
              {path:'/login/:id',component:Foo, name:"Foo"}, */
              {path:'/foo',component:Foo, name:"Foo",
                   children:[
                       {path:'/fooChild1',component:FooChild1},
                       {path:'/fooChild2',component:FooChild2}
                   ]
                },
              {path:'/my/:pw',component:Baz, name:"Baz",props:true},//props속성을 이용->출력
              {path:'/my/:id',component:Baz, name:"Baz",props:true},
              {path:'/knu',component:Knu, name:"Knu",props:{username:'임시'}},
              {path:'*',component:NotFound, name:"NotFound"}
            ]

//3.router객체를 만들면서 요청경로를 같이 설정한다.(생성자에 요청경로정보 넣어준다.)
const router=new VueRouter({ 
    routes
})
//4.이러한 정보를 가진 라우터객체를 외부에 배포(export)->src/main.js에서 불러오게 하기위해서
export default router;