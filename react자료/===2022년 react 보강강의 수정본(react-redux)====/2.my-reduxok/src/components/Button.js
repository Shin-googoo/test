import React, { Component } from 'react';
//1.increment와 decrement라는 action을 import
import { increment, decrement } from '../actions';

class Button extends Component {
    constructor(props) {
        super(props);
        //2.생성자에서 이벤트를 연결하는 구문작성
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    //3.+ 이벤트처리함수->action값을 dispatch시켜주는 함수
    onIncrement(event) {
        this.props.store.dispatch(increment())
    }
    //4.- 이벤트처리함수->action값을 dispatch시켜주는 함수
    onDecrement(event) {
        this.props.store.dispatch(decrement())
    }

    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        );
    }
}

export default Button;