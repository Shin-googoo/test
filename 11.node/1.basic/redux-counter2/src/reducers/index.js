import * as types from '../actions/ActionTypes';

//초기 상태를 정의 합니다.

const initialState={
  counters:[
	{
       color:'black',
	   number:0
	}
   ]
};

 function counter(state=initialState,action){

  //레퍼런스 생성
  const {counters} = state;//외부에서 넘어노 state값을 counters배열에 저장
   switch(action.type){
       case types.CREATE:
		   return{
		    counters:[
             ...counters, //전개연산자 사용
		   {
               color:action.color, //전달된 색상저장
			   number:0
		   }
           ]
	   };
		 case types.REMOVE:
			 return {
            counters:counters.slice(0,counters.length-1)
       };
         case types.INCREMENT: //증가
		     return{
                counters:[
                   ...counters.slice(0,action.index),//선택한 인덱스의 전 아이템들
				 {
                    ...counters[action.index], //기존객체에
					number:counters[action.index].number+1 //새 number값 덮어쓰기
				 },
				    ...counters.slice(action.index+1,counters.length)//선택한 인덱스의 다음 아이템들
				]
			 };
		 case types.DECREMENT: //감소
		     return{
                counters:[
                   ...counters.slice(0,action.index),//선택한 인덱스의 전 아이템들
				 {
                    ...counters[action.index], //기존객체에
					number:counters[action.index].number-1 //새 number값 덮어쓰기
				 },
				    ...counters.slice(action.index+1,counters.length)//선택한 인덱스의 다음 아이템들
				]
			 }; 
		 case types.SET_COLOR: //색깔함수
		     return{
                counters:[
                   ...counters.slice(0,action.index),//선택한 인덱스의 전 아이템들
				 {
                    ...counters[action.index], //기존객체에
					color:action.color
				 },
				    ...counters.slice(action.index+1,counters.length)//선택한 인덱스의 다음 아이템들
				]
			 }; 
		  default:
			  return state;
   }//switch
 }//counter function

 export default counter;