python_class=[]

python_class.append({'이름':'방자','성별':'남자','나이':20,'애인':''})
python_class.append({'이름':'홍길동','성별':'남자','나이':21,'애인':'성춘향'})
python_class.append({'이름':'성춘향','성별':'여자','나이':20,'애인':'홍길동'})
python_class.append({'이름':'이길숙','성별':'여자','나이':20,'애인':''})
python_class.append({'이름':'박형준','성별':'남자','나이':22,'애인':''})

for person in python_class:
    #애인 유무 확인
    if not person['애인']=='':
       print(person['이름'],'의 애인은',person['애인'],sep=' ')
    else:
        #없는 경우
       print(person['이름'],'는 모태 솔로 입니다.',sep=' ')
       
