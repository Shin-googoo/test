import React, { Component } from 'react';
//1.connect함수를 react-redux에서 import한다.
import { connect } from 'react-redux';
import { setDiff } from '../actions';

class Option extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        //2.사용자로부터 값을 입력을 받을때 onUpdateDiff()호출한다.
        // onUpdateDiff()는 클래스 아래에 따로 선언
        this.props.onUpdateDiff(parseInt(event.target.value));
    }
    render() {
        return (
            <div>
                {/* 3.diff값을 출력하는데 이 값은 바로 아래 mapStateToProps에서 처리  */}
                <input value={this.props.diff} onChange={this.onChange} />
            </div>
        );
    }
}
//4.store.state를 prop로 매핑하는 코드
let mapStateToProps = (state) => {
    return {
        diff: state.counter.diff
    }
}
//5.props.onUpdateDiff를 실행 할 경우 =>dispatch 할 action을 정의하는 코드
let mapDispatchToProps = (dispatch) =>{
    return {
        onUpdateDiff: (value) => dispatch(setDiff(value))
    };
}
//6.mapStateToProps와 mapDispatchToProps에서 작성한 내용을 적용하는 connect 메소드를 호출
//  매개변수로 Option을 전달해서 새로운 Option을 리턴받아 배포
Option = connect(mapStateToProps, mapDispatchToProps)(Option);

export default Option;

