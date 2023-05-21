import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//추가(경로 변경)
import App from './containers/App';

//추가 (리덕스 관련 불러오기)
import {createStore} from 'redux';
import reducers from './reducers';
//추가2
import {Provider} from 'react-redux';

//스토어 생성
const store = createStore(reducers,window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
       <Provider store={store}>
        <App />
       </Provider>,
 document.getElementById('root'));

