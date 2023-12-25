import React, { Component } from 'react';
//1.화면에 출력할 컴포넌트 import해옴.
import Counter from './Counter';
import Option from './Option';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div>
        {/*  각각의 컴포넌트는 store를 사용하고 있기때문에 store를 전달해야한다.  */}
        <Counter store={this.props.store} />
        <Option store={this.props.store} />
        <Button store={this.props.store} />
      </div>
    );
  }
}
export default App;