/*
express서버 ->http모듈을 좀더 개선한 서버(같이 사용해야 한다.)
            ->요청을 받아서 처리->다른 함수에게 요청을 전달(=미들웨어 next())
*/
var http=require('http');
//추가
var express=require('express');//외장모듈 ->npm install express (4.16.x) 버전

var app=express();//application객체->웹서버 설정(불러올 파일의경로) 및 실행

//이벤트등록->on->use()를 이용->미들웨어(중간에 설정된 함수들,,)같이 사용
app.use(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello Express Server Testing...</h1>');
})
//서버를 실행->http.createServer(app객체를 매개변수로 전달)
http.createServer(app).listen(52274,function(){
    console.log('Server http://127.0.0.1:52274');
})
//node 6.ex.js