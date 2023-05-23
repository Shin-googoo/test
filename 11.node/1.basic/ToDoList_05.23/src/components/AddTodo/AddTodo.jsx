import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({onAdd}) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 초기화를 막아주고
    if(text.trim().length === 0) {
      return; //사용자가 아무 것도 입력하지 않으면 추가X
    }
    onAdd({ id: 'uuidv4()', text, status: 'active' });
    setText(''); //검색창에 추가시킨 문자 초기화
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
      className={styles.input}
      type="text" 
      placeholder='Add Todo' 
      value={text}
      onChange={handleChange} 
      // 텍스트가 변경될때마다 handleChange 호출
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}

