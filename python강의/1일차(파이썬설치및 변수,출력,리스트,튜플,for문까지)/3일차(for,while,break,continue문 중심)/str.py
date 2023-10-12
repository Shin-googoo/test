nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for n in nums:
            # 숫자를 각각 따로 조사해서 3,6,9 중에 하나인지 확인 
    msg=n
    for i in str(n):
        if i=='3' or i=='6' or i=='9':
            msg='짝'
           # print(msg,end=' ')짝 짝 짝 짝 짝 짝 
    #print(msg,end=' ')#1 2 짝 4 5 짝 7 8 짝 10 11 12 짝 14 15 짝 17 18 짝 20 
print(msg,end=' ')#20
