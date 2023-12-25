import React, { Component } from 'react';
//1.화면에 출력할 컴포넌트 import해옴.
import Counter from './Counter';
import Option from './Option';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Option />
        <Button />
      </div>
    );
  }
}
export default App;