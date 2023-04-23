//1.express 단독서버
//2.express +http모듈=>사용하는 경우

var express=require('express');
var app=express();

//추가->router/main.js에게 app객체를 전달
var router=require('./router/main')(app); //~(매개변수,,,)전달이 가능하다.

//여러개의 폴더에서 작성된 파일들을 express서버에서 불러올 수있도록 설정
//형식) 어플리케이션객체명.set(1.대상자(폴더,파일),2.폴더경로(or 파일정보))
app.set('views',__dirname+'/views');//index.html,about.html
app.set('view engine','ejs'); //view enginee(템플릿파일)  템플릿파일종류
//ejs파일을 불러올 수 있도록 설정(1.대상파일확장자 2.ejs파일 불러오기설정)
app.engine('html',require('ejs').renderFile);//ejs.render(문자열)
//render()->이미 파일을 불러온 경우에선 render()호출->출력할때
//renderFile()->파일을 불러오면서 한꺼뻔에 render()호출
//---------폴더(정적파일을 불러오는 경우)-------------------------------
app.use(express.static('public'));//express.static('공통폴더명')
//------------------------------------
var server=app.listen(3000,function(){
    console.log("Express server http://127.0.0.1:3000");
})
//node server.js