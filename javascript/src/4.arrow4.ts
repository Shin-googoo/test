//화살표 함수 쓰면 안되는 경우
/*
4.arrow4.ts
*/
const obj3={ // const를 써도 객체는 변경가능
  name:'Lee',
  //JSON표기법 내부에서는 화살표 함수 사용X
  //sayHi:()=>console.log(`Hi ${this.name}`); =>Vue.js
  
  sayHi(){//function 생략가능 
    console.log(`Hi ${this.name}`); //내부에서 this 생략X
  }
}
obj3.name='KIM';//Lee->KIM
obj3.sayHi();
//tsc 4.arrow4.ts -> node 4.arrow4.js
//Hi KIM
