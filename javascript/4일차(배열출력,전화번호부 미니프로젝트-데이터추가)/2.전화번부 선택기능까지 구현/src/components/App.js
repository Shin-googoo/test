
import React from 'react';//react.js(1)
//추가
import Contact from './Contact';//Contact.js

class App extends React.Component{
  
  render(){
    
    return(<div>
            <h1 className="text-center">전화번호부</h1>
             {/* (1) -><Contact />
             <div>홍길동 010-123-0987</div>
             <div>테스트 010-666-8888</div>
             <div>임 시  010-444-0987</div>
             <div>임 시2 010-123-9999</div>
             <div>테스트김 010-123-1111</div>
             <div>이현우 010-888-2222</div> */}
            <Contact />
           </div>
           )
  }
}

export default App;
