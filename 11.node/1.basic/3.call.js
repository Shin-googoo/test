/*
  node.js하기위한 2번째(3.call.js)
  2)콜백함수=>변수에 함수를 할당(익명함수)
     다른함수의 파리미터값으로 전달(값 (함수))
     파라미터로 전달돼서 다른 함수의 내부에서 호출되는 함수
*/
function callFun(other){ //매개변수값이 함수전달
   for(var i=0;i<5;i++){
       other();//test()=>콜백함수
   }
}

function test(){
    console.log('Happy day!');
}
//함수호출
callFun(test); //test() (X)
//node 3.call.js
console.log('===========================')
callFun(function(){
   console.log('Node.js Testing!!!') 
})
/*
c:\webtest\9.web\4.node\1.basic>node 3.call.js
Happy day!
Happy day!
Happy day!
Happy day!
Happy day!
===========================
Node.js Testing!!!
Node.js Testing!!!
Node.js Testing!!!
Node.js Testing!!!
Node.js Testing!!!
*/