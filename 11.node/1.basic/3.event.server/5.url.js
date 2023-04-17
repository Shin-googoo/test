/*
 2.http.fs.js 저장
*/
var fs=require('fs');//파일불러오기
var http=require('http');//웹서버 가동
//추가
var url=require('url');//요청명령어를 분리

http.createServer(function(request,response){
  //request.url=>http~끝까지
  var pathname=url.parse(request.url).pathname; 
  console.log('request.url->',request.url);//전체 경로 /
  console.log('url.parse(request.url)->',url.parse(request.url));//url{}
  console.log('pathname->',pathname);// /  or /OtherPage ,/test
  //추가
  if(pathname == '/'){
  fs.readFile('index.html',function(error,data){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.end(data);
  });
 }else if(pathname == '/OtherPage'){
    fs.readFile('otherpage.html',function(error,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(data);
    });
 }//else if(pathname == '/test'){
}).listen(52273,function(){
    console.log('Server running http://localhost:52273/');
})
//node 5.url.js