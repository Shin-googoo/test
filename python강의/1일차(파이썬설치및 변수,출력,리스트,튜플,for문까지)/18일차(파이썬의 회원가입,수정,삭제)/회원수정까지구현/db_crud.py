'''
mariaDB에 접속
   ->insert,update,delete,select(crud)
'''
import wx
#추가
import wx.xrc
#DB접속
#import java.sql.*; -->자바
import mysql.connector
import sys #sys.maxsize->최대레코드번호

config={
        'user':'root',
        'password':'1234',
        'host':'127.0.0.1',
        'database':'test',
        'port':'3307'
        }

class MyFrame1 (wx.Frame):
    
    #생성자
    def __init__( self, parent ):
        wx.Frame.__init__ ( self, parent, id = wx.ID_ANY, title = u"CRUD Test", pos = wx.DefaultPosition, size = wx.Size( 350,400 ), style = wx.DEFAULT_FRAME_STYLE|wx.TAB_TRAVERSAL )
        
        #self.SetSizeHintsSz( wx.DefaultSize, wx.DefaultSize )
        self.SetBackgroundColour( wx.SystemSettings.GetColour( wx.SYS_COLOUR_MENU ) )
        
        bSizer1 = wx.BoxSizer( wx.VERTICAL )
        
        self.m_panel1 = wx.Panel( self, wx.ID_ANY, wx.DefaultPosition, wx.DefaultSize, wx.TAB_TRAVERSAL )
        bSizer2 = wx.BoxSizer( wx.HORIZONTAL )
        
        self.m_staticText1 = wx.StaticText( self.m_panel1, wx.ID_ANY, u"번호", wx.DefaultPosition, wx.DefaultSize, 0 )
        self.m_staticText1.Wrap( -1 )
        bSizer2.Add( self.m_staticText1, 0, wx.ALL, 5 )
        
        self.txtNo = wx.TextCtrl( self.m_panel1, wx.ID_ANY, wx.EmptyString, wx.DefaultPosition, wx.DefaultSize, 0 )
        bSizer2.Add( self.txtNo, 0, wx.ALL, 5 )
        
        self.btnInsert = wx.Button( self.m_panel1, wx.ID_ANY, u"등록", wx.DefaultPosition, wx.DefaultSize, 0 )
        bSizer2.Add( self.btnInsert, 0, wx.ALL, 5 )
        
        
        self.m_panel1.SetSizer( bSizer2 )
        self.m_panel1.Layout()
        bSizer2.Fit( self.m_panel1 )
        bSizer1.Add( self.m_panel1, 1, wx.EXPAND |wx.ALL, 5 )
        
        self.m_panel2 = wx.Panel( self, wx.ID_ANY, wx.DefaultPosition, wx.DefaultSize, wx.TAB_TRAVERSAL )
        bSizer3 = wx.BoxSizer( wx.HORIZONTAL )
        
        self.m_staticText2 = wx.StaticText( self.m_panel2, wx.ID_ANY, u"이름", wx.DefaultPosition, wx.DefaultSize, 0 )
        self.m_staticText2.Wrap( -1 )
        bSizer3.Add( self.m_staticText2, 0, wx.ALL, 5 )
        
        self.txtName = wx.TextCtrl( self.m_panel2, wx.ID_ANY, wx.EmptyString, wx.DefaultPosition, wx.DefaultSize, 0 )
        bSizer3.Add( self.txtName, 0, wx.ALL, 5 )
        
        self.btnModify = wx.Button( self.m_panel2, wx.ID_ANY, u"수정", wx.DefaultPosition, wx.DefaultSize, 0 )
        bSizer3.Add( self.btnModify, 0, wx.ALL, 5 )
        
        self.btnConfirm = wx.Button( self.m_panel2, wx.ID_ANY, u"확인", wx.DefaultPosition, wx.DefaultSize, 0 )
        bSizer3.Add( self.btnConfirm, 0, wx.ALL, 5 )
        
        
        self.m_panel2.SetSizer( bSizer3 )
        self.m_panel2.Layout()
        bSizer3.Fit( self.m_panel2 )
        bSizer1.Add( self.m_panel2, 1, wx.EXPAND |wx.ALL, 5 )
        
        self.m_panel3 = wx.Panel( self, wx.ID_ANY, wx.DefaultPosition, wx.DefaultSize, wx.TAB_TRAVERSAL )
        bSizer4 = wx.BoxSizer( wx.HORIZONTAL )
        
        self.m_staticText3 = wx.StaticText( self.m_panel3, wx.ID_ANY, u"전화", wx.DefaultPosition, wx.DefaultSize, 0 )
        self.m_staticText3.Wrap( -1 )
        bSizer4.Add( self.m_staticText3, 0, wx.ALL, 5 )
        
        self.txtTel = wx.TextCtrl( self.m_panel3, wx.ID_ANY, wx.EmptyString, wx.DefaultPosition, wx.DefaultSize, 0 )
        bSizer4.Add( self.txtTel, 0, wx.ALL, 5 )
        
        self.btnDel = wx.Button( self.m_panel3, wx.ID_ANY, u"삭제", wx.DefaultPosition, wx.DefaultSize, 0 )
        bSizer4.Add( self.btnDel, 0, wx.ALL, 5 )
        
        
        self.m_panel3.SetSizer( bSizer4 )
        self.m_panel3.Layout()
        bSizer4.Fit( self.m_panel3 )
        bSizer1.Add( self.m_panel3, 1, wx.EXPAND |wx.ALL, 5 )
        
        self.m_panel4 = wx.Panel( self, wx.ID_ANY, wx.DefaultPosition, wx.DefaultSize, wx.TAB_TRAVERSAL )
        bSizer5 = wx.BoxSizer( wx.HORIZONTAL )
        
        self.memList = wx.ListCtrl( self.m_panel4, wx.ID_ANY, wx.DefaultPosition, wx.DefaultSize, wx.LC_REPORT )
        bSizer5.Add( self.memList, 0, wx.EXPAND|wx.ALL, 5 )
        
        self.m_panel4.SetSizer( bSizer5 )
        self.m_panel4.Layout()
        bSizer5.Fit( self.m_panel4 )
        bSizer1.Add( self.m_panel4, 1, wx.EXPAND |wx.ALL, 5 )
        
        self.m_panel5 = wx.Panel( self, wx.ID_ANY, wx.DefaultPosition, wx.DefaultSize, wx.TAB_TRAVERSAL )
        bSizer6 = wx.BoxSizer( wx.HORIZONTAL )
        
        self.lblCount = wx.StaticText( self.m_panel5, wx.ID_ANY, u"인원수:0", wx.DefaultPosition, wx.DefaultSize, 0 )
        self.lblCount.Wrap( -1 )
        bSizer6.Add( self.lblCount, 0, wx.ALL, 5 )
        
        self.m_panel5.SetSizer( bSizer6 )
        self.m_panel5.Layout()
        bSizer6.Fit( self.m_panel5 )
        bSizer1.Add( self.m_panel5, 1, wx.EXPAND |wx.ALL, 5 )
        
        self.SetSizer( bSizer1 )
        self.Layout()
        #창을 가운데에 정렬해서 보여달라
        self.Centre( wx.BOTH )
        #ListController에 항목을 입력
        #1.항목의 순서(0~),2.제목,3.넓이지정
        self.memList.InsertColumn(0,'번호',width=50)
        self.memList.InsertColumn(1,'이름',width=100)
        self.memList.InsertColumn(2,'전화',width=150)
        
        #이벤트처리(버튼을 클릭)->함수 1개
        #각 버튼을 구분->id값을 부여
        #동적으로 멤버변수 추가
        #self.컴포넌트명.동적멤버변수=값
        self.btnInsert.id=1 #등록
        self.btnModify.id=2 #수정
        self.btnConfirm.id=3 #수정확인
        self.btnDel.id=4 #삭제
        
        #이벤트 연결(대상자.Bind(구분id,호출함수명))
        self.btnInsert.Bind(wx.EVT_BUTTON,self.OnBtnClick)
        self.btnModify.Bind(wx.EVT_BUTTON,self.OnBtnClick)
        self.btnConfirm.Bind(wx.EVT_BUTTON,self.OnBtnClick)
        self.btnDel.Bind(wx.EVT_BUTTON,self.OnBtnClick)
        
        #수정시에만 활성화됨
        self.btnConfirm.Enable(enable=False)
        self.txtNo.SetFocus()#커서입력
        #DB에 접속해서 접속한 데이터를 출력
        self.ViewListData()
        
    
    def __del__( self ):
        pass
    
    def ViewListData(self):
        try: # *->list객체 받아올때,
              # ** ->set객체
            conn=mysql.connector.connect(**config)
            cursor=conn.cursor() #pstmt=con.preparedStatement(sql)
            sql="select * from mem"
            cursor.execute(sql)#pstmt.executeQuery(sql)
            
            #매번 실행할때마다 전의 값 초기화
            self.memList.DeleteAllItems()
            cou=0 #인원수
            
            for data in cursor:
                i=self.memList.InsertItem(sys.maxsize,0)
                #1.내부적인 지원해주는 레코드번호,2.항목순서,3.출력할값
                self.memList.SetItem(i,0,str(data[0]))#숫자->문자(번호)
                self.memList.SetItem(i,1,data[1])#이름
                self.memList.SetItem(i,2,data[2])#전번
                cou+=1
            
            self.lblCount.SetLabel("인원수:"+str(cou))
                

        #except 최상위패키지명.하위패키지.클래스명  as  객체명 
        except mysql.connector.Error as err:
            print("DB접속 오류",err)
        finally:
            cursor.close() #pstmt객체,statement객체
            conn.close() #Connection객체 메모리 해제
    
    #public void OnBtnClick(~){}->pass
    def OnBtnClick(self,event):
        #이벤트를 발생시킨 객체를 얻어옴
        id=event.GetEventObject().id
        #print("id=",id)
        if id == 1: #등록
            self.MemInsert()
        elif id == 2: #수정모드->글수정
            self.MemModifyPre()
        elif id == 3: #수정확인
            self.MemModify()
        elif id == 4: #삭제->글삭제
            self.MemDel()
        elif id == 5: #수정취소
            self.MemModiCancel()
    
    #해당 사원번호를 입력받아서 찾아주는 함수
    def SelectData(self,no): 
        try:
            conn=mysql.connector.connect(**config)
            cursor=conn.cursor() #pstmt,statement
            sql="select * from mem where bun='{}'".format(no)
            cursor.execute(sql)#pstmt.executeQuery(sql) 
            #fectchall()->모든 레코드,
            #fectchone()->레코드 한개
            data=cursor.fetchone()
            return data
            
        except mysql.connector.Error as err:
            print("SelectData함수 에러=",err)
        finally:
            cursor.close() #메모리해제
            conn.close() #최종 메모리 해제
                   
        #글추가(=>게시판의 글쓰기)
    def MemInsert(self):
        no=self.txtNo.GetValue()#getValue() X
        name=self.txtName.GetValue()
        tel=self.txtTel.GetValue()
        
        if no == '' or name == '' or tel == '':
            #대화상자->wx.MessageDialog(~)
                                        #부모창(self),메세지내용,아이콘모양,버튼모양
            dlg=wx.MessageDialog(self,'자료를 입력하세요!','알림',wx.OK)
            dlg.ShowModal()#화면에 출력하라
            dlg.Destroy()#메모리에서 해제
            return
        
        try:
            conn=mysql.connector.connect(**config)
            cursor=conn.cursor() #pstmt,statement
            
            #입력받은 no->기존에 존재하는지 체크
            data=self.SelectData(no)
            #기존에 이미 사원번호가 있다면
            #if (data!=null)
            if data!=None:
                dlg=wx.MessageDialog(self,'이미 등록된 사원번호입니다.','알림',wx.OK)
                dlg.ShowModal()
                dlg.Destroy()
                self.txtNo.SetValue('')
                self.txtName.SetValue('')
                self.txtTel.SetValue('')
                self.txtNo.SetFocus()
                return
            
            #입력
            sql="insert into mem values(%s,%s,%s)"
            cursor.execute(sql,(no,name,tel))
            conn.commit()#메모리-->테이블에 반영
            #다 입력한후 다시입력받기위해 초기화
            self.ViewListData()
            self.txtNo.SetValue('')
            self.txtName.SetValue('')
            self.txtTel.SetValue('')
                       
        except mysql.connector.Error as err:
            print("MemInsert함수 에러=",err)
        finally:
            cursor.close() #메모리해제
            conn.close() 
    
    #수정할 데이터를 불러오기
    def MemModifyPre(self):
        #입력을 받을 대화상자->TextEntryDialog
        #부모창이 없음(None)
        dlg=wx.TextEntryDialog(None,'수정할 번호입력?','수정')
        ret = dlg.ShowModal()
        
        #ok버튼을 클릭했다면(수정할 번호를 입력)
        if wx.ID_OK:
            modiNum=dlg.GetValue()
            data=self.SelectData(modiNum)
            #존재하지 않은번호를 입력한 경우
            if data == None: return
            
            self.txtNo.SetValue(str(data[0]))
            self.txtName.SetValue(data[1])
            self.txtTel.SetValue(data[2])
            #사원번호는 편집불가
            self.txtNo.SetEditable(False)
            #수정확인버튼은 활성화
            self.btnConfirm.Enable(True)
            #수정버튼을 취소로 변경
            self.btnModify.SetLabel("취소")
            self.btnModify.id=5
        else:#ID_Cancel버튼을 누른경우
            return
        dlg.Destroy()#대화상자 메모리 해제
            
    #수정하기->추가와 코딩이 동일
    def MemModify(self):
        no=self.txtNo.GetValue()#getValue() X
        name=self.txtName.GetValue()
        tel=self.txtTel.GetValue()

        try:
            conn=mysql.connector.connect(**config)
            cursor=conn.cursor() 
            
            #수정
            sql="update mem set irum=%s,junhwa=%s where bun=%s"
            cursor.execute(sql,(name,tel,no))
            conn.commit()
            
            self.ViewListData()
            self.txtNo.SetValue('')
            self.txtName.SetValue('')
            self.txtTel.SetValue('')
            #추가
            self.txtNo.SetFocus()
            self.txtNo.SetEditable(True)#번호입력가능
            self.btnConfirm.Enable(False)#비활성화
            self.btnModify.SetLabel("수정")#취소->수정
                       
        except mysql.connector.Error as err:
            print("MemModify함수 에러=",err)
            #추가
            conn.rollback()
        finally:
            cursor.close() #메모리해제
            conn.close() 
            
    #삭제하기
    def MemDel(self):
        pass
    
    #수정취소
    def MemModiCancel(self):
        pass
        
def main():
    app=wx.App()#메인
    MyFrame1(None).Show()
    app.MainLoop()
    
if __name__=='__main__':
    main()


