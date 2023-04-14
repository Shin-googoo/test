/*
 2.pattern.js
  1)익명함수를 잘 사용
*/
check() //위에

function check(){ //이름이 존재
  console.log('이름이 있는 함수호출')
}

check()//아래에 호출이 가능
//익명함수위에 선언X
//play()
var play=function(){  //()=>{}
   console.log('이름이 없는 익명함수호출')
}
//익명함수 다음에 선언하는 문장을 사용
play()
//node 2.pattern.js