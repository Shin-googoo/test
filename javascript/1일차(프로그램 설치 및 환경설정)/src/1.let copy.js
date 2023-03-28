/*
1. let 변수명=값(변수 선언)
*/
var foo=123;
console.log(foo);
{ //block level
  var foo=456; //중복선언이 가능하다. (똑같은 변수를 두번선언)
}
console.log(foo); //456 블럭 밖에서도 참조 

let foo2=789;
console.log(foo2); //789
{
  let foo2:number=456; //중복선언X
  let bar:number=456;
  console.log(bar); //456
}
console.log(foo2); //789 블럭내부에 선언된 let qustn <- 참조X
// console.log(bar) //블럭 밖에서는 let으로 선언된 변수 참조X 
//tsc 1.let.ts




