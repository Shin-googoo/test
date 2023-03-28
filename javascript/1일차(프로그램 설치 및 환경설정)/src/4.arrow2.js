/*
4.arrow2.ts 자바스크립트의 배열과 연관
  1.indexOf함수(특정한 값을 찾을때)
*/
var str = ["테스트", "연습", "리액트", "뷰"];
//Stirng str[]={"테스트","연습","리액트","뷰"}
var isExist = false; //찾았는지 유무
for (var i = 0; i < str.length; i++) {
    if (str[i] === "연습") {
        isExist = true;
        console.log('데이터 찾음=>', str[i]);
    }
    else {
        console.log('데이터 못찾음=>', str[i]);
    }
}
//배열의 값중에서 원하는 데이터의 존재유무만?
//배열명.indexOf(찾을값)!==-1
var isExist2 = (str.indexOf("연습") !== -1);
console.log("isEcist2=> ".concat(isExist2)); //true
//2.filter()=>JSON객체중에서 특정한값만 추출(=filter)
// 반환값 존재
var arr = [{ "name": "apple", "count": 2 },
    { "name": "orange", "count": 5 },
    { "name": "banana", "count": 3 },
    { "name": "orange", "count": 16 }];
/*
형식)const or let 변수명=배열객체명.filter(function(매개변수(항목)){
    return 반환값(항목.키명==='찾을값')
})
*/
var newArr = arr.filter(function (item) {
    return item.name === 'orange'; //return item.count===2
});
console.log('Filter results=>', newArr);
//tsc 4.arrow2.ts -> node 4.arrow2.js
