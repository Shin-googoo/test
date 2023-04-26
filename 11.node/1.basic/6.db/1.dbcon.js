/*
 1.dbcon.js->MySQL을 사용
*/
var mysql=require('mysql');//외장모듈

//1.DB연결
var client=mysql.createConnection({
    user:'root', //접속계정명
    password:'1234', //암호
    host:'192.168.0.9',//자기 컴퓨터의 ip주소->localhost
    database:'mydb' //접속할 데이터베이스명
});
//2.접속->CRUD->접속객체명(client).query('실행할 sql',콜백함수)
client.query('select * from products',function(error,result){
    if(error){
        console.log('쿼리문장에 오류가 발생되었습니다.');
    }else{
        console.log(result);
    }
});
//node 1.dbcon.js
/*
c:\webtest\9.web\4.node\6.db>node 1.dbcon.js
[ RowDataPacket {
    id: 1,
    name: 'testkim2222',
    modelnumber: '02-123-2222',
    series: 'Artist' },
  RowDataPacket {
    id: 2,
    name: 'hong',
    modelnumber: '02-444-9876',
    series: 'Programmer' },
  RowDataPacket {
    id: 3,
    name: 'lee',
    modelnumber: '010-222-9876',
    series: 'Designer' },
  RowDataPacket {
    id: 4,
    name: 'kim222',
    modelnumber: '010-111-2222',
    series: 'Designer' } ]
*/
