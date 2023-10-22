file=open('출력.txt')
내용=file.read()
file.close() #파일을 다 읽고나서 더 이상 읽을것이 없으면 닫아준다.
print(내용)

file=open('출력.txt')
줄=file.readline() #한줄 읽어들임->호출할때 마다 한줄 한줄 이동하게 된다.
print(줄)

줄=file.readline()
print(줄)
줄=file.readline()
print(줄) # 출력되는 내용이 없다.

file=open('출력.txt')

줄=file.readlines()#리스트 형태로 불러온다.
print(줄) #['와쌉?\n', '나띵?']
print(줄[0])#와쌉? =>줄바꿈까지 구현이 된다.(다음줄 개행이 된다.)

print(줄[0][:-2])#와쌉 =>뒤의 \n에 대한 구문을 뺀구문(2개)->와쌉(?가 안나옴)
print(줄[0][:-1])#와쌍?
print(줄[1])#나띵?
