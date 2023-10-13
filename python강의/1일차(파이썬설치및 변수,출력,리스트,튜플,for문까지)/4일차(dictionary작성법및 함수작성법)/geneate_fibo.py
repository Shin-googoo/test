#함수에서 함수를 호출하기
def generate_fibo(n):
    fibos=[0,1]
    while len(fibos) < n:
        fibos.append(get_next_fibonacci(fibos[-2],fibos[-1]))
        print(fibos)
    return fibos

result1=generate_fibo(10)
result2=generate_fibo(20)
