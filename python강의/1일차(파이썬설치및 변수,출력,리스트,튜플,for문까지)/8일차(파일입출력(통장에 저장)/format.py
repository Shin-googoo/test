print('{0}'.format(3.1415))

#3.1415

print('{0}'.format(4/3))
#1.3333333333333333

print('{0:f}'.format(4/3))

#1.333333

print('{0:f}'.format(2))

#2.000000


#소수점 첫째자리까지만 표현하는 경우

print('{0:.1f}'.format(2)) #2.0

#소수점 둘째자리까지 표현

print('{0:.2f}'.format(5/3)) #1.67

#%로 표시하는 경우

print('{0:%}'.format(5/3))#166.666667%

#p173 ->파일 입출력

file=open('출력.txt','w')
file.write('헤이')
file.close()

file=open('출력.txt','r')
내용=file.read()
print(내용) #헤이
file.close()


file=open('출력.txt','w')
file.write('와쌉?')
file.close()

file=open('출력.txt','a')
file.write('\n나띵?')
file.close()

