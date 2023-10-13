def sayHi(hour,morning='좋은 아침1'):
          if 6< hour < 12:
             print(morning)
          else:
             print('밥먹자')

sayHi(11)
sayHi(11,'추운아침')
sayHi(12,'추운아침')


#>>> 
#좋은 아침1
#추운아침
#밥먹자
#>>> 
