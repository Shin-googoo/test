/*
arrow function(화살표함수) => 자바의 람다함수와 기능이 같다.
          =>                      ->
형식) var or let 변수명=function(매개변수:자료형...)
    {처리 구문}
*/
let pow=function(x:number){ //(int x)
  console.log('x=>'+x);
  return x*x;
}
console.log(pow(10)); //100
/*
형식2) const 변수명 = (매개변수,매개변수2...) =>{처리구문}
함수의 내용이 한문장이상 {} 처리 매개변수도 한개면 ()도 생략O
*/
const pow2=x=>x*x;
console.log(pow2(20)); //20*20=400
/*
x=>10
100
400
*/