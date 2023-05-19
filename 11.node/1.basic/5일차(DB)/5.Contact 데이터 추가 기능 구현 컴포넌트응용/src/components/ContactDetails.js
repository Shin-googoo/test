
import React from 'react';//react.js(1)

export default class ContactDetails extends React.Component{
  
  render(){
      //항목을 선택유무에 따라서 다른 디자인의 화면을 보여줘야된다.
    const details=(<div>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.phone}</p>
    </div>)
    const blank=(<div>Not Selected!!!</div>)
    return(<div className="text-center text-success">
             {this.props.isSelected?details:blank}
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
    }
}


