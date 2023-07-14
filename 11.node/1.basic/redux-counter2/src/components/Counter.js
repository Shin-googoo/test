import React from 'react';
import PropTypes from 'prop-types';//전달받은 값을 체크
import './Counter.css'; //스타일 적용

//숫자,색상값,증가,감소,색상변경함수로 props로 전달받음
const Counter = ({number, color, index,onIncrement, onDecrement, onSetColor}) => {
  return (
    <div
      className="Counter"
      onClick={()=>onIncrement(index)}
      onContextMenu={(e) => { /* onContextMenu는 마우스 오른쪽 버튼을 눌렀을때 메뉴열리는 이벤트  */
      e.preventDefault(); //메뉴가 열리는것을 방지하는 코드 */
      onDecrement(index);
    }}
      onDoubleClick={()=>onSetColor(index)}
      style={{
      backgroundColor: color
    }}>
      {number}
    </div>
  );
};
//props의 전달받는 매개변수의 자료형을 설정
Counter.propTypes = {
  index:PropTypes.number, /* 카운터를 구분하는 인덱스전달 자료형*/
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};
//props의 기본설정값
Counter.defaultProps = {
  index:0, /* index값 초기값 설정*/
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;