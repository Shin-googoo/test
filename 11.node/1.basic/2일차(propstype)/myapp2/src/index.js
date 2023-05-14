import React from 'react';
import ReactDOM from 'react-dom';//화면에 출력할때 필요(모듈)
import './index.css';
//App 부모 컴포넌트만 새로 불러올 경로를 지정
import App from './components/App';
//추가 중첩컴포넌트
import App2 from './components/App2';
//---------------------------------------
import reportWebVitals from './reportWebVitals';

//동적으로 웹상엣 출력시켜주는 문장
//1.부착시킬 컴포넌트명 2.부착시키는 위치(public/index.html)
ReactDOM.render(<App />,document.getElementById('root'))

//새로추가
//형식 <자식태그 매개변수(속성명)=값 매개변수2=값 ,,,>
const rootElement2=document.getElementById('root2')
/* (1) 자식에게 값을 전달한 경우
ReactDOM.render(<App2 headerTitle="전달연습!" 
                      contentTitle="전달연습2" 
                      contentBody="부모에서 자식에게 전달" />,rootElement2);
                      */
//(2) 자식에게 값을 전달X
ReactDOM.render(<App2 />,document.getElementById('root'))                     
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
