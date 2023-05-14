import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            //<h1>Header</h1>
            <h1>{this.props.title}</h1>
        );
    }
}
export default Header;//export default 배포시킬 클래스명;