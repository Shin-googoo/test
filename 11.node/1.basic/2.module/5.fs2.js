var fs=require('fs');//내장모듈

//이벤트기반의 입출력방식을 사용->비동기방식
function sum(su,su2){
    return su+su2;
}

//1.불러올 파일명 2.encoding 3.콜백함수(error(실패),성공(매개변수))
fs.readFile('textfile.txt','utf-8',function(error,data){
   console.log(data)
   var print=sum(10,20);
   console.log('print->',print);
});
console.log('========================================');
/*
var text=fs.readFileSync('textfile.txt','utf-8');
console.log(text);
console.log(sum(10,20))
*/
//node 5.fs2.js
