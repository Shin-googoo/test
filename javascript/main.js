
'use strict';

console.log('hello world!') 

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) 
// 어디에 선언했던지 상관 안하고 제일 위로 올려보리는 성질을 지님
// has no block scope

{
  age = 4;
  var age;
}
console.log(age);

//3. contants
// favor immutavle data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const dayInWeek = 7;
const maxNumver = 5;

// 4. variable types
// primitive, single item: number, string, boolean, null,
//undefied, symbol, object, box container 
// fuction, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

number - special numeric values: Infinity, -Infinity, NaN
