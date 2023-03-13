var _a, _b, _c, _d, _e, _f, _g;
/*
6.des2.ts [변수,변수2,변수3...]=배열명
*/
var t1, y1, v1;
_a = ['a', 2], t1 = _a[0], y1 = _a[1];
console.log(t1, y1); //'a',2
_b = [1, null], t1 = _b[0], y1 = _b[1]; //값을 저장하지 않아도 자리수는 맞춰야된다.
//ex) insert into 테이블명 values(,,,null,) 
console.log(t1, y1);
_c = [1, 2], t1 = _c[0], y1 = _c[1], _d = _c[2], v1 = _d === void 0 ? 3 : _d; //v1에 값을 저장X 내부적으로 값을 지정-> 저장 
console.log(t1, y1, v1); //1,2,3
_e = [1, null, 9], t1 = _e[0], _f = _e[1], y1 = _f === void 0 ? 10 : _f, _g = _e[2], v1 = _g === void 0 ? 3 : _g; //1,null,9 -> 10과 3은 예비용이다.
console.log(t1, y1, v1);
//tsc 6.des2.ts -> node 6.des2.js
