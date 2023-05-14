//react모듈로부터 컴포넌트,리액트정보를 불러오는 구문
import React, { Component } from 'react';
//추가
import './App.css';
//import React from 'react';  //React.Component로 코딩할것.

//형식) class 컴포넌트명 extends Component
class App extends Component {
  /* 화면에 출력할때 사용하는 함수  */
  sayHello(){
    alert("Hello React!!!")
  }
  render() {
    let text="반드시 하나의 태그로 만들어서 출력해야한다."//let 변수명
    let pStyle={
      color:'aqua',
      backgroundColor:'black'
    }
    return (
      <div>
        {/* return (화면에 보여주는 구문을 사용) */}
        {
           //여기 한줄 주석 연습입니다.
        }
        <h1 className="App-title">두번째 방식으로 react예제를 작성중!!!</h1>
        <h2>Welcome To {text}</h2>
        <p style={pStyle}>스타일 적용연습1</p>
        <p style={pStyle}>{1===1?'True':'False'}</p>
        <button onClick={this.sayHello}>click me</button>
      </div>
    );
  }
}
//export default 외부에 공유시킬 클래스명;
export default App;