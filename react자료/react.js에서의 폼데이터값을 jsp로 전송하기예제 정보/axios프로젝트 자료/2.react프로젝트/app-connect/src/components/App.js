  //App.js
  import React from 'react'; 
  //추가
  import axios from 'axios';

  class App extends React.Component{  
  
    constructor(props) {
      super(props);
      this.call = this.call.bind(this);
     }
    //이벤트 처리
    call() {
      /*
      axios.post('/counter').then(response => {
          this.props.onReceive(response.data.number);
      });*/
     axios.get('http://localhost:8090/VueTest/connect.jsp?name=testkim')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    }
    render(){
       return(
      <div>
        <button onClick={this.call}>jsp연결</button>
      </div>
       )
    }//render
  }
  
  export default App;