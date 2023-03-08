// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined
// || falshy한 경우 설정(할당) 0, -0, ''
let num = 0;
console.log(num || '-1');
console.log(num ?? '-1');
//num이 아무런 값이 없을때만 -1 출력
//num에 0의 값이 있다면 0을 출력한다.
