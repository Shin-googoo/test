/*
7.class.ts
  생성자-> 클래스명과 동일(자바),typescript => constructor()or(~)
  생성자는 절대로 한개이상 생성(x)=> 자바와 다른점
*/
class person {
}
class person2 {
    //person2(String name,int age,String address){} 자바
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//tsc 7.class.ts -> js내용 확인
