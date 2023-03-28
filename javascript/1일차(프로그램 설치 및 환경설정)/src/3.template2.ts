/*
``  1. 백틱문자열은 여러줄의 문장을 + 기호를 쓰지 않고도 사용 가능
    2. 출력형태도 사용이 가능 
*/
const name2='테스트';
const addr='서울시 강남구 세경빌딩 3층';

//기존방법
console.log('내이름은'+name2+'이고 주소는 '+addr+'입니다.');
//el와 다른 점 ${출력할 변수명 또는 수식} ` `안쪽에 사용 
console.log(`내이름은 ${name2} 이고 주소는 ${addr} 입니다`);
//수식도 가능
console.log(`1+1=${1+1}`);
const name3='imsi';
console.log(`Hello ${name3.toUpperCase()}`); //문자열(객체)
//tsc 3.template2.ts -> node 3.template2.ts