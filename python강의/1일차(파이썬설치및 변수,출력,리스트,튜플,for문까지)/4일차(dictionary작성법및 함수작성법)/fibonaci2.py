def get_next_fibonacci(first,second):
	return first+second

fibos=[0,1]
while len(fibos) < 100:
    fibos.append(get_next_fibonacci(fibos[-2],fibos[-1]))
    print(fibos)
