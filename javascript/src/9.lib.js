"use strict";
/*
라이브러리(백엔드) => Module(모듈)
함수,상수,클래스도 불러다 사용 가능(라이브러리 처럼)
1.함수,상수,클래스명 앞에 일일이 export(공유) -> import
*/
/*
export const pi=Math.PI

export function square(x){
  return x+x;
}

console.log(square(10)); //20

export class Person3{
  name:string; //es6에서는 멤버변수(속성) -> 생성자를 통해 초기화
  constructor(name){
    this.name=name; //동적
  }
}
*/
exports.__esModule = true;
exports.Person3 = exports.square = exports.pi = void 0;
//2.ts파일 밑에 한꺼번에 export를 지정하는 방법 -> react에서 사용
var pi = Math.PI;
exports.pi = pi;
//const pi=3.141592;
function square(x) {
    return x + x;
}
exports.square = square;
console.log(square(10)); //20
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name; //동적
    }
    return Person3;
}());
exports.Person3 = Person3;
