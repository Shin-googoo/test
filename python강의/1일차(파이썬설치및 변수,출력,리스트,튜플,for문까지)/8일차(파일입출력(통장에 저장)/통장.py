'''
하루에 1%씩 이자가 붙는 마법통장

백일동안 게좌잔고 출력 =>통장.txt

->(1+0.0.1)**일수

11장 시간,날짜 출력->p250
'''

from datetime import datetime
now=datetime.now()
print(now.year) #2015
print(now.month)#1
print(now.day)#28

from datetime import datetime
생일=datetime(1969,3,24)
print(생일.year) 
print(생일.month)
print(생일.day)
print(생일.isoformat()) #1969-03-24 T00:00:00 ->국제 표준 양식 (T00:00:00)


from datetime import datetime,timedelta

오늘=datetime.today()
#내일=오늘+timedelta(days=1) #시간의 변화량(차이)->timedelta라고 한다.
                        #days=1은 하루의 차이를 만들어줘

내일=오늘+timedelta(days=30) #p260 한달
print(내일)
'''
7timeafter=timedelta(hours=7)
3daybefore=timedelta(days=-3)
이전=3daybefore+7timeafter

지금=datetime.now()
이틀전=지금+이전

print(7timeafter)
print(3daybefore)
print(지금)
print(이틀전)

#다음달=오늘+timedelta(month=1)
#내년=오늘+timedelta(years=1)
print(내일)#2015-02-27 11:43:51.855819
print(이전)
#print(다음달)
#print(내년)

'''
file=open('통장.txt','a')
#file.write('1000')
file.write(str(now.year))# 숫자를 문자로 변환해서 출력시킨다.
file.write(str(now.month))
file.write(str(now.day))
file.close()

file=open('통장.txt')
통장출력=file.read()
print(통장출력)
'''
