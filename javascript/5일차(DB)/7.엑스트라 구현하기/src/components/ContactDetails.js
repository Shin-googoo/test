/* ContactDetails.js 
    글상세보기->삭제,수정
*/
import React from 'react';//react.js(1)

export default class ContactDetails extends React.Component{

  //Contact.js의 배열의 내용을 변경<-handleChange()<-변경된 내용
  constructor(props){
    super(props)
    //추가
    this.state={
      isEdit:false, /*편집상태 유무체크 */
      name:'',
      phone:'' //,addr,sung,~
    }
    this.handleToggle=this.handleToggle.bind(this)
    //데이터 수정하기위해서 필요
    this.handleChange=this.handleChange.bind(this)
    //추가2
    this.handleEdit=this.handleEdit.bind(this);
  }
  handleEdit(){
    //this.props.onEdit=>전달받은 부모의 함수명
    this.props.onEdit(this.state.name,this.state.phone)
  }
  //편집상태체크 함수
  handleToggle(){
    //추가->inpubox가 나오면서 편집할 데이터를 화면에 출력
    if(!this.state.isEdit){//편집상태라면
      this.setState({
        name:this.props.contact.name, //부모의 값을 저장
        phone:this.props.contact.phone //자식의 inputbox와 연결
      })
    }else{//false->OK버튼을 누른경우
      this.handleEdit()
    }
    //------------------------------------
    this.setState({
      isEdit:!this.state.isEdit
    })
    console.log('현재편집상태=>',!this.state.isEdit)
  }
  //inputbox에 데이터를 수정할 수 있도록 커서넣어주기위해서 handleChange
  handleChange(e){ //e.target=>현재 편집중인 inputbox을 의미
    let nextState={} //비어있는 객체생성
    //{name:'홍길동',phone:'02-123-0987'}
    nextState[e.target.name]=e.target.value
    this.setState(nextState);
  }
  //밖에 함수선언=>호출할때 반드시 {this.호출할 함수명}
  render(){
    //안쪽에 화살표함수로 호출 ->this생략가능 {호출할 함수명}
    //항목을 선택유무에 따라서 다른 디자인의 화면을 보여줘야된다.
    const details=(<div>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.phone}</p>
    </div>)
    //추가 =>편집상태(편집이 가능하게 화면전환),있는 그대로 출력(details)
    //const view=this.state.isEdit?(<div></div>):details 테스트용
    const edit=(
      <div>
      <p>
    <input type="text" name="name" placeholder="이름 입력"
           value={this.state.name}
           onChange={this.handleChange}/>
    <input type="text" name="phone" placeholder="전번 입력"
           value={this.state.phone} 
           onChange={this.handleChange}/>
      </p>
     </div>
    )
    //추가1(항목을 선택이 된상태에서 편집버튼을 누른경우)
    const view=this.state.isEdit?edit:details;//편집상태OK/ X
    const blank=(<div>Not Selected!</div>)
    
    return(<div> {/* 1.선택되면->view->2.편집유무 
                     details->view (추가2)*/}
             {this.props.isSelected?view:blank}
            <p>
            <button onClick={this.handleToggle}>
              {this.state.isEdit?'OK':'Edit'} {/* 버튼이른 변경*/}
            </button>
            <button onClick={this.props.onRemove}>Remove</button>
            </p>
           </div>
           )
  }
}
//추가->처음에는 선택을 할 수 없기때문에 에러발생=>화면에 출력X
/*
  String pageNum=request.getParameter("pageNum");
  if(pageNum==null)  pageNum="1"->1
*/
ContactDetails.defaultProps={
    contact:{
        name:'',
        phone:''//,addr:'',sung:'',~
    },
    onRemove:()=>{console.log('onRemove 매개변수가 전달X')}
    //매개변수(함수명):익명함수형태(화살표함수를 이용해서 문제점출력)
}


