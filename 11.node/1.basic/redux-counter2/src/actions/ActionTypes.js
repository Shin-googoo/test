/* 
 Action의 종류들을 선언합니다.
 앞에 export를 붙이면 나중에 이것들을 불러올 때, 
 import * as types from './ActionTypes'를 할 수 있어요.->types라는 이름으로 불러온다.
*/

export const INCREMENT = 'INCREMENT'; //증가
export const DECREMENT = 'DECREMENT'; //감소
export const SET_COLOR = 'SET_COLOR'; //선택한 색깔
 
export const CREATE = 'CREATE'; //생성
export const REMOVE = 'REMOVE'; //삭제
