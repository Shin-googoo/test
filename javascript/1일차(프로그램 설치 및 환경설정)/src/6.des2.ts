/*
6.des2.ts [변수,변수2,변수3...]=배열명
*/ 
let t1,y1,v1;
[t1,y1]=['a',2]
console.log(t1,y1); //'a',2

[t1,y1]=[1,null]; //값을 저장하지 않아도 자리수는 맞춰야된다.
                  //ex) insert into 테이블명 values(,,,null,) 
console.log(t1,y1);

[t1,y1,v1=3]=[1,2];  //v1에 값을 저장X 내부적으로 값을 지정-> 저장 
console.log(t1,y1,v1); //1,2,3

[t1,y1=10,v1=3]=[1,null,9]; //1,null,9 -> 10과 3은 예비용이다.
console.log(t1,y1,v1);
//tsc 6.des2.ts -> node 6.des2.js


