--한줄 주석
/*
여러줄 주석 
*/ 

create database imsi;

drop database imsi; 

create database mydb;

use mydb; 

create table sawon
( id int(5) not null ,
  name varchar(13) not null, 
  dept varchar(14) not null);
  
desc sawon

alter table sawon add column addr varchar(40);
alter table sawon drop column addr;
alter table sawon modify column dept varchar(30); 

insert into sawon values(1,'홍길동','영업부'); 
insert into sawon values(2,'테스트','개발부'); 
insert into sawon values(3,'임시','관리부'); 
insert into sawon values(4,'임시2','총무부'); 
insert into sawon values(5,'테스트2','생산2부');

select * from sawon;

CREATE TABLE board (
  num int(11) NOT NULL AUTO_INCREMENT,
  writer varchar(10) NOT NULL,
  email varchar(30) DEFAULT NULL,
  subject varchar(50) NOT NULL,
  passwd varchar(12) NOT NULL,
  reg_date datetime NOT NULL,
  readcount int(11) DEFAULT '0',
  ref int(11) NOT NULL,
  re_step smallint(6) NOT NULL,
  re_level smallint(6) NOT NULL,
  content text NOT NULL,
  ip varchar(20) NOT NULL,
  PRIMARY KEY (num)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

CREATE TABLE zipcode (
  zipcode char(7) NOT NULL,
  area1 char(10) DEFAULT NULL,
  area2 char(20) DEFAULT NULL,
  area3 char(40) DEFAULT NULL,
  area4 char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8

select * from zipcode order by zipcode desc,area1 limit 1,20;
select * from zipcode order by zipcode desc,area1 limit 5,10;
select * from zipcode order by zipcode desc,area1 limit 10,10;

-- 오름차 
select * from zipcode order by zipcode,area1 limit 1,20;