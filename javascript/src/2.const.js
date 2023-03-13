/*
ts(기존의 자바스크립트구문+자료형 추가(O),클래스사용(O))
js(자료형X 클래스 사용X)

const 상수화시킬때 사용 => react에서 많이 사용

1)const를 사용할때에는 반드시 상수화된 변수에 초기값을 설정 O
2)중간에 값을 변경X(상수이기 때문)
3)중복선언이 가능
*/
var TOO = 123; //형식) const 변수명=값 
{
    var TOO_1 = 100; //중복가능 
    console.log(TOO_1);
    var TOO2 = 45;
}
console.log(TOO); //123 블럭 밖에서는 안쪽의 const변수 사용X 
//console.log(TOO2); //블럭 밖에서는 TOO2를 불러다 사용X
//tsc 2.const.ts -> node 2.const.js
