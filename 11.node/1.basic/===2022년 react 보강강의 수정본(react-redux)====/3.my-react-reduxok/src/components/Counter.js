import React, { Component } from 'react';
//1.react-redux의 connect함수를 import한다.
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
            {/* store을 통해 state를 가져올 필요 없이 props.value로 store 값을
                가져 올 수 있게 됩니다.=> connect 메소드때문
              */}
                <h1>Value : {this.props.value}</h1>
            </div>
        );
    }
}
//store의 state를 props로 매핑 해주는 부분
let mapStateToProps = (state) => { /*state 값을 받아서 저장 */
    return {
        value: state.counter.value
    }
}
/* connect는 컴포넌트를 store에 연결시켜주는 역할을 한다.
   컴포넌트클래스의 props값을 store에 연결시켜주는 함수를 리턴해준다.
   리턴해주는 함수의 매개변수로 컴포넌트를 넣어주면 기존의 내용이 변경된
   컴포넌트가 아닌 새로운 컴포넌트를 리턴해준다.
 */
Counter = connect(mapStateToProps)(Counter);

export default Counter;//새로운 컴포넌트를 외부에 공개


