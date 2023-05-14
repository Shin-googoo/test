import React, { Component } from 'react';
//추가
import PropTypes from 'prop-types'; //유효성검사
//----------------------------------------
class Content extends Component {
    render() {
        return (
            <div>
              <h1>Content</h1>
              <h2>컴포넌트 중첩2</h2>
              <h2>{this.props.title}</h2>
              <h2>{this.props.body}</h2>
            </div>
        );
    }
}
/*  제대로 전달이 됐는지를 확인하는 설정
 형식) 자식클래스명.propTypes={
     매개변수명:PropTypes.자료형(string,number,double,,,)
     매개변수명:PropTypes.자료형.isRequired(반드시 필수로 입력을 받는표시)
*/
Content.propTypes={
    title:PropTypes.string,
    body:PropTypes.string.isRequired
}
export default Content;