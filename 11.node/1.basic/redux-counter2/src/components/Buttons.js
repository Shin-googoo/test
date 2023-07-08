import React from 'react';
import PropTypes from 'prop-types';//전달받을 매개변수의 자료형 체크

import './Buttons.css';//버튼의 스타일 적용시키기위해서 불러옴

const Buttons=({onCreate,onRemove})=>{
   return (
	   <div className="Buttons">
	     <div className="btn add" onClick={onCreate}>생성</div>
         <div className="btn remove" onClick={onRemove}>제거</div>
        </div>
   );
}
//버튼이 전달받을 매개변수의 자료형 선언(함수명)
 Buttons.propTypes={
    onCreate: PropTypes.func, //생성
	onRemove:PropTypes.func //삭제
};

Buttons.defaultProps={//생성,삭제함수명을 전달받지 못했을때의
                                 //에러메세지 출력
	onCreate:()=>console.warn('onCreate not defined'),
    onRemove:()=>console.warn('onRemove not defined')
};

export default Buttons;