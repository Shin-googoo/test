/*
 2.http.fs.js 저장
*/
var fs=require('fs');//파일불러오기
var http=require('http');//웹서버 가동

http.createServer(function(request,response){
  //디자인한 파일 불러오기
  fs.readFile('helicop.jpg',function(error,data){
      response.writeHead(200,{'Content-Type':'image/jpg'});
      response.end(data);
  })
}).listen(52273,function(){
    console.log('Server running http://localhost:52273/');
})
//2번째 서버 52274
http.createServer(function(request,response){
    //동영상->~.wmv(X) ->~.mp4,~avi,,,
    fs.readFile('main_vd.mp4',function(error,data){
        response.writeHead(200,{'Content-Type':'video/mp4'});
        response.end(data);
    })
  }).listen(52274,function(){
      console.log('Server running http://localhost:52274/');
  })
//node 3.double.js