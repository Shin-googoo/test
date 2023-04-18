/*
 2.ejstest.js 저장
*/
var fs=require('fs');//파일불러오기
var http=require('http');//웹서버 가동
//추가 ->npm install express ejs
var ejs=require('ejs');
//------------------------------
http.createServer(function(request,response){
  //파일(html+자바스크립트코드)->변환하는 과정이 필요

  fs.readFile('ejsPage.1.ejs','utf-8',function(error,data){
      response.writeHead(200,{'Content-Type':'text/html'});
      //형식)ejs.render(변환할 문자열)
      //response.end(data);
      response.end(ejs.render(data))//ejs파일->변환->html문서로 합쳐서 출력
  })
}).listen(52273,function(){
    console.log('Server running http://localhost:52273/');
})
//node 2.ejstest.js