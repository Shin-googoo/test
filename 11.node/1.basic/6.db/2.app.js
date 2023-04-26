
//1.모듈을 불러오는 코딩
var fs=require('fs');//디자인한 파일불러오기
var ejs=require('ejs');//html+자바스크립트-<% ~ %>
var http=require('http');//웹서버 실행
var mysql=require('mysql');//DB접속->콘솔에 출력->웹출력
var express=require('express');//http+미들웨어 추가

//1.DB접속
var client=mysql.createConnection({
    user:'root',
    password:'1234',
    database:'mydb',
    host:'192.168.0.9'  //host:'localhost'
});
//2.서버생성
var app=express();

//3.서버를 가동
http.createServer(app).listen(52273,function(){
    console.log('Server running http://localhost:52273');
})
//4.요청에 따라서 처리 routing ->put,delete ->RestFul(몽고DB)->Ajax
//<a href="detail.jsp?num=<%=num%>"~>
app.get('/',function(request,response){});//글목록보기
app.get('/delete/:id',function(request,response){});//글삭제하기
app.get('/insert',function(request,response){});//글쓰기폼으로 전환
app.post('/insert',function(request,response){});//글쓰기구현
app.get('/edit/:id',function(request,response){});//글수정폼으로 전환
app.post('/edit',function(request,response){});//글수정하기구현