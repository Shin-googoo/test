def get_next_fibonacci(first,second):
	return first+second

fibos=[0,1]
c=get_next_fibonacci(fibos[0],fibos[1])
fibos.append(c)
#[0,1,2]
c=get_next_fibonacci(fibos[-2],fibos[-1])
fibos.append(c)
#[0,1,2,3]
c=get_next_fibonacci(fibos[-2],fibos[-1])
fibos.append(c)
print(fibos)
