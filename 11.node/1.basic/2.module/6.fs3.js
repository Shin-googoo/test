/*
  1.파일을 생성->비동기방식과 동기방식
  2.한문장이상을 출력=>어떻게 출력
*/
var fs=require('fs');//내장모듈

//이벤트기반의 입출력방식을 사용->비동기방식
function sum(su,su2){
    return su+su2;
}

//한문장이상을 출력할 변수를 잡아준다.
var data=`Hello Node.js
연습중입니다.
테스트용입니다.
여러줄로 나누어서 입력중입니다.~~~~`;

//1.생성할파일명 2.저장할값 3.encoding 4.콜백함수(error(실패),성공(매개변수))
fs.writeFile('textwrite.txt',data,'utf-8',function(error){
   console.log('정상적으로 파일이 생성이 되었습니다.')
   var print=sum(30,40);
   console.log('print->',print);
});
console.log('========================================');
//1.생성할 파일명 2.저장할값,3.encoding
fs.writeFileSync('textwriteSyn.txt','Testing Syn!!!','utf-8');
console.log('정상적으로 성공됨(Sync)');

//node 6.fs3.js
