import React, { Component } from 'react';

export default class RandomNumber extends Component {
    constructor(props){
        super(props)
     //추가
     this.updateNumber=this.updateNumber.bind(this);
    }
    /*
     매개변수가 있는 부모의 함수는 자식클래스에서 따로 함수를
     만들어서 호출->매개변수를 넣어주면서 호출해야되기때문에
    */
    updateNumber(){
      let value=Math.round(Math.random()*100)//0~99
      //부모의 정의된 메서드호출(랜덤값전달)
      this.props.onUpdate(value)
      //this.props.전달받은매개변수(=부모클래스의 함수명)(값)
    }
    
    render() {
        return (
            <div>
              <h1>랜덤값:{this.props.number}</h1>
            {/*onUpdate={this.updateValue} */}
            <button onClick={this.updateNumber}>랜덤값 출력</button>
            {/* onTest={this.test} */}
            <button onClick={this.props.onTest}>매개변수 없는 부모함수호출!</button>
            </div>

        );
    }
}

//export default RandomNumber;