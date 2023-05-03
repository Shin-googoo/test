import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  //const [x, setX] = useState(0);
  //const [y, setY] = useState(0);
  const [position, setPosition] = useState({x: 0, y: 0});
  return (
    <div 
      className='container' 
      onPoninterMove={(e)=>{
      console.log(e.clientX, e.clientY);
      //setX(e.clientX);
      //setY(e.clientY);
      //setPosition({x: e.clientX, y: e.clientY});
      // 만약 수평으로만 이동이 가능하게끔 만들고 싶다면?
      setPosition((prev) => ({...prev, x: e.clientX }))
    }}>
      <div className='pointer' 
      style={{transform: `translate(${positon.x}px, ${position.y}px)`}}/>
    </div>
  );
}
