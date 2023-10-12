#colors=['빨강','노랑'] ->list의 경우
colors={'apple':'빨강','banana':'노랑'} #dictionary->사전은 인덱스부여해서 저장
print(colors['apple']) #빨강
print(colors['banana'])#노랑

for k,v in colors.items():
    print(k,v) # apple 빨강 (key value로 출력됨)
