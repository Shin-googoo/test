
import React from 'react';//react.js(1)

export default class ContactCreate extends React.Component{
  //자식컴포넌트->데이터를 입력->부모에게 전달
  constructor(props){
    super(props)
    this.state={
      name:'',
      phone:''//, addr:'',sung:'',,,
    }
    //생성자에서 함수호출
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  //추가
  handleChange(e){//event.target=>이벤트처리객체
    let nextState = {}//한개이상이기에 빈객체를 먼저생성
    //name:연습     name    : 연습
    nextState[e.target.name]=e.target.value;
    this.setState(nextState)//수정하기위해서 setState메서드 호출한다.
  }
  //추가2
  handleClick(){
    const contact={
      name:this.state.name,  //이름
      phone:this.state.phone  //전화입력
    }
    //부모(Contact.js의 ContactCreate()호출)
    this.props.onCreate(contact);//부모함수호출
    this.setState({
      name:'',
      phone:''
    })
  }
  render(){
    return(
       /*
       <div>
            <p>
    <input type="text" name="name" placeholder="이름 입력"
           value={this.state.name}
           onChange={this.handleChange}/>
    <input type="text" name="phone" placeholder="전번 입력"
           value={this.state.phone} 
           onChange={this.handleChange}/>
            </p>
            <button onClick={this.handleClick}>Create</button>
           </div> */
           
           <div class="container">
            <div class="col-sm-6 col-md-offset-3">
                 {/* <form role="form">  */}
                    <div class="form-group">
                        <label for="name">이름</label>
                        <input type="text" class="form-control" id="name" 
                               name="name" placeholder="이름을 입력해 주세요"
                               value={this.state.name}
                               onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="phone">전번</label>
                        <input type="email" class="form-control" id="phone" 
                               name="phone" placeholder="전화번호를 입력해주세요" 
                               value={this.state.phone} 
                               onChange={this.handleChange}/>
                    </div>
                    <div class="form-group text-center">
                    <button onClick={this.handleClick} id="join-submit" class="btn btn-primary">
                            등록
                        </button>
                    </div>
                {/* </form> */}
            </div>
        </div>
        )
  }
}

