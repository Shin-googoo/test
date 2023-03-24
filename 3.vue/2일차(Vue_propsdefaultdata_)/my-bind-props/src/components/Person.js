/*
 data속성의 값들로 배열,객체,클래스(외부객체(DTO))
*/
export class Person{ //export default class Person (react라면)
  username;  //vue에서 멤버변수(=속성명) 선언가능
  age;

  constructor(u,a){
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