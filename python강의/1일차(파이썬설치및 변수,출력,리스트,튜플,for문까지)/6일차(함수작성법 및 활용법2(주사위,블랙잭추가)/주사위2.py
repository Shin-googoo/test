
#도전 과제
#주사위 두 개를 던져서 합을 구한다.
#열번을 던져서 합이 6이상인 경우의 갯수를 출력

import random

개수=0
for i in range(10):
    합계=random.randint(1,6)+random.randint(1,6)
    #count=0
    if 합계>=6:
        개수+=1
        
print(개수)

