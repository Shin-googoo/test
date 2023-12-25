import React, { Component } from 'react';
//모듈화 시킨 다른 컴포넌트를 모두 불러오기 import
import Counter from './Counter';
import Option from './Option';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: 0,
      diff: 1
    };
    this.onChange = this.onChange.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onChange(diff) { //증가값과 감소값의 차이를 입력받아 처리해주는 함수
    this.setState({
      diff: diff
    });
  }

  onIncrement() { //증가값(전의 값과 차이를 입력받아 처리)
    this.setState(prevState => ({
      value: prevState.value + Number(this.state.diff)
    }));
  }

  onDecrement() { //감소값(전의 값과 차이를 입력받아 처리)
    this.setState(prevState => ({
      value: prevState.value - Number(this.state.diff)
    }));
  }

  render() {
    return (
      <div> {/* 자식컴포넌트에게 매개변수값(props)을 전달 */}
        <Counter value={this.state.value} />
        <Option diff={this.state.diff} onChange={this.onChange} />
        <Button onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
      </div>
    );
  }
}

export default App;
