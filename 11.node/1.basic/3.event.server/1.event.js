/*
1.process.addEventListener('연결이벤트 종류명',처리함수(익명)
2.process.on('연결이벤트 종류명',익명함수)->주로
            exit(종료),uncaughtException(에러발생)
*/
process.on('exit',function(){
    console.log('종료중...!');
})
//에러가 발생이 될때 처리해주는 함수지정
process.on('uncaughtException',function(){
    console.log('예외가 발생되었습니다.!');
})

//setTimeout(한번),setInterval(계속)
var count=0;
//1.호출할 함수명,2.초단위(1000)->1초
var id=setInterval(function(){
  count++;
  //3번 실행이면 끝
  if(count==3) {clearInterval(id);} //설정정보 해제
  //일부러 에러를 발생
  error.error.error()//객체명.함수명()
},2000);//2초뒤에 실행
//node 1.event.js
/*
c:\webtest\9.web\4.node\3.event.server>node 1.event.js
예외가 발생되었습니다.! ->6초뒤에 에러가 발생
종료중...
*/