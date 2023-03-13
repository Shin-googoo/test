/*
``  1. 백틱문자열은 여러줄의 문장을 + 기호를 쓰지 않고도 사용 가능
    2. 출력형태도 사용이 가능
*/
var name2 = '테스트';
var addr = '서울시 강남구 세경빌딩 3층';
//기존방법
console.log('내이름은' + name2 + '이고 주소는 ' + addr + '입니다.');
//el와 다른 점 ${출력할 변수명 또는 수식} ` `안쪽에 사용 
console.log("\uB0B4\uC774\uB984\uC740 ".concat(name2, " \uC774\uACE0 \uC8FC\uC18C\uB294 ").concat(addr, " \uC785\uB2C8\uB2E4"));
//수식도 가능
console.log("1+1=".concat(1 + 1));
var name3 = 'imsi';
console.log("Hello ".concat(name3.toUpperCase())); //문자열(객체)
//tsc 3.template2.ts -> node 3.template2.ts
