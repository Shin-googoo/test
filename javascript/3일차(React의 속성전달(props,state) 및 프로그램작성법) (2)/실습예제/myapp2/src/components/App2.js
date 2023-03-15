
import React from 'react';//리액트(컴포넌트)
//따로 파일로 독립적으로 분리->import구문으로 불러오기
import Header from './Header';//자기 파일내부에 존재하지 않은 외부의 클래스를 불러올때 사용
import Content from './Content';
import RandomNumber from './RandomNumber';//추가

class App2 extends React.Component {
    //추가
    constructor(props){
        super(props);
        //초기 state설정
        this.state={
            value:Math.round(Math.random()*100)//0~99
        }
        //추가 연결
        this.updateValue=this.updateValue.bind(this);
    }
    //state를 변경할때 setState({key:value})메서드 사용
    updateValue(randomValue){ //매개변수가 있는 이벤트 처리함수
        this.setState({
            value:randomValue
        });
    }
    //매개변수가 없는 이벤트처리함수
    test(){
        alert('매개변수가 없는 부모함수 호출됨!')
    }
    render(){
        return(
            <div>
                <h1>컴포넌트 중첩 연습입니다.{this.props.headerTitle}</h1>
                <h1>{this.props.contentTitle}</h1>
                <h1>{this.props.contentBody}</h1>
               { /*
                <h1>Header</h1>
                <h1>Content</h1>
               <h2>컴포넌트 중첩2</h2> */}
               <Header />
               <Content title={this.props.contentTitle}
                        body={this.props.contentBody} />
               <RandomNumber number={this.state.value}
                             onUpdate={this.updateValue}
                             onTest={this.test}/>
            </div>
        )
    }
}
//형식 자식입장에서 만약에 props값을 못받았다면
//형식) 자식클래스명.defaultProps={매개변수명:기본값,~}
App2.defaultProps={
    headerTitle:'기본값 header',
    contentTitle:'기본값 contentTitle',
    contentBody:'기본값 contentBody'
}

//추가(1)
/*
class Header extends React.Component{
    render(){
        return(<h1>Header</h1>)
    }
}
class Content extends React.Component{
    render(){
        return(
         <div>
            <h1>Content</h1>
            <h2>컴포넌트 중첩2</h2>
        </div>)
    }
}
*/
export default App2;