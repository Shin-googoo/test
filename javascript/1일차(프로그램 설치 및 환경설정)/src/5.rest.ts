/*
5.rest.ts
  rest매개변수,spread연산자(...)=>동적배열
5.함수를 작성할때 매개변수를 전달 -> 만약에 전달X=> 에러유발
  만약에 매개변수를 전달받지 못할 경우에는 
  디폴트 매개변수를 지정(=>rest 매개변수)
  ->정상적으로 매개변수 값이 전달되면 적용X
*/
//rest매개변수
function plus(x=8,y=9){//any -> 전달되는 값에 따라서 자료형이 결정
  return x+y;          //형식)함수명(매개변수=값,매개변수2=값2)
} 
console.log('plus(1,2)=>',plus(1,2)); //3
console.log('plus()=>',plus()); //17

//spread연산자(...)
ktest(1,2,3,4);
                  //abc[]={1,2,3,4}
function ktest(...abc){//동적으로 배열의 값을 받아 처리 연산자
  // Array.isArray(배열)=> 배열이면 true or false
  console.log(Array.isArray(abc)); //true
  console.log('abc->',abc)
}

ktest(1,2,3,4,5,6,7)
//spread 연산자 주의-> 다른매개변수와 같이사용 -> spread연산자는 뒤에 위치
function ktest2(param,...abc){
//function ktest2(...abc,param){ //param보다 앞에 있으면 실행X
  console.log(`param=> ${param}`);//7
  console.log(`abc=> ${abc}`);    //[8,9,10,11,12]
}
ktest2(7,8,9,10,11,12); //7,[8,9,10,11,12]

function ktest3(param,param2,...abc){
  //function ktest2(...abc,param){ //param보다 앞에 있으면 실행X
    console.log(`param=> ${param}`);//7
    console.log(`param2=> ${param2}`);//8
    console.log(`abc=> ${abc}`);    //[9,10,11,12]
  }
  ktest3(7,8,9,10,11,12);
//tsc 5.rest.ts -> node 5.rest.js
/*
plus(1,2)=> 3
plus()=> 17
true
abc-> [ 1, 2, 3, 4 ]
true
abc-> [
  1, 2, 3, 4,
  5, 6, 7
]
param=> 7
abc=> 8,9,10,11,12
param=> 7
param2=> 8
abc=> 9,10,11,12
*/