//1.컴포넌트를 작성하기위해서는 패키지 불러오기
import React from 'react'// import 클래스명 from '불러올 경로 명 및 파일명'

export default class App extends React.Component{

  constructor(props){
     super(props);
     this.state={  //외부에서 this.state.data=5;//X->setState()
       data:0
     }
     this.setNewNumber=this.setNewNumber.bind(this);
  }
  //증가
  setNewNumber(){
    if(this.state.data > 10){
      alert('더이상 증가시킬 수 없습니다.')
      return;
    }else{
     this.setState({data:this.state.data+1})
    }
  }
  setDownNumber(){
    if(this.state.data < -10){
      alert('더이상 감소시킬 수 없습니다.')
      return;
    }else{
     this.setState({data:this.state.data-1})
    }
  }
  render(){
      //화면에 출력할 수 있도록 element하는 반환
      console.log('App의 render()호출됨!')
      return(
        <div>
         <button onClick={this.setNewNumber}>증가</button>
         <button onClick={this.setDownNumber.bind(this)}>감소</button>
         <Content myNumber={this.state.data}/>
        </div>
      );
  }
}

class Content extends React.Component{

  /* 웹상에서 직접 코딩->React.createClass()
  getDefaultProps(){
    console.log(`컴포넌트트 생성 또는 부모로 속성이 전달될때 호출
                 getDefaultProps()호출됨`)
  }
  getIntialState(){ //angular->onNg()
    console.log(`this.state의 초기값 설정(getInitialState()호출됨)`)
  }
  */

  componentWillMount(){
    console.log(`컴포넌트가 DOM과 연결전에 호출됨(componentWillMount()`)
  }

  componentDidMount(){
    console.log(`컴포넌트가 DOM과 연결후에 호출됨(componentDidMount()`)
  }
  //2.업데이트 부분
  shoudComponentUpdate(newProps,nextState){
    console.log(`return false이면 render()호출이 취소 {nextState}`)
    return true; //false로 변경이 되면 아래의 수정될때 호출되는 메서드를 호출하지 못함
  }              //componentWillUpdate()와 componentDidUpdate()를 호출하지 않음

  componentWillUpdate(){
    console.log(`컴포넌트가 수정되기전에 호출됨 componentWillUpdate()호출`)
  }
  componentDidUpdate(){
    console.log(`컴포넌트가 수정후에 호출됨 componentDidUpdate()호출`)
  }
  //추가
  /*
  componetWillReceiveProps(newProps){
    console.log('newProps값이 받았을때 호출'+newPros)
  }
  */
  render(){
    console.log('Content의 render()호출됨!')
    return( //자식이 출력할때에는 최종적의 this.state.data체크
      <div>
       {this.props.myNumber < 10?
        <h3>{this.props.myNumber}</h3>:
        <h3>더 이상 값을 증가시킬수가 없다.</h3>
       }
      </div>
    );
  }
}
