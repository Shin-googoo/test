/*
 3.ejstest2.js 저장 =>매개변수를 ejs파일에게 전달해서 변환하는 경우
*/
var fs=require('fs');//파일불러오기
var http=require('http');//웹서버 가동
//추가
var jade=require('jade');
//------------------------------
http.createServer(function(request,response){
  //파일(html+자바스크립트코드)->변환하는 과정이 필요

  fs.readFile('jadePage.2.jade','utf-8',function(error,data){
      //추가
      var fn=jade.compile(data);
      response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
      //형식)jade.compile(변환할 문자열)
      response.end(fn({
          name:'테스트2', //#{매개변수명}
          description:'테스트용 jade Node.js연습테스트 입니다.'
      }));//jade파일->변환->html문서로 합쳐서 출력
                   //render()->변환해서 최종적으로 출력
  });
}).listen(52273,function(){
    console.log('Server running http://localhost:52273/');
})
//node 5.jadetest2.js