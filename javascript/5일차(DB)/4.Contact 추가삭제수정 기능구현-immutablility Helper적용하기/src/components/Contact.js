//전화번호부 목록,검색목적
import React from 'react';
//추가
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';

//추가(배열의 추가,수정,삭제)
import update from 'react-addons-update';

class Contact extends React.Component{
  //1.데이터관리(추가,수정,삭제,조회)->생성자를 통해서 초기화
  constructor(props){
      super(props);
      this.state={
        //추가
        keyword:'', /* 실시간으로 입력할 데이터를 저장할 속성명   */
        selectedKey:-1, /* 어떤항목을 자세히 보길원하는지 체크    */
        //(2)배열의 초기화
          contactData:[
            //{name:'홍길동',phone:'010-123-0987',addr:'서울시',sung:'남',,,},
            {name:'홍길동',phone:'010-123-0987'},
            {name:'테스트',phone:'010-666-8888'},
            {name:'임  시',phone:'010-444-0987'},
            {name:'임 시2',phone:'010-123-9999'},
            {name:'테스트김',phone:'010-123-1111'},
            {name:'이현우',phone:'010-888-2222'}
          ]
      }
      //이벤트 연결구문 작성
      this.handleChange=this.handleChange.bind(this);
      this.handleClick=this.handleClick.bind(this);
      //추가
      this.handleCreate=this.handleCreate.bind(this);
      this.handleEdit=this.handleEdit.bind(this);
      this.handleRemove=this.handleRemove.bind(this);
  }//생성자
  //이벤트처리해주는 함수작성
  handleChange(e){ //event객체->이벤트 정보
      //jQuery->$(this)->event.target(이벤트가 발생된객체)
    this.setState({keyword:e.target.value})
  }
  //key값을 매개변수로 받아서 처리해주는 함수->수정
  handleClick(key){
    this.setState({selectedKey:key})
    console.log(key,'is selected!')
  }
  //----------------------------------------
  handleCreate(contact){ //데이터추가
    this.setState({ //1.집어넣을 데이터 2.$push이용 []로 묶어줄것
      contactData:update(this.state.contactData,{$push:[contact]})
    })
  }
  handleEdit(name,phone){//데이터수정(~,addr)
    this.setState({
      contactData:update(this.state.contactData,{
        //2.수정할값에 대한 인덱스번호
        [this.state.selectedKey]:{
          name:{$set:name},  //형식) name(키명):{$set:저장할값}
          phone:{$set:phone}//,addr:{$set:addr},,
        }
      })
    })
  }
  handleRemove(){//데이터삭제
     this.setState({
       contactData:update(this.state.contactData,
        //$splice메서드를 이용해서 선택된키부터 몇개를 삭제?
        //삭제할 대상자도 배열로 묶어준다.[]
        {$splice:[[this.state.selectedKey,1]]}),
        selectedKey:-1 //다시 삭제시킬 대상자를 선택하기위해서 초기화
     })
  }

  //-----------------------------------------
  render(){
    //화살표함수를 이용->하나씩 분리해서 인덱스별로 출력
    const mapToComponents=(data)=>{
       //--추가(검색한 데이터를 찾아서 필터->(ContactInfo)에게 전송--------------------------------------------
       //data=data.sort()//1.이미 정렬이 된 상태
       data=data.filter( //2.정렬된 데이터중에서 찾은 데이터만 반환
           (contact)=>{
             //검색할 데이터가 없다면 indexOf()->-1을 반환해준다.
             return contact.name.indexOf(this.state.keyword) > -1;
           }
       )
       
        //console.log('검색한 data=>',data)
       //------------------------------------------------
       //배열의 각각의 값을 분리->map함수를 이용 리턴(i)
       return data.map((contact,i)=>{
         //contact(배열의 요소각각을 의미)  i=>i는 요소의 인덱스번호
         //console.log('contact->',contact,'i->',i)
           //key->배열의 내부적으로 구분하는 구분자로써 필수
           //{/*  */}
           return(<ContactInfo contact={contact} key={i} 
                       onClick={()=>this.handleClick(i)} />)
       })
    }
    return(
          <div>
            <div class="form-group">
              <label for="Name">검색</label>
              <input name="keyword" placeholder="Search" class="form-control"
                    value={this.state.keyword}
                    onChange={this.handleChange}  />
            </div>
            <div>   
            {mapToComponents(this.state.contactData)}
            <ContactDetails 
               isSelected={this.state.selectedKey!=-1}
               contact={this.state.contactData[this.state.selectedKey]} />
              {/* (1)  
             <div>홍길동 010-123-0987</div>
             <div>테스트 010-666-8888</div>
             <div>임 시  010-444-0987</div>
             <div>임 시2 010-123-9999</div>
             <div>테스트김 010-123-1111</div>
             <div>이현우 010-888-2222</div> */}
           </div>
          </div>


           )
  }
}

export default Contact;
