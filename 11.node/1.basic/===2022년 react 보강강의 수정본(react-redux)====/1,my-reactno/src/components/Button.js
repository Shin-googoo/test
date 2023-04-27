import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement(event) {
        this.props.onIncrement();//부모로부터 전달받은 함수호출
    }

    onDecrement(event) {
        this.props.onDecrement();//부모로부터 전달받은 함수호출
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