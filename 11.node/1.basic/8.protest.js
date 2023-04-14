/*
  console,exports,
  process ->node.js에서만 존재하는 객체로 주로 프로그램의 시스템
            정보를 제공
*/
var path=process.cwd();//현재위치를 구해주는 함수(작업폴더)
console.log('path=>',process.cwd());
//var config=require('../config/db.js') 이런식으로 사용한다.
var config=require(path+'/config/db');
config.sum(2,3);//2+3=5

//node 8.protest.js
/*
c:\webtest\9.web\4.node\1.basic>node 8.protest.js
path=> c:\webtest\9.web\4.node\1.basic
2+3=5
*/