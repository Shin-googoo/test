/*
함수,객체에서도 적용
형식) const {키명:변수명,키명:변수명2,,,}={키명:값,키명2:값2,,,} -> 대응관계
*/
var _a = { prop1: 'a', prop2: 'b' }, p1 = _a.prop1, p2 = _a.prop2;
//p1='a',p2='b'
console.log({ prop1: p1, prop2: p2 }); //a,b
var _b = { prop1: 'ab', prop2: 'bb' }, prop1 = _b.prop1, prop2 = _b.prop2, _c = _b.prop3, prop3 = _c === void 0 ? 'ccc' : _c;
//함수적용 -> 함수호출해서 값을 저장 -> 반환
function margin() {
    var left = 1, right = 2, top = 3, bottom = 4;
    return { left: left, right: right, top: top, bottom: bottom };
}
var _d = margin(), left = _d.left, bottom = _d.bottom; //{left,right,top,bottom};
console.log(left, bottom); //1,4 변수의 수 < 저장된 값 에러X
//tsc 6.des3.ts -> node 6.des3.js
