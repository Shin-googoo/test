//화살표 함수 쓰면 안되는 경우
/*
4.arrow4.ts
*/
var obj3 = {
    name: 'Lee',
    sayHi: function () {
        console.log("Hi ".concat(this.name)); //내부에서 this 생략X
    }
};
obj3.name = 'KIM'; //Lee->KIM
obj3.sayHi();
//tsc 4.arrow4.ts -> node 4.arrow4.js
