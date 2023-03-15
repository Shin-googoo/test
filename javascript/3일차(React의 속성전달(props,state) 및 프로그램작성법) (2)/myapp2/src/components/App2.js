import React, { Component } from 'react';
//추가->자식컴포넌트의 모듈을 불러오는  구문
import Header from './Header';
import Content from './Content';
//추가2
import RandomNumber from './RandomNumber';

class App2 extends Component {
    //추가3
    constructor(props){
        super(props);
        //초기 state설정
        this.state={
            value:Math.round(Math.random()*100)//0~99
        }
      //자동으로 연결X ->수동으로 연결하는 코드가 필요
      //this.호출할함수명=this.호출할함수명.bind(this)
      this.updateValue=this.updateValue.bind(this);
    }
    //state를 변경할때 setState({key:value})메서드 사용
    updateValue(randomValue){
        this.setState({
            value:randomValue
        })
    }
    //매개변수가 없는 이벤트처리함수
    test(){
        alert('매개변수가 없는 부모함수 호출됨!!')
    }
    render() {
        /* 자식 {this.props.전달받은 속성명(=매개변수명)}      */
        return (
            <div>
                {/*
               <h1>{this.props.headerTitle}</h1>
               <h1>{this.props.contentTitle}</h1>
               <h1>{this.props.contentBody}</h1>*/}
               <h1>App2의 컴포넌트</h1>
                App2 출력:{this.state.value}
               <Header title={this.props.headerTitle} />
               <Content title={this.props.contentTitle}
                        body={this.props.contentBody} />
               <RandomNumber number={this.state.value} 
                             onUpdate={this.updateValue}
                             onTest={this.test} /> 
            </div>
        );
    }
}
/*
모듈화->자식 컴포넌트를 따로 파일로 만들어서 불러오는 방식
 Header.js
class Header extends Component{
    render() {
        return (
            <div>
               <h1>Header</h1> 
               <h1>중첩</h1>
            </div>
        );
    }
}
Content.js
class Content extends Component{
    render() {
        return (
            <div>
               <h2>Cotent</h2> 
               <p>Hey!!</p>
            </div>
        );
    }
}
*/
/*
 자식입장에서 부모한테 못받았기에 대신 디폴트값을 설정
 형식) 자식클래스명.defaultProps={
     전달받을 매개변수명:다른값(문자,숫자,함수),,,
 }
*/
App2.defaultProps={
    headerTitle:'기본값 header',
    //contentTitle:'기본값 title',
    contentTitle:5,
    //contentBody:'기본값 body'
    contentBody:undefined
}

export default App2;