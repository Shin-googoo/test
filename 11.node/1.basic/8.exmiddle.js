/*
->요청을 받아서 처리->다른 함수에게 요청을 전달(=미들웨어 next())
*/
var http=require('http');
//추가
var express=require('express');//외장모듈 ->npm install express (4.16.x) 버전

var app=express();//application객체->웹서버 설정(불러올 파일의경로) 및 실행

//이벤트등록->on->use()를 이용->미들웨어(중간에 설정된 함수들,,)같이 사용
/*
app.use(function(request,response,next){
    console.log('첫번째 미들웨어 호출됨!');
    next();
})
*/
app.use(function(request,response,next){
    //console.log('두번째 미들웨어 호출');
    //다음번 미들웨어 함수에게 값을 전달->request.매개변수명=값 저장->next()
    request.number=52;//request.매개변수='문자'or 숫자
    response.number=273;//response.매개변수명=값
    next();
})

app.use(function(request,response,next){
    //console.log('세번째 미들웨어 호출');
    response.send('<h1>'+request.number+':'+response.number+'</h1>');
    //next(); 맨마지막에는 next()를 사용X (전달X)
})
//서버를 실행->http.createServer(app객체를 매개변수로 전달)
http.createServer(app).listen(52274,function(){
    console.log('Server http://127.0.0.1:52274');
})
//node 8.exmiddle.js