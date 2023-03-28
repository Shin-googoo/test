/*
7.class.ts
  생성자-> 클래스명과 동일(자바),typescript => constructor()or(~)
  생성자는 절대로 한개이상 생성(x)=> 자바와 다른점
*/
class person {
  // constructor(name,age){
  //   this.name=name; //동적인 개념
  //   this.age=age;
  // }
}
class person2{
  //name;
  //age;
  address; //선언 O or X(typescript) => react에서는 멤버변수 생성 X(es6)
  //person2(String name,int age,String address){} 자바
  constructor(public name:string,public age:number){}
  //constructor(){} 생성자 오버로딩X 
}
//tsc 7.class.ts -> js내용 확인