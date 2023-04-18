/*
  http모듈,fs모듈 (필수)->Get방식,Post방식
*/
var fs=require('fs');//파일불러오기
var http=require('http');//웹서버 가동

http.createServer(function(request,response){
  
  if(request.method == 'GET'){ //if(pathname == '/') {
  fs.readFile('../3.event.server/HTMLPage_2.html',function(error,data){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.end(data);//HTMLPage_2.html->입력폼을 출력
  });
 }else if(request.method == 'POST'){//입력폼에서 전송버튼을 클릭한경우
        //request.getParameter("매개변수명") 처럼
        //형식) request.on(전달받은 매개변수명,처리할 콜백함수)
        request.on('data',function(data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end('<h1>'+data+'</h1>');
        });
 }
}).listen(52273,function(){
    console.log('Server running http://localhost:52273/');
})
//node 1.post.js