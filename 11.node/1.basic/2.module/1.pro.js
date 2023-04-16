/*
process객체 보충 설명->프로그램의 시스템정보
*/
console.log('process.env',process.env);//컴퓨터 환경정보
console.log('process.version',process.version);//Node.js의 버전
//시스템정보
console.log('process.platform',process.platform);
console.log('process.memoryUsage()',process.memoryUsage());//메모리사용량
console.log('process.uptime()',process.uptime());//현재프로그램 실행시간
// {}=>객체표시 배열표시=>[]
var Person={name:'홍길동',
            age:32,
            address:'서울시 강남구 세경빌딩 3층'}; //
//객체의 내용을 출력
console.dir(Person);
//2.module>node 1.pro.js