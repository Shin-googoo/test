/*
5.rest.ts
  rest매개변수,spread연산자(...)=>동적배열
5.함수를 작성할때 매개변수를 전달 -> 만약에 전달X=> 에러유발
  만약에 매개변수를 전달받지 못할 경우에는
  디폴트 매개변수를 지정(=>rest 매개변수)
  ->정상적으로 매개변수 값이 전달되면 적용X
*/
//rest매개변수
function plus(x, y) {
    if (x === void 0) { x = 8; }
    if (y === void 0) { y = 9; }
    return x + y; //형식)함수명(매개변수=값,매개변수2=값2)
}
console.log('plus(1,2)=>', plus(1, 2)); //3
console.log('plus()=>', plus()); //17
//spread연산자(...)
ktest(1, 2, 3, 4);
//abc[]={1,2,3,4}
function ktest() {
    var abc = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        abc[_i] = arguments[_i];
    }
    // Array.isArray(배열)=> 배열이면 true or false
    console.log(Array.isArray(abc)); //true
    console.log('abc->', abc);
}
ktest(1, 2, 3, 4, 5, 6, 7);
//spread 연산자 주의-> 다른매개변수와 같이사용 -> spread연산자는 뒤에 위치
function ktest2(param) {
    var abc = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        abc[_i - 1] = arguments[_i];
    }
    //function ktest2(...abc,param){ //param보다 앞에 있으면 실행X
    console.log("param=> ".concat(param)); //7
    console.log("abc=> ".concat(abc)); //[8,9,10,11,12]
}
ktest2(7, 8, 9, 10, 11, 12); //7,[8,9,10,11,12]
function ktest3(param, param2) {
    var abc = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        abc[_i - 2] = arguments[_i];
    }
    //function ktest2(...abc,param){ //param보다 앞에 있으면 실행X
    console.log("param=> ".concat(param)); //7
    console.log("param2=> ".concat(param2)); //8
    console.log("abc=> ".concat(abc)); //[9,10,11,12]
}
ktest3(7, 8, 9, 10, 11, 12);
//tsc 5.rest.ts -> node 5.rest.js
