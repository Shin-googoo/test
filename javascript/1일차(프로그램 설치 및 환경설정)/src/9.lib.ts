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

//2.ts파일 밑에 한꺼번에 export를 지정하는 방법 -> react에서 사용
const pi=Math.PI
//const pi=3.141592;
function square(x){
  return x+x;
}

console.log(square(10)); //20

class Person3{
  name:string; //es6에서는 멤버변수(속성) -> 생성자를 통해 초기화
  constructor(name){
    this.name=name; //동적
  }
}
//형식) export {상수,함수명,클래스명,,,}
export {pi,square,Person3}