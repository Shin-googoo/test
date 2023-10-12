#52장의 카드 덱 생성

deck=[]

ranks=list(range(2,11))+['J','Q','K','A']
suits=['Spade','Heart','Diamond','Clover']
for s in suits:
    for r in ranks:
        deck.append([s,r])

#블랙잭 게임 시작
#잘섞기(근데 어떻게)
import random #ToolBox->공구를 빼낸다
random.shuffle(deck)

#카드 두장을 받기(손에 쥐기때문에)->실제 deck에서는 없애져야 된다.
#0~51->p29
#hand=deck[0:2] #[deck[0],deck[1]]해도 된다.
hand=[deck.pop(),deck.pop()]
#print(hand)-->통째로 나온다.
#print(hand[0][0],hand[0][1],hand[1][0],hand[1][1])

#현재 hand의 카드의 숫자를 모두 더한다.
#J(11),Q(12),K(13),A(14)
#card=hand[0] ->카드 한장의 경우

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







    
