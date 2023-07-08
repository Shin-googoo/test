import React from 'react';
//추가
import Counter from './Counter';//카운더 컴포넌트 불러옴
import PropTypes from 'prop-types';//전달받은 값을 체크

import './CounterList.css'; //스타일 적용

//숫자,색상값,증가,감소,색상변경함수로 props로 전달받음
const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
   const counterList=counters.map(//counters배열을 map함수로 분리해서 다시 리턴받음
     (counter,i)=>(
        <Counter
		      key={i} /*key는 배열의 index로 설정 */
              index={i} /* index값도 컴포넌트에 props로 전달해줌*/
	        {...counter} /*color값과 number값을 한꺼번에 풀어서 각ㄱ값을 한꺼번에 전달*/
             onIncrement={onIncrement}
			 onDecrement={onDecrement}
			 onSetColor={onSetColor} />
		  )
	  );
  return (
    <div className="CounterList"> 
	     {counterList}
    </div>
  );
};
//props의 전달받는 매개변수의 자료형을 설정
CounterList.propTypes = {
  counters:PropTypes.arrayOf(PropTypes.shape({color:PropTypes.string,number:PropTypes.number})),
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};
//props의 기본설정값
CounterList.defaultProps = {
   counters:[]
};

export default CounterList;
