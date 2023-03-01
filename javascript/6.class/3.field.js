
//접근제어자 - 캡슐화 
// private(#), public(기본), protected
class Fruit { //자바스크립트에서는 생성자 앞에 #을 붙이면 변경 불가능
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
//apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능
console.log(apple);