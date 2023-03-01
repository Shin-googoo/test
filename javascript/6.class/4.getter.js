// 접근자 프로퍼티(Accessor Proterty)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() { //호출하는 시점에 데이터를 만들어서 리턴한다.
    return '${this.lastName} ${this.firstName}';
  }

  set fullName(value) {
    console.log('set',value);
  }
}

const student = new Student('수지','김');
console.log(student.fullName()); //get이 호출된다.
student.fullName = '김철수'; //set에 인자로 전달된다.