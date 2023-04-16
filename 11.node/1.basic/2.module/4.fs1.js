/*
  File System모듈,http모듈(웹서버 구축)
*/
var fs=require('fs');

/*
  파일을 불러오기 readFile(불러올 파일명~)(비동기방식) <-->writeFile
                   파일을 읽어들이는데 중간에 다른일을 할 수 있는 방식
                 readFileSync(불러올 파일명~)(동기방식)<->writeFileSync
                 =>파일을 읽어들이는 동안 다른일은 X
*/
var text=fs.readFileSync('textfile.txt','utf-8');
console.log(text);

//node 4.fs1.js
