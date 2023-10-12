
nums=range(10)
for i in nums:
    if i%2==0:
        continue #짝수 인경우만 건너띄게 즉 홀수만 적용이 되게 설정
    print('번호:',i) #1,3,5,7,9(홀수만 출력)
