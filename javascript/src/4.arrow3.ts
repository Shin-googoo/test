/*
4.arrow3.ts(map,reduce,forEach함수)
  3.map함수 -> 기존의 배열의 요소들을 하나씩 읽어들여서
              계산후 길이가 같은 새로운 배열을 하나 
              만들어서 반환해주는 함수
  공통점:콜백함수 => 계산결과 길이가 똑같은 배열을 반환 
*/
let arr2=[1,2,3];
let test=arr2.map(function(x){//let test=[2,4,6];
  return x+x; //[2,4,6]
})
console.log(`test -> ${test}`);
const arr3=[6,7,8];
const test2=arr3.map(x=>x+x); //es6문법
console.log(`test2 -> ${test2}`); //[12,14,16]
//tsc 4.arrow3.ts -> node 4.arrow3.js
/*
test -> 2,4,6
test2 -> 12,14,16
*/
let a=[3,4,5,6,7];
/*
let c=a.map(function(v,i){ //1.v(배열의 항목) 2.인덱스번호
  console.log('v->',v,'i->',i);
  return v+1; //[4,5,6,7,8]
}) */
let c=a.map((v,i)=>{ //1.v(배열의 항목) 2.인덱스번호
  console.log('v->',v,'i->',i);
  return v+1; //[4,5,6,7,8]
})
console.log(`c=>${c}`);

//4. reduce함수 -> 콜백 -> 새로운 배열을 리턴(앞의 매개변수, 뒤의 매개변수)
function addRounded(pre,current) {
  return pre+current;
}
let numbers=[1,2,3,4];
//형식) const or let 변수명=배열객체명.reduce(호출할 함수명,매개)
let result=numbers.reduce(addRounded,1); //1. 처음계산(초기값)
//(1(초기),1)->(2,2)->(4,3)->(7,4) =>11
console.log('result=>',result);

//5. 배열객체명.forEach(콜백함수)
const array=[1,2,3];
/* 자바라면
  for(int i=0;i<array.length;i++){
    if(array[i]==3)
    System.out.println(array[i]+":"+i);
  }
*/
array.forEach(function(v,i){ //((v,i)=>{})
  if(v===3){
    console.log(v+":"+i); //배열의 항목,배열의 인덱스
  }
})//3:2
//tsc 4.arrow3.ts -> node 4.arrow3.js