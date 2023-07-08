import * as types from '../actions/ActionTypes';

const initialState = {//색상 초기화
    color: 'black'
};

const color = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_COLOR:
            return {
                color: action.color
            };
        default:
            return state;
    }
}

export default color;
