'''
remote db server(MariaDB)->설치및 설정
'''
# import 최상위패키지명.하위패키지명
import mysql.connector

#Connection con=DBConnectionMgr.getConnection(~)

conn=mysql.connector.connect(user='root',\
                             password='1234',\
                             host='127.0.0.1',\
                             database='test',\
                             port='3307')
print('conn=',conn)
#conn= <mysql.connector.connection.MySQLConnection object at 0x021E0B50>
conn.close() #연결해제
