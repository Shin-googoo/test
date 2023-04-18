
var http=require('http');
//추가
var express=require('express');//외장모듈 ->npm install express (4.16.x) 버전

var app=express();//application객체->웹서버 설정(불러올 파일의경로) 및 실행

//이벤트등록->on->use()를 이용->미들웨어(중간에 설정된 함수들,,)같이 사용
app.use(function(request,response){
    //사이트접속->haed값->User-Agent키값이 전달
    var agent=request.header('User-Agent')//request.header(키명)
    console.log('request.headers->',request.headers);
    console.log('agent->',agent);
    //브라우저 구분
    if(agent.toLowerCase().match(/chrome/)){
      response.send('<h1>Hello Chrome!!</h1>');
    }else{ //IE
      response.send('<h1>Hello IE Express!!!</h1>');
    }
    /* send() =>node 7.ex2.js
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello Express Server Testing...</h1>');
    */
    response.sendStatus(200);//정상적으로 응답을 처리한 경우->화면에 결과봄
})
//서버를 실행->http.createServer(app객체를 매개변수로 전달)
http.createServer(app).listen(52274,function(){
    console.log('Server http://127.0.0.1:52274');
})
//node 6.ex.js