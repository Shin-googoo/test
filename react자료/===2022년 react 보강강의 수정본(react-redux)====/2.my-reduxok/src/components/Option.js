import React, { Component } from 'react';
//추가
import { setDiff } from '../actions';//setDiff를 import한다.

class Option extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) { //사용자가 값을 입력시 발생하는 이벤트핸들러
        //this.props.onChange(event.target.value);
        //1.dispatch는 setDiff라는 액션을 보내게된다. setDiff의 인수는 사용자의 입력한값
        //2.dispatch는 reducer로 action을 전달하고,reducer는 store에 state를 저장한다.
        this.props.store.dispatch(setDiff(parseInt(event.target.value)));
    }
    render() {
        return (
            <div>
                {/*<input value={this.props.diff} onChange={this.onChange} /> */}
    <input value={this.props.store.getState().counter.diff} onChange={this.onChange} />
            </div>
        );
    }
}
export default Option;
