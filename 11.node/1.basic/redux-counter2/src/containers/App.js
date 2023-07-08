import React, {Component} from 'react';
//추가
import Buttons from '../components/Buttons';//버튼
import CounterListContainer from './CounterListContainer';
//추가
import getRandomColor from '../lib/getRandomColor'; 
import {connect} from 'react-redux';//connect 함수 불러움
import * as actions from '../actions';

class App extends Component {
    render() {
		const { onCreate, onRemove}=this.props;
        return (
            <div className="App">
			   <Buttons
			           onCreate={onCreate}
		               onRemove={onRemove}
				 />
              <CounterListContainer />
            </div>
        );
    }
}
//이 컴포넌트에서는 store에서 필요한 값이 없으니 mapStateTorops
//는 null로 설정
const mapToDispatch=(dispatch)=>({
   //생성버튼 이벤트시 ->디스패치에 의해서 create액션전달
   //(getRandomColor함수 호출함)
   onCreate:()=>dispatch(actions.create(getRandomColor())),
   //삭제버튼 이벤트시 ->디스패치에 의해서 remove액션전달
   onRemove:()=>dispatch(actions.remove())
});
   //리덕스에 연결시키고 내보냅니다.
export default  connect(null,mapToDispatch)(App);