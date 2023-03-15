import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//화면에 출력할 컴포넌트의 정보(변경)
import App from './components/App';
//추가
import App2 from './components/App2';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
/* before
root2.render(
     /* <자식태그명 매개변수명="전달할값"    />      
    <App2 headerTitle="전달연습!" 
          contentTitle="전달연습2" 
          contentBody="부모에서 자식에게 전달" />
);*/
// after
root2.render(
 <App2 />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
