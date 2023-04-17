/*
 2.http.fs.js 저장
*/
var fs=require('fs');//파일불러오기
var http=require('http');//웹서버 가동

http.createServer(function(request,response){
  //디자인한 파일 불러오기
  fs.readFile('HTMLPage.html',function(error,data){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.end(data);
  })
}).listen(52273,function(){
    console.log('Server running http://localhost:52273/');
})
//node 2.http.fs.js