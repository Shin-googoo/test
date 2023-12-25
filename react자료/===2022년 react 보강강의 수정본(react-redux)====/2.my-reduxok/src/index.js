import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//1.createStore import
import { createStore } from 'redux';

//2.reducer를 import
import counterApp from './reducers';

//3.createStore를 이용해서 store를 생성(reducer를 매개변수로 전달)
const store = createStore(counterApp);

const render = () => {
  /* App컴포넌트에게 store값을 전달  */
  ReactDOM.render(
    <App store={store} />,  
    document.getElementById('root')
  );
}
/*
store.subscribe(LISTENER) 형태입니다. 
dispatch 메소드가 실행되면 (Button 컴포넌트 또는 Option 컴포넌트에서 dispatch 메소드가 
실행 되면) LISTENER 함수가 실행 됩니다. 
그렇기 때문에, 데이터가 변경 될 때 마다 다시 랜더링하게 됩니다.
*/
store.subscribe(render);//자식컴포넌트에서 이벤트발생 render함수가 호출->데이터변경 반영
render();