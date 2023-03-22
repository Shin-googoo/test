import React, { useState } from 'react';

const Counter = () => {
    //const value=0 //const setValue=0 //배열로 반환
    const [value, setValue] = useState(0);//1.상태값,2.상태설정
    return (
      <div>
        <p>
          현재 카운터 값은 <b>{value}</b> 입니다.
        </p>
        <button onClick={() => setValue(value + 1)}>+1</button>
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
    );
  };
  export default Counter;