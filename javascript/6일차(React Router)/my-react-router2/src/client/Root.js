import React, { Component } from 'react';
//추가
import {BrowserRouter} from 'react-router-dom';

//import App from '../shared/App';
import App from 'shared/App';
//import Menu2 from '../components/Menu2';
import Menu2 from 'components/Menu2';

//모든 요청은 기본적으로 App컴포넌트를 거쳐서 이동할 수 있도록 설정
/*
const Root=()=>{
   return( <BrowserRouter>
           <App />
         </BrowserRouter>
         )
}*/

const Root=()=>(
  <BrowserRouter>
        <div>
          <Menu2 />
          <App />
        </div>
  </BrowserRouter>
)

export default Root;