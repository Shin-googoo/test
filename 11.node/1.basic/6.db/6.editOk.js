
//1.모듈을 불러오는 코딩
var fs=require('fs');//디자인한 파일불러오기
var ejs=require('ejs');//html+자바스크립트-<% ~ %>
var http=require('http');//웹서버 실행
var mysql=require('mysql');//DB접속->콘솔에 출력->웹출력
var express=require('express');//http+미들웨어 추가
//추가
var bodyParser=require('body-parser');
//--------------------------------------
//1.DB접속
var client=mysql.createConnection({
    user:'root',
    password:'1234',
    database:'mydb',
    host:'192.168.0.17'  //host:'localhost'
});
//2.서버생성
var app=express();

//추가 설정=>미들웨어(기능을 추가(확장팩))
//app.use(express.bodyParse()) 옛날방식
app.use(bodyParser.urlencoded({extended:false}));

//3.서버를 가동
http.createServer(app).listen(52273,function(){
    console.log('Server running http://localhost:52273');
})
//4.요청에 따라서 처리 routing ->put,delete ->RestFul(몽고DB)->Ajax
//<a href="detail.jsp?num=<%=num%>"~>
app.get('/',function(request,response){
  fs.readFile('list.html','utf-8',function(error,data){
     //db접속해서 sql실행
     client.query('select * from products',function(error,results){
        //응답->html+자바스크립트구문->변환(ejs.render()이용)
        response.send(ejs.render(data,{
            data:results  //data(웹상에서 전달받은 객체):DB결과값
        }));
     });
  });
});//글목록보기->node 3.list.js

app.get('/delete/:id',function(request,response){
//형식)client.query(1.실행할 sql,2.[]배열로 표시,3.콜백함수)
  client.query('delete from products where id=?',
  //request.getParameter('id') 자바의경우->[request.params.id] 
  //[request.params.전달받은 매개변수명]
                [request.params.id],function(){
  //response.sendRedirect("list.jsp"); 자바의 경우
    response.redirect('/');  //response.redirect('요청경로명')                
                })
});//글삭제하기 ->node 4.delete.js
app.get('/insert',function(request,response){
    fs.readFile('insert.html','utf-8',function(error,data){
        //response.send(ejs.render(data~)) //변환해서 출력할것.
        response.send(data);//순수 html만 존재한다면
    })
});//글쓰기폼으로 전환->node 5.insertOk.js
app.post('/insert',function(request,response){
// 변수에 담기
var body=request.body;
console.log('body->',body);//BoardDTO board
//db실행
client.query('insert into products(name,modelnumber,series) values(?,?,?)',
            [body.name,body.modelnumber,body.series],function(){
                response.redirect('/');   
           });

});//글쓰기구현 node 5.insertOk.js
app.get('/edit/:id',function(request,response){
 fs.readFile('edit.html','utf-8',function(error,data){//html문자열
    client.query('select * from products where id=?',
        //request.param('id')옛날->request.getParameter("id")//자바
                  [request.params.id],function(error,result){
         //응답->html+자바스크립트코드->변환           //sql실행결과문
         response.send(ejs.render(data,{
               data:result[0] //배열표시 0번째->찾은 데이터가 한개
              }));                 
        });
    });
});//글수정폼으로 전환
//글수정하기=>글쓰기와 동일
// value="<%= data.id %>" disabled/> =>동적으로 id값을 전달
app.post('/edit/:id',function(request,response){
var body=request.body;
console.log('body->',body);//수정할 값이 전달되는지 체크=>입력을 받는 부분처리
//db실행                   //request.params.매개변수는 입력X(동적으로 전달)
client.query('update products set name=?, modelnumber=?, series=? where id=?',
    [body.name,body.modelnumber,body.series,request.params.id],function(){
            response.redirect('/');   
           });
});//글수정하기구현->node 6.editOk.js