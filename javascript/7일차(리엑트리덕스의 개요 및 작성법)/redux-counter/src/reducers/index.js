import number from './number';
import color from './color';

import {combineReducers} from 'redux';
/*  서브 리듀서들을 하나로 합침->conbineReducers를 실행->store형태
   {                          //아래와 같은 구조로 생성됨
     numberData: {
       number:0
     },
     colorData:{
       color:'black'
     }
   }
*/
const reducers = combineReducers({
  numberData:number,
  colorData:color
})

export default reducers;