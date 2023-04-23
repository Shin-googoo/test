//module.exports.함수명=fucntion(){}
//module.exports=function(매개변수){}
module.exports=function(app){ //app->server.js에서 만든 객체를 전달을 받아서처리
    app.get('/',function(req,res){
        //res.send('Hello World Express'); //간단한 문자열을 출력시킬때 사용
        res.render('index.html');//경로가 표시X
        //res.render('../views/index.html)
    });
    app.get('/about',function(req,res){
        res.render('about.html');
    });
}