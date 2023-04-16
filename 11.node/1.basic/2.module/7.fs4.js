/*
  1.파일을 읽고,쓰기가능
  2.파일입출력 예외처리
*/
var fs=require('fs');//내장모듈

//한문장이상을 출력할 변수를 잡아준다.
var data2=`Hello Node.js
파일입출력 예외처리 문제입니다.
연습중입니다.
테스트용입니다.
여러줄로 나누어서 입력중입니다.~~~~`;

fs.readFile('textwrite.txt','utf-8',function(error,data){
   if(error){//에러가 발생->에러메세지 출력
     console.log(error);
   }else{
     console.log(data);//정상적으로 불러왔다면
   }
});
console.log('========================================');
//1.생성할 파일명 2.저장할값,3.encoding
fs.writeFile('textwrite2.txt',data2,'utf-8',function(error){
    if(error){
        console.log(error);
    }else{
        console.log(data2);
        console.log('정상적으로 파일이 생성되었음!!!');
    }
});

//node 7.fs4.js
