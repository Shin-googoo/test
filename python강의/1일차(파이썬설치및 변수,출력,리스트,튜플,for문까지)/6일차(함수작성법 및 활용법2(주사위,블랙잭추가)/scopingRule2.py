# p44

a=10
b=20

def sum1(x,y):
    return x+y

sum1(a,b)

x=10 #전역

def sum2(x,y):
    x=1 #지역
    return x+y

print(sum2(x,b))#21
print(sum2(x)) #에러유발
  # TypeError: sum2() missing 1 required positional argument: 'y'
print(x)#10
