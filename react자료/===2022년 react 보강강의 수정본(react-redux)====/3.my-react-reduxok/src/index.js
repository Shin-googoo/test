import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
//1.react-redux의 Provider클래스를 import 한다.
import { Provider  } from 'react-redux';
import counterApp from './reducers';
const store = createStore(counterApp);

ReactDOM.render(
  /*
   Provider 컴포넌트 안에 App 컴포넌트를 배치한다. Provider 컴포넌트에만 store을 지정함
  */
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);