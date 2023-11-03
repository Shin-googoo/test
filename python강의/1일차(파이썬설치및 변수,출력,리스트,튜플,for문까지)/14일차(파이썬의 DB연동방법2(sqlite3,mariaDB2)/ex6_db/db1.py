'''
sqlite3:내장DB(개인용)
->핸드폰의 전화번호목록
->MySQL(돌고래)->Oracle
->MariaDB
'''
import sqlite3
print(sqlite3.sqlite_version_info)
#(3, 8, 3, 1)

#Connection conn=DriverManger.getConnection(~)
#conn=sqlite3.connect(':memory')#ram에 저장
conn=sqlite3.connect('nice.db')#파일로저장
#print('conn',conn)
#Statement,PreStatement객체 얻어오기
cursor=conn.cursor()

#sql구문->cursor.execute('실행할 sql구문')
cursor.execute(''' drop table if exists fri ''')

#테이블 작성
cursor.execute('create table fri(name text(10),phone text(15),addr text)')
cursor.execute("insert into fri(name,phone,addr)values('테스트','111-1234','서울')")

#sql구문
conn.commit()
#자료 읽어오기
cursor.execute("select * from fri")
#레코드가 한개 가져올 경우
print(cursor.fetchone())
#레코드를 여러개 가져올 경우
print(cursor.fetchall())

print()#줄바꿈
cursor.execute("select * from fri")

for row in cursor:
    print(row)
    print(row[0]+','+row[1]+','+row[2])

cursor.close()#커서종료
conn.close()#DB접속 해제
'''
('테스트', '111-1234', '서울')
테스트,111-1234,서울
'''






