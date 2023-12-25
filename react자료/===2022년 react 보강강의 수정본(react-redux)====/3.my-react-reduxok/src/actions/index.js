//1.action의 type을 정의하여 export한다.
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

//2.increment action 정의
export function increment() {
    return {
        type: INCREMENT
    };
}
//3.decrement action 정의
export function decrement() {
    return {
        type: DECREMENT
    };
}
//4.setDiff action 정의
export function setDiff(value) {
    return {
        type: SET_DIFF,
        diff: value //계산값을 저장(증가값 또는 감소한 값)
    };              //reducer에 의해 store에 저장된다.
}