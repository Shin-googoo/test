/*
const 예약어는 객체에서도 사용 가능 => key,value형태로 객체저장
객체일땐 주소값은 그대로 유지가 되면서(변경X)
키에 해당되는 데이터는 변경O
*/
var obj = { id: 7890 }; //obj.id(객체명.속성명)
var obj2 = { bar: 456 };
//react
var user = {
    name: 'Shin',
    address: {
        city: 'Seoul'
    }
};
console.log(user); //객체내용 {키명:값,키명2:값2,,,}
user.name = 'KIM';
console.log(user); //주소는 불변, 내용은 변경
//tsc 2.const2.ts
//node 2.const2.js
