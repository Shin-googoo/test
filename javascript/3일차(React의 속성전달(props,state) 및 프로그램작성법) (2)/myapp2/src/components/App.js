//import React, { Component } from 'react';
import React from 'react';
//추가 외부의 css파일 불러오기
import './App.css';
//React->Component=>불러오는 방식에 따라서 코딩이 변동

class App extends React.Component {
  /*
  클래스 내부에 선언
  */
  sayHello(){
    alert("Hello React!!")
  }
  render() {
    let text="반드시 하나의 태그로 만들어서 출력해야한다."
    let pStyle={
      color:'aqua',
      backgroundColor:'black'
    }
    //return 구문 내부에서는 if사용X=>삼항연산자
    return (
      <div>
        {/* 화면에 보여주는 구문 */}
        {
           //여기 한줄주석 연습입니다.
        }
        <h1 className="App-title">두번째 방식으로 react예제를 작성중!!!</h1>
        <h2>Welcome To {text}</h2>
        <p style={pStyle}>스타일 적용연습1</p>
        <p style={pStyle}>{1===2?'True':'False'}</p>
        <button onClick={this.sayHello}>click me</button>
      </div>
    );
  }
}

export default App;