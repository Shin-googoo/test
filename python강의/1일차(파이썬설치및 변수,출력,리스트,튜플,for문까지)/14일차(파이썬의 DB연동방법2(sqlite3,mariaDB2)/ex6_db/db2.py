'''
sqlite3을 이용해서 테이블 작성->데이터입력
'''
import sqlite3

def main(dbname):#nice.db
    try:
        conn=sqlite3.connect(dbname)
        #conn객체 얻어옴
        cur=conn.cursor()
        cur.execute("drop table if exists jikwon")
        cur.execute("create table jikwon(id integer primary key, name text)")
        cur.execute("insert into jikwon values(1,'한국인')")
        cur.execute("insert into jikwon values(2,'한국인2')")
        cur.execute("insert into jikwon values(3,'한국인3')")
        cur.execute("insert into jikwon values(?,?)",(4,'테스트'))
        
        #다양한 방법으로 입력
        tdata=(5,'공기밥')
        cur.execute("insert into jikwon values(?,?)",tdata)
        
        #여러개의 값을 동시에 입력->executemany
        tdatas=((6,'비빔밥'),(7,'오곡밥'))
        cur.executemany("insert into jikwon values(?,?)",tdatas)
         
        ldata=[8,'나물밥']
        cur.execute("insert into jikwon values(?,?)",ldata)
        
#         sdata={9,'임시'}#set type은 지원X
#         cur.execute("insert into jikwon values(?,?)",sdata)

        cur.execute("insert into jikwon values(:sabun,:irum)",{'sabun':'9','irum':'사오정'})
        cur.execute("insert into jikwon values(:sabun,:irum)",{'sabun':'10','irum':'테스트김'})
        #수정
        cur.execute("update jikwon set name='가나다' where id=1")
        cur.execute("update jikwon set name='테스트김' where id=?",(2,))
        cur.execute("update jikwon set name='임시2' where id=?",[3])
        #삭제
        cur.execute("delete from jikwon where id=4")
        
        conn.commit()
        
        cur.execute("select * from jikwon")
        for row in cur:
            print(str(row[0])+" "+row[1])
        
        print()
        cur.execute("select count(*) from jikwon")
        print("건수:",cur.fetchone()[0])
        
        
        
    except sqlite3.Error as err:
        print("에러:",err)
        conn.rollback()
    finally:
        cur.close()
        conn.close()
        
if __name__=='__main__':
    main("nice.db")
