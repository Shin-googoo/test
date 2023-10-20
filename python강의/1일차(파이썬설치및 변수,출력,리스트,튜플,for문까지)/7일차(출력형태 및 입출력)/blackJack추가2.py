#52장의 카드 덱 생성

import random

def 카드덱생성():
    카드숫자=list(range(2,11))+['J','Q','K','A']
    카드문양=['Spade','Heart','Diamond','Clover']

    카드덱=[] #카드덱  초기화
    
    for 문양 in 카드문양:
        for 숫자 in 카드숫자:
            print(문양,숫자)
            카드덱.append([문양,숫자])


#잘섞기(근데 어떻게)

    random.shuffle(카드덱)
    return 카드덱

#블랙잭 게임 시작
카드덱=카드덱생성()


#카드 두장을 받기(손에 쥐기때문에)->실제 deck에서는 없애져야 된다.
카드패 = [카드덱.pop(),카드덱.pop()]
print('카드패:',카드패)

#=====여기까지 추가 한 내용===========

#total=0
#이부분을 추가->while구문을 실행(무한 루프)
while True:  
    #현재 hand의 카드의 숫자를 모두 더한다.
    total=0
    for card in hand:
        #현재 카드를 출력한다.
        print(card[0],card[1],end=' ')
        if card[1]=='A':
            total=total+14
        elif card[1]=='K':
            total=total+13
        elif card[1]=='J':
            total=total+11
        elif card[1]=='Q':
            total=total+12
        else:
        #숫자인 경우는 그냥 더해준다.
            total=total+card[1]
    print('Total ',total)
    #판별
    if total==21:
        result='블랙잭!!!!'
        print(result)
        break
    elif total > 21:
        result='돈 잃었다' 
        print(result)
        break  #집에 가야되기에 더 이상 하지 못한다.
    elif total < 21:
        #카드를 하나 더 받는다.
        hand.append(deck.pop())
        #-----------------------------
        result='인생을 계속 살아봐야 아는 거지 .. 한장 더'
        print(result)#ex)돈 잃었다.
        #print(total)#ex)23
    
#69페이지 ->while구문 사용







    
