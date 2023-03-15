import React, { Component } from 'react';
//추가
import PropTypes from 'prop-types';

class Content extends Component {
    render() {
        return (
            <div>
               <h2>Cotent</h2>
               <h2>컴포넌트중첩2</h2> 
               <h2>{this.props.title}</h2>
               <h2>{this.props.body}</h2>
            </div>
        );
    }
}
/*
형식) 자식클래스명.propTyeps={
    매개변수명:PropTypes.자료형(string,number,double,,,)
    매개변수명:PropTypes.자료형.isRequired(반드시 필수로 입력)
}
*/
Content.propTypes={
    title:PropTypes.string,
    body:PropTypes.string.isRequired
}
export default Content;