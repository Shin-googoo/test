import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/App';
//추가
import App2 from './components/App2';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App headerTitle="전달연습1" />
  </React.StrictMode>,
  document.getElementById('root')
);
//새로 추가
const rootElement2=document.getElementById('root2')
ReactDOM.render(<App2 contentTitle="전달연습2" 
contentBody="부모에서 자식에게 전달함" />,rootElement2);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
