/*
 1.basic
 전역변수->프로그램 전체에서 사용할 수 있는 변수 __filename, __dirname
 전역객체->언제든지 전체 프로그램내부에서 불러다 사용하는
          객체(=>jsp의 내장객체)
  console->콘솔화면과 관련된 기능을 다루는 객체
  exports->외부의 모듈을 불러올때 사용->import(=require()이용)
  process
*/
//System.out.println(~)
console.log('전역객체중의 하나');
console.log('filename',__filename); //작성중인 파일이름
console.log('dirname',__dirname);//현재 실행중인 파일의 위치
console.log('숫자:%d+%d=%d',273,52,273+52);
console.log('문자열:%s','Node.js 실습중');
console.log('JSON:%j',{name:'testkim'});
/*
 1.~.js 작성
 2.node 소스파일명~.js (=1.basic.js)
*/
