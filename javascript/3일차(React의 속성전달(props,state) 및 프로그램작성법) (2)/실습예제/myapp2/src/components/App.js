
//모듈을 불러오는 방법 require('불러올 모듈명')->es5->es6문법 import로 불러온다.
//import {클래스명,,,} from '@angular/core (or forms,common/http)' or'경로포함 모듈명'
//import 불러올 클래스명 from '경로포함해서 불러올 모듈명'
import React from 'react';//react.js(1)
//추가
import './App.css';

//class 컴포넌트명 extends Component
class App extends React.Component{
  //render()화면에 디자인에 관련된 함수
  sayHello(){
    alert("Hello React!!")
  }
  render(){
    let text="반드시 하나의 태그로 만들어서 출력해야 됩니다." //let 변수명
    let pStyle={    /*
                      스타일을 적용하기위한 속성명:속성값,ngIf->if조건식 사용X->삼항연산자사용
                     */
      color:'aqua',
      backgroundColor:'black'
    }
    return(<div>
              {/* return (화면에 보여주는 구문을 사용) */}
              {
                //여기 한줄 주석 연습입니다.
              }
           <h1 className="App-title">두번째 방식으로 react예제를 작성중입니다.!!!</h1>
           <h2>Welcome To {text}!!</h2>
           <p style={pStyle}>스타일 적용연습1</p>
           <p style={pStyle}>{1===1?'True':'False'}</p>
           { /* 매개변수를 전달받은 경우  */}
           <h1>전달받은 매개변수명:{this.props.headerTitle}</h1>
           <button onClick={this.sayHello}>Click me</button>
           </div>
           )
  }
}
//export default 배포시킬 컴포넌트명(=클래스명)
export default App;//다른 모듈에서 불러다 사용 할 수 있도록 배포시키는 역할
