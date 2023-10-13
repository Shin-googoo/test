python_class=[]

python_class.append({'이름':'방자','성별':'남자','나이':20})
python_class.append({'이름':'홍길동','성별':'남자','나이':21,'애인':'성춘향'})
python_class.append({'이름':'성춘향','성별':'여자','나이':20,'애인':'홍길동'})
python_class.append({'이름':'이길숙','성별':'여자','나이':20})
python_class.append({'이름':'박형준','성별':'남자','나이':22})

for person in python_class:
    #애인 유무 확인
     if '애인' in list(person.keys()): #애인이라는 키가 있다면
       if person['성별']=='여자':
          print(person['이름'],'의 남친은',person['애인'],sep=' ')
       else:
          print(person['이름'],'의 여친은',person['애인'],sep=' ')
       #같은 강의장에 있는지 확인
          본인이름=person['이름']
          애인이름=person['애인']
         #강의장을 다 뒤진다.
       for p in python_class:
            #본인은 건너띄기
            if 본인이름==p['이름']:
                continue
            if 애인이름==p['이름']:
                print(' ')
                break
     else:
        #없는 경우
       print(person['이름'],'는 모태 솔로 입니다.',sep=' ')
       
#방자 는 모태 솔로 입니다.
#홍길동 의 여친은 성춘향 
#성춘향 의 남친은 홍길동
#이길숙 는 모태 솔로 입니다.
#박형준 는 모태 솔로 입니다.
