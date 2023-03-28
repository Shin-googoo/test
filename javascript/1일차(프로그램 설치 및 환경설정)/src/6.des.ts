/*
6.des.ts
배열 디스트럭처링 -> 배열의 각각의 요소를 분리
              -> 각각의 다른변수에 값을 저장시키는 방법
*/
const karr=['a','b','c'];
const one=karr[0];//'a';
console.log(one,karr[1],karr[2]) //a,b,c

const karr2=['d','e','f'];
/*
let one1=karr2[0];
let two2=karr2[1];
let three3=karr2[2];
*/
//형식) const [변수1,변수2,변수3,,,]=배열객체명;
// -> 각 요소에 대응되는 변수에 각각 저장시키는 방법
const [one1,two2,three3]=karr2;
console.log(one1,two2,three3); //d,e,f

let a2,b2,c2; //변수를 ,로 구분해서 선언
[a2,b2,c2]=[4,5,6]
console.log(`a2값 ${a2} b2값 ${b2} c2값 ${c2}`); //4,5,6
//tsc 6.des.ts -> node 6.des.js
/*
a b c
d e f
a2값 4 b2값 5 c2값 6
*/