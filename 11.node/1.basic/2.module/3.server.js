/*
 서버를 생성->실행하고 나서 요청->페이지 보여주기
*/
//1.http모듈 불러오기
var http=require('http');//모듈 불러오는 이유->함수호출

//2.서버객체 생성
var server=http.createServer();

//3.포트설정->대기상태 listen
var port=3000;
server.listen(port,function(){//콜백함수
   console.log('웹서버가 가동중:%d',port);
   console.log('http://localhost:3000/');//링크걸기 하기위해서
})
//클라이언트 접속->이벤트를 처리->server.on(이벤트종류,처리할 함수(콜백)(socket))
server.on('connection',function(socket){ //서블릿의 init()과 같다
    //request.getRemoteAddr()
    console.log('접속대상자?:%s,%d',
                 socket.remoteAddress,socket.remotePort);
})
//요청이벤트 처리->요처이 들어왔을때 request이벤트 발생
server.on('request',function(req,res){ //doGet()
 console.log('클라이언트 요청이 들어왔습니다.');
 res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
 res.write("<!DOCTYPE html>");
 res.write("<html>");
 res.write("<head>");
 res.write("<title>응답 페이지</title>");
 res.write("</head>");
 res.write("<body>");
 res.write("<h1>노드제이스에서는 파일입출력이 중요</h1>");
 res.write("</body>");
 res.write("</html>");
 res.end();//최종적으로 응답을 보낼때 사용하는 함수
})
//node 3.server.js