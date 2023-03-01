// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!')
//   }
//   sleep() {
//     console.log('잔다!')
//   }
// }   

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!')
//   }
//   sleep() {
//     console.log('잔다!')
//   }
//   play() {
//     console.log('놀자!')
//   }
// }   

class Animal {
  constructor(color) {
  this.color = color;
  }
  eat() {
    console.log('먹자!')
  }
  sleep() {
    console.log('잔다!')
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal{
  constructor(color, ownerName){ //오너네임을 추가 시키려면 위의 색깔도 가져 와야된다.
    super(color); //내가 상속하고 있는 부모를 가리킴
    this.ownerName = ownerName
  }
  play() {
    console.log('놀자아~!');
  }
  // 오버라이딩 overriding
  eat() {
    super.eat(); //부모에 있는 eat이라는 함수를 호출후 내가 필요한 기능을 구현 가능
    console.log('강아지가 먹는다~');
  }
}

const dog = new Dog('빨강이','엘리');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
