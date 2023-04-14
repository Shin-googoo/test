
var http=require('http');//웹서버

//2.서버를 생성->createServer(요청을 받아서 처리하는 구문)함수
http.createServer(function(request,response){  //request,response
  //response.setContentType('text/html;charset=utf-8)->서블릿
  //형식)response.writeHead(1.응답코드번호,2.문서종류를 설정(json표기법))
  response.writeHead(200,{ContentType:'text/html'})
  //out.println('출력할값')와 기능이 비슷하다.
  response.end('<h1>Hello Node.js!!!</h1>')
}).listen(52273,function(){
    console.log('Server running http://localhost:52273/')
});
//node 5.http2.js ->브라우저 열기->chrome
//http://localhost:52273=>콘솔에서 서버 종료->ctrl+c