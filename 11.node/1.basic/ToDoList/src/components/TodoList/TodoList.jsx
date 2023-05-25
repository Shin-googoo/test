import React, {useEffect, useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
  //기존에 작성한 장보기, 공부하기가 아닌 로컬스토리지에서 가져오게 변경, 함수 재실행을 막는다.

  const handleAdd = (todo) => setTodos([...todos, todo]); 
  //기존의 todos를 하나씩 풀어서 새로운 todo 넣어준다.

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => 
    setTodos(todos.filter((t) => t.id !== deleted.id)); 

    useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo 
            key={item.id} 
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          /> 
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}
function readTodosFromLocalStorage() {
  console.log('readTodosFromLocalStorage');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
