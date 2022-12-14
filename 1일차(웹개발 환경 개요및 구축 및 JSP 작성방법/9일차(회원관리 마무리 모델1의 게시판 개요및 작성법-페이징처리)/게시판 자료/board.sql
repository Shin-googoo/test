use mydb;

create table board( 
num int not null primary key auto_increment, /*  글번호를 저장하는필드 */ 
writer varchar(10) not null, /*글쓴이 */ 
email varchar(30),  /*  이메일->유일하게null값을허용*/ 
subject varchar(50) not null, /*글제목 */ 
passwd varchar(12) not null, /*글의 비밀번호 */ 
reg_date datetime not null, /*글을쓴 날짜*/ 
readcount int default 0, /*  글의조회수 */ 
ref int not null,     /*  글을그룹화하기위한 필드 */ 
re_step smallint not null, /*  제목글과 답변글의순서를 정리*/ 
re_level smallint not null, /*  글의 레벨을저장하는필드 */ 
content text not null, /*  글내용  */ 
ip varchar(20) not null /*  글쓴이의ip주소를 저장하는필드 */ 
     ); 
     
desc board;

select count(*) from board;
                                        
