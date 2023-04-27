//1.action에서 정의한 action의 type들을 import한다.
import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';

//2.reducer가 여러개 있을때 하나로 합쳐주는 메서드
import { combineReducers } from 'redux'; 

const counterInitialState = { //state값 초기값 설정
    value: 0,
    diff: 1
};
//3.counter의 reducer(1.첫번째 매개변수가 못 받으면 counterInitialSate 초기화 설정)
const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        //action의 type에 따라 reducer가 동작하는 부분
        case INCREMENT://Object.assign()->state를 변경시키지 않고 복사한후,
                       //복사한 객체를 수정하여 리턴합니다.
                       //Redux에서는 state는 읽기전용이어야 합니다.(Redux의 3가지원칙)
            return Object.assign({}, state, {
                value: state.value + state.diff
            });

        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });

        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });

        default:
            return state;
    }
}
//4.작성한 reducer를 하나로 합쳐준다.
const counterApp = combineReducers({ 
    counter //,다른 reducer가 있는경우 추가가능하다.
});

export default counterApp;//reducer를 export 한다.
