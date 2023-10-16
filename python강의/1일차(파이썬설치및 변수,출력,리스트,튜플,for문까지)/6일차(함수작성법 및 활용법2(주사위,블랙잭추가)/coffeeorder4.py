#선택사항 추가(3번)

def 별다방(주문,주문선택):
    메뉴목록=[{'메뉴명':'라떼','가격':4},
            {'메뉴명':'아메리카노','가격':3}]

    선택메뉴 = [{'선택명':'저지방 우유','가격':0},
               {'선택명':'바닐라 시럽','가격':0.5},
               {'선택명':'디카페인','가격':0.3}]

    가격=0
    # 기본 메뉴 가격 
    for 메뉴 in 메뉴목록:
        if 주문 == 메뉴['메뉴명']:
            가격 = 메뉴['가격'] # 있으면 가격 반환

            #선택사항에 따른 가격 추가 메뉴가 있을때만 처리할 수 있도록 하기위해서는 들여쓰기
            for 선택 in 선택메뉴:
                if  주문선택 == 선택['선택명'] :
                    가격 += 선택['가격']# 선택 메뉴의 가격을 더한다.
            
    #최종 가격 반환 
    return 가격

def 콩다방(주문):
    #print(메뉴목록) #->메뉴목록을 찾을 수없다.(Scoping Rule때문에)->지역에 있는 경우
    메뉴목록=[{'메뉴명':'라떼','가격':4},
            {'메뉴명':'아메리카노','가격':3}]
    
    메뉴목록.append({'메뉴명':주문})

print(별다방('라떼','바닐라 시럽')) #4.5
print(별다방('녹차','디카페인'))

