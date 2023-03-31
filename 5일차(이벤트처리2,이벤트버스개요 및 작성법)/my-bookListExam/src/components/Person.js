/*
 data속성의 값들로 배열,객체,클래스(외부객체 DTO)도 가능
*/

export class Person{//export default class Person (react)
  username;
  age;

  constructor(u,a){  /* this는 생략X */
    this.username=u;
    this.age=a;
  }
  getUsername(){
    return this.username;
  }
  getAge(){
    return this.age;
  }
}