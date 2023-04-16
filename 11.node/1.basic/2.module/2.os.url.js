/*
  os,url =>내장모듈이 설치->node.js설치=>자동 설치
           외장모듈=>따로 필요할때 설치
           ex)npm install --save 설치할 모듈
              yarn add  설치할 모듈명
*/
var os=require('os');
//추가
var url=require('url');//요청경로
var querystring=require('querystring');//요청경로+매개변수
var util=require('util');//Node.js의 보조적인기능->문자,숫자

var data=util.format('%d+%d=%d',23,87,23+87);
console.log(data);
//url->parse(url문자열->url객체로 변환해서 리턴해주는 함수)
var parsedObject=url.parse("http://www.test.co.kr:8090/test/9876-9?name=test");
var parsedObject2=url.parse("http://www.test.co.kr:8090/book/look.html?isbn=987-123");
//요청경로에 따른 객체에 대한 정보를 분리할 수가 있다. =>객체명.키명
console.log(parsedObject.pathname);//객체명.키명 /test/9876-9
//url정보중에서 출력할 값들을 객체로 따로 만들어서 출력하고 싶다.
console.log(querystring.parse(parsedObject2.query));//{ isbn: '987-123' }

//var fs=require('fs')
console.log(os.hostname());//호스트명
console.log(os.type());//운영체제이름
console.log(os.arch());//구조
console.log(os.release());//버전
console.log(os.totalmem());//총 메모리
console.log(os.freemem());//사용가능한 메모리
console.log(os.getNetworkInterfaces());//네트워크 정보
//node 2.os.url.js