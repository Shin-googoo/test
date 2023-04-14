/*
  Node.js에서 알아야 되는 3번째 
  체인함수->함수가 여러개 연결돼서 실행되는 형태
*/
//1.서버를 생성->import {클래스명} from 모듈명->es6
//형식) var 변수명(=객체역할)=require('불러올 모듈명') 내장모듈
var http=require('http');//웹서버

//2.서버를 생성->createServer()함수
var server=http.createServer();

//3.서버가동->포트번호->52273(자유롭게)->listen()->포트열고 기다림
server.listen(52273);
//node 4.http.js ->브라우저 열기->chrome
//http://localhost:52273=>콘솔에서 서버 종료->ctrl+c