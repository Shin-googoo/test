/*
8.func.ts 함수의 매개변수 뒤에 ?의 의미
  함수의 매개변수를 전달 -> 전달X 에러유발 O
  ->전달할 값이 있으면 전달하고 없으면 전달하지 않아도
  에러가 발생이 안되게 하고 싶다. (옵션)
  ex) @Autowired("requried=false") ->스프링
*/
function display_detail(id:number,name:string,
                        mail_id?:string) { //mail_id?:string -> ?주면 적어도 되고 안적어도 됨
  console.log('id->',id,'name->',name);
  //자바스크립트에서의 변수값이 없으면 undefined
  if(mail_id!=undefined){//값이 저장이 된 상태라면
    console.log('mail_id=>',mail_id);
  }
}
display_detail(123,'Jojn');
display_detail(111,'Mary','Marykim@daum.net');
//함수명(매개변수:자료형 | 자료형2,,,):반환형 자료형 | 자료형2
//-> 유니언 (둘 중의 하나)
function disp2(name:string | string[]):string | string[]{
  //자바스크립트에서 예약어 typeof(자료형을 체크) 변수명
  if(typeof name=="string"){
      console.log('name=>',name);
  }else{
    for(let i=0; i<name.length; i++){
      console.log(name[i]);
    }
  }
  return name;
}
console.log(disp2("Mark"));
console.log(disp2(["mark","Tom","Mary","John"]));
//tsc 8.func.ts -> node 8.func.js
/*
id-> 123 name-> Jojn
id-> 111 name-> Mary
mail_id=> Marykim@daum.net
name=> Mark
Mark
mark
Tom
Mary
John
[ 'mark', 'Tom', 'Mary', 'John' ]
*/