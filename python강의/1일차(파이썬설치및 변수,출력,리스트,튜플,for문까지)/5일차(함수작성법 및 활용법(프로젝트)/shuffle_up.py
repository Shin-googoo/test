def shuffle_up(input_seq):
    import random

    #문자열인 경우
    if type(input_seq)==str:
        #문자열을 수정이 가능한 상태인 리스트로 변경해 주면 된다.
        temp_list=[]
        for s in input_seq:
            temp_list.append(s) #['파','이','썬]이 된다.->random.shuffle['썬','파','이']
                                #->다시 원래의 문자열로 변환시켜야 한다. '썬파이'
        random.shuffle(temp_list)
        #다시 문자열로 변환
        #shuffled_text=temp_list[0]+temp_list[1]+temp_list[2] ->수동하는 경우 더함
        shuffled_text=''
        for char in temp_list:
            shuffled_text=shuffled_text+char #더해서 갱신시킨뒤 리턴
        #결과 반환->리턴은 결과를 완료하는 시점에서 리턴 구문 씀->리턴 뒤에는 아무런 문장도 실행이 안된다.
        return shuffled_text 

    #이 문장이 문자열 처리코드 앞에 위치하면 안된다.return 뒤에는 아무문장도 실행이 안된다(중요)        
    random.shuffle(input_seq)
    return input_seq

shuffled = shuffle_up([1,2,3,4,5,6,7,8]) #숫자는 수정이 가능하기에 서플이 가능하다.
print(shuffled) #[2, 8, 3, 6, 4, 5, 7, 1]

nums=[1,2,3]
nums[0]=5
print(nums) #[5, 2, 3]

text='파이썬'
print(text[0]) #'파' 출력->읽기는 가능하다.
#text[0]='아'
# text[0]='아'  문자열은 수정이 안된다.->그래서 서플이 안된다.
#TypeError: 'str' object does not support item assignment
print(text)

#result=shuffle_up('파이썬')
#print(result) #TypeError: 'str' object does not support item assignment
result=shuffle_up('파이썬') #위의 문자열 처리 수정 코드를 추가한 후 다시 실행 시킨다.
print(result) #이썬파



