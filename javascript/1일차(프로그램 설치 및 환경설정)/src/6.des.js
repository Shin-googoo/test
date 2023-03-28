var _a;
/*
6.des.ts
배열 디스트럭처링 -> 배열의 각각의 요소를 분리
              -> 각각의 다른변수에 값을 저장시키는 방법
*/
var karr = ['a', 'b', 'c'];
var one = karr[0]; //'a';
console.log(one, karr[1], karr[2]); //a,b,c
var karr2 = ['d', 'e', 'f'];
/*
let one1=karr2[0];
let two2=karr2[1];
let three3=karr2[2];
*/
//형식) const [변수1,변수2,변수3,,,]=배열객체명;
// -> 각 요소에 대응되는 변수에 각각 저장시키는 방법
var one1 = karr2[0], two2 = karr2[1], three3 = karr2[2];
console.log(one1, two2, three3); //d,e,f
var a2, b2, c2; //변수를 ,로 구분해서 선언
_a = [4, 5, 6], a2 = _a[0], b2 = _a[1], c2 = _a[2];
console.log("a2\uAC12 ".concat(a2, " b2\uAC12 ").concat(b2, " c2\uAC12 ").concat(c2)); //4,5,6
//tsc 6.des.ts -> node 6.des.js
