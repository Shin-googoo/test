'''
sql구문을 사용
'''

#DB연결시 에러처리같이 하기
#from 패키지명 import 불러올 모듈명
from errno import errorcode

#sangdata처리
import mysql.connector

#키,값형태로 불러오기
config={
        'user':'root',
        'password':'1234',
        'host':'127.0.0.1',
        'database':'test',
        'port':'3307'
        }

try:
    conn=mysql.connector.connect(**config)
    cursor=conn.cursor() #conn->pstmt
    #자료추가->검색
#     sql="insert into sangdata(code,sang,su,dan) \
#     values(10,'상품1',2,1234)"
#     cursor.execute(sql)
    #pstmt.executeUpdate(sql)
    #?=>%s로 표시
#     sql="insert into sangdata values(%s,%s,%s,%s)"
#     sql_data='11','상품2',33,4500
#     cursor.execute(sql,sql_data)
#     
    #자료수정
    sql="update sangdata set sang=%s,su=%s,dan=%s \
     where code=%s"
    sql_data=('파이썬',22,5500,'11')
    cursor.execute(sql,sql_data)
    
    #자료삭제
    code='10'
    #sql="delete from sangdata where code=%s" #?
    #sql="delete from sangdata where code="+code  
    sql="delete from sangdata where code='{}'".format(code) 
    cursor.execute(sql) 
    
    conn.commit()#메모리에 저장->테이블에반영
    
    #자료읽기
    sql="select * from sangdata"
    cursor.execute(sql)
    #for~in구문을 이용해서 불러온다.
    #cursor.fetchall()->모든 레코드 불러오기
    for data in cursor.fetchall():
        print(data)
    '''
    (1, '마우스', 5, 5000)
    (2, '모니터', 7, 55000)
    (10, '상품1', 2, 1234)
    (11, '상품2', 33, 4500)
'''
    
    
    
    
    
    
    
    
except mysql.connector.Error as err:
    if err.errno==errorcode.ER_ACCESS_DENIED_ERROR:
        print('id or passwd error')
    elif err.errno==errorcode.ER_BAD_DB_ERROR:
        print('db 내부적인 오류')
    else:
        print('에러:',err)
finally:#에러 발생과 상관없이 무조건 실행
    cursor.close()
    conn.close()
    
    
    




