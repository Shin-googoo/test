#coding:utf-8

ranks=[2,3,4,5,6,7,8,9,10,'J','Q','K','A']
suits=['Heart','Spade','Clover','Diamond']

deck=[]
for r in ranks:
 for s in suits:
  deck.append([r,s])
 
 print(deck)