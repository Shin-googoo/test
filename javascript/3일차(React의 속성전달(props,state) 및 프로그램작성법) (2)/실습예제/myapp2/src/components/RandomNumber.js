
import React from 'react';

export default class RandomNumber extends React.Component{

    constructor(props){
        super(props);
        //setState와 연결된 이벤트처리함수는 연결코딩 반드시 필요
        this.updateNumber=this.updateNumber.bind(this);
    }
    updateNumber(){ //자식클래스의 함수호출
       //방금 부모로부터 전달받은 함수를 호출하는 구문을 사용
       let value=Math.round(Math.random()*100);//0~99
       this.props.onUpdate(value);//부모의 정의된 메서드호출(랜덤값전달)
       //this.props.전달받은 매개변수(=부모클래스이 이벤트함수명)(랜덤값전달)
    }
    render(){
        return(<div>
          <h1>랜덤값:{this.props.number}</h1>
          <button onClick={this.updateNumber}>랜덤값 출력</button>
          <button onClick={this.props.onTest}>매개변수 없는 부모함수호출!</button>
        </div>)
    }
}