/*
7.classextend.ts -> 상속(1.개발시간 단축,2.소스의 재사용성)
*/
class Animal{
  _weight:any; //속성명(=멤버변수)
  constructor(weight){
    this._weight=weight; //this는 생략X
  }
  weight(){
    console.log(this._weight); //this.멤버변수(=속성명)
  }
  eat(){
    console.log('Animal eat!!');
  }
}
class Human extends Animal{ //자식클래스 extends 부모클래스
  _language:string; //언어
  //_weight; //상속
  constructor(weight,language){
    super(weight); //부모클래스의 생성자를 통해서 값을 저장
    this._language=language;
  }
  //오버라이딩 -> 자식입장에서 부모클래스의 메서드 내용을 변경
  eat(): void {
    console.log('Human eat!!!');
  }
  speak(){
    console.log(`koreans speak ${this._language} `);
  }
}
//형식) const 객체명=new 클래스명(인수1,인수2,,,)
const korean=new Human(70,'korean');
//객체명.메서드명(~)
korean.weight(); //70
korean.eat();
korean.speak();
//객체명 instanceof 클래스명=>true or false
console.log(korean instanceof Human); //true
console.log(korean instanceof Animal); //true
//tsc 7.classextend.ts -> node 7.classextend.js

// 70
// Human eat!!!
// koreans speak korean 
// true
// true