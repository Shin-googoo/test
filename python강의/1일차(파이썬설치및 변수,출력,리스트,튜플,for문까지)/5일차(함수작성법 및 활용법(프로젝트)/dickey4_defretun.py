python_class=[]

python_class.append({'이름':'방자','성별':'남자','나이':20})
python_class.append({'이름':'홍길동','성별':'남자','나이':21,'애인':'성춘향'})
python_class.append({'이름':'성춘향','성별':'여자','나이':20,'애인':'홍길동'})
python_class.append({'이름':'이길숙','성별':'여자','나이':20})
python_class.append({'이름':'박형준','성별':'남자','나이':22})

#함수로 작성해 보자(함수 2개 추가)
def isKeyExist(adict,key):  #검색대상,찾을 키값
     if key in list(adict.keys()):
          return True #키가 있는 경우
     return False #키가 없는 경우

def check_bf_gf(person):  #그룹에서 하나씩 꺼내오는 경우
     #return #=>빠져나간다.
     #for person in python_class: ->아래와 같은 소스로 변경을 해준다.
     #for person in group:
          verdict=''  #결과를 출력할 문자열을 선언
         #애인 유무 확인
          #if '애인' in list(person.keys()): #애인이라는 키가 있다면
          if isKeyExist(person,'애인'):
            if person['성별']=='여자':
               verdict=person['이름']+'의 남친은'+person['애인']
            else:
               verdict=person['이름']+'의 여친은'+person['애인']
          else:
             #없는 경우
            verdict=person['이름']+'는 모태 솔로 입니다.'
   # return  ->맨 마지막에 return이 생략됨
          return verdict

#함수호출
#이 코드는 한개만 꺼내준다.
#result=check_bf_gf(python_class)
#print(result)

for person in python_class:  #각 사람의 정보를 꺼내서 남친의 여부를 알려줘
     result=check_bf_gf(person)
     print(result) #꺼내와서 출력시킨다.

#방자 는 모태 솔로 입니다.
#홍길동 의 여친은 성춘향 
#성춘향 의 남친은 홍길동
#이길숙 는 모태 솔로 입니다.
#박형준 는 모태 솔로 입니다.














