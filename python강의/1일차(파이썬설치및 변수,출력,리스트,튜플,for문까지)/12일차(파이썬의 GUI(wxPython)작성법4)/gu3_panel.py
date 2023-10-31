'''
패널을 상속 받아보자
'''
import wx

class ExPanel(wx.Panel): #패널을 상속받아서 작성
    def __init__(self,parent):
        wx.Panel.__init__(self,parent) #패널생성자 호출
        
        wx.StaticText(self,label='기타 컴포넌트',pos=(20,30))
        
        wx.StaticText(self,label='이름은',pos=(20,70))
        self.txtName = wx.TextCtrl(self,value='초기치',pos=(100,70))
        #이벤트대상,핸들러함수지정
        self.Bind(wx.EVT_TEXT,self.OnText,self.txtName) 
        #self.txtName이 안쓰면 에러유발
        
        #RadioBox->하나만 선택이 가능하다.
        radioData = ['빨강','초록','파랑'] 
                                                                      #choices->선택할 데이터부분 지정
        rb = wx.RadioBox(self,label='좋아하는 색은?',pos=(20,130),choices=radioData)
        self.Bind(wx.EVT_RADIOBOX,self.OnRadio,rb) #이벤트 연결지정
        
        #ComboBox
        
        cboData = ['빨강','초록','파랑']
        #style->readOnly로 설정한 경우
        cbo = wx.ComboBox(self,pos=(20,200),choices=cboData,style=wx.CB_READONLY)
        self.Bind(wx.EVT_COMBOBOX,self.OnCombo,cbo)#change이벤트 발생
        
        #CheckBox
        self.chk = wx.CheckBox(self,label='결혼은?',pos=(20,100))
        #이벤트대상,함수,적용컴포넌트
        self.Bind(wx.EVT_CHECKBOX,self.OnCheck,self.chk)
        #multi TextCtrl=>아직은 싱글
        self.txtShow = wx.TextCtrl(self,pos=(20,300),\
                                   size=(250,150),style=wx.TE_MULTILINE | wx.TE_READONLY)
        
    def OnText(self,event): #이벤트가 발생하는 문자열을 써주게 된다.
        self.txtShow.AppendText('Text:%s\n'%event.GetString())
        
    def OnCheck(self,event):
        self.txtShow.AppendText('Check:%s\n'%event.IsChecked()) 
        #눌렀는지 안눌렀는지 true, or false로 알려준다.=>실행시켜본다.
        '''
        Check:True
        Check:False
        '''
    def OnRadio(self,event):                                  #선택이 두개
        self.txtShow.AppendText('Radio:%s %s\n'%(event.GetInt(), \
                                event.GetString()))
        
    #컴보박스->늘어진 목록
    def OnCombo(self,event):
        self.txtShow.AppendText('Combo:%s\n'%event.IsChecked())
        
if __name__=='__main__': #메인모듈인지 확인
    app = wx.App()
    frame=wx.Frame(None) 
    ExPanel(frame)#패널의 부모는 frame이 된다.
    
    frame.Center()
    frame.Show()
    frame.SetSize(300, 500)#크기 지정
    app.MainLoop()
    
    