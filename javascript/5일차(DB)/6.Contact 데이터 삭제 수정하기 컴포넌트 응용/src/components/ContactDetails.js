
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
      //항목을 선택유무에 따라서 다른 디자인의 화면을 보여줘야된다.
    const details=(<div>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.phone}</p>
    </div>)
    //추가
    //const view=this.state.isEdit?(<div></div>):details;
    //추가
    const edit=(
           <div>
            <div class="col-sm-6 col-md-offset-3">
            <div class="form-group">
                <label for="name">이름</label>
                <input type="text" class="form-control" id="name" 
                       name="name" placeholder="이름을 입력해 주세요" value={this.state.name}
                       onChange={this.handleChange}/>
            </div>
            <div class="form-group">
                <label for="phone">전번</label>
                <input type="email" class="form-control" id="phone" 
                       name="phone" placeholder="전화번호를 입력해주세요"  value={this.state.phone} 
                       onChange={this.handleChange}/>
            </div>
            </div>
          </div>
          );
    //-----------------------------------------------------
    const view=this.state.isEdit?edit:details;
    const blank=(<div>Not Selected!!!</div>)
    return(<div className="text-center text-success">
             {this.props.isSelected?view:blank}
             <p>
             <button onClick={this.handleToggle} class="btn btn-info">
                {this.state.isEdit?'확인':'수정'}
             </button>
             <button onClick={this.props.onRemove} class="btn btn-danger">삭제</button>
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
    onRemove:()=>{console.error('onRemove not defined!');},
    //추가
    onEdit:()=>{console.error('onEdit not defined!');}
}
//추가안해도 된다.
/*
ContactDetails.propTypes={
  contact:React.PropTypes.object,
  onRemove:React.PropTypes.func,
  onEdit:React.PropTypes.func
}
*/

