import React, { Component } from 'react';
//1.connect함수를 import함
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Button extends Component {
    render() {
        return (
            <div>
                {/*2. + 버튼 클릭시 props.onIncrement를 실행 onIncrement함수는 아래선언
                      - 버튼 클릭시 props.onDecrement를 실행 onDecrement함수는 아래선언
                   */}
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        );
    }
}
//3.props.함수를 실행 할 경우 =>dispatch 할 action을 정의하는 코드
let mapDispatchToProps = (dispatch) => {
    return {
        //props.onIncrement를 실행 할 경우 increment action을 dispatch 한다.
        //props.onDecrement를 실행 할 경우 decrement action을 dispatch 한다.
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    }
}
//4.props를 store의 state에 매칭 시켜주는 connect 함수를 실행 
// 첫번째 매개변수는 store의 state를 props로 매핑 해주는 부분이 없는 경우
// 함수호출하는 부분만 존재한다.
Button = connect(undefined, mapDispatchToProps)(Button);

export default Button;
