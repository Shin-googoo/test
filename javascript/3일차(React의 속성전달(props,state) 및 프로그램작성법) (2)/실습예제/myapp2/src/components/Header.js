
import React from 'react';

export default class Header extends React.Component{
    render(){
        //return(<h1>Header</h1>)
        return(<h1>{this.props.title}</h1>)
    }
}
//추가
Header.defaultProps={
    title:'기본값 header'
}
//export default Header; //export default 배포시킬 클래스명;