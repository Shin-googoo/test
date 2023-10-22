
from datetime import datetime,timedelta

이자율=0.01
거래내역양식='{0}-{1}-{2} {3:.1f}\n' #파일에 한줄씩 출식
원금=1000
거래일=datetime.today()

for 일수 in range(100):
    잔액=원금*(1+이자율)**일수 #잔고 이자 계산
    거래내역=거래내역양식.format(거래일.year, 거래일.month,거래일.day,잔액)
    print(거래내역)
    file=open('통장.txt','a')
    file.write(거래내역)
    file.close()
    거래일+=timedelta(days=1)
#최종값 출력
print(거래내역)












