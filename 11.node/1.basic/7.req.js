/*
  require()를 이용해서 내가 만든 모듈을 불러오자
  내장모듈->nodejs를 설치할때 같이 설치된 모듈 ->node_modules에 저장
  외장모듈->상대적인 경로를 입력 불러올 파일명을 작성
*/
var module=require('./6.test.js');//외장모듈

//출력->외장모듈객체명.호출할 함수명(~)
console.log('abs(-273)=%d',module.abs(-273));
console.log('circleArea(3)=%d',module.circleArea(3));
/*
c:\webtest\9.web\4.node\1.basic>node 7.req.js
abs(-273)=273
circleArea(3)=28.274333882308138
*/