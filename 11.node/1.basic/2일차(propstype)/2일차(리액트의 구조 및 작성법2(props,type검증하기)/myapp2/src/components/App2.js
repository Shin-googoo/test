import React, { Component } from 'react';
//따로 파일로 독립적으로 분리->모듈화->import 구문
//컴포넌트는 중첩(겹쳐서 출력)
import Header from './Header';
import Content from './Content';

class App2 extends Component {
    render() {
        /* 자식 {this.props.전달받은 속성명(=매개변수명)}   */
        return (
            <div>
                {/*
                <h1>{this.props.headerTitle}</h1>
                <h1>{this.props.contentTitle}</h1>
                <h1>{this.props.contentBody}</h1> */}
                <Header  title={this.props.headerTitle} />
                <Content title={this.props.contentTitle} 
                         body={this.props.contentBody}/>
            </div>
        );
    }
}
//추가 /* 자식클래스명.defaultProps={속성명:기본값,,,} */
App2.defaultProps={   
   headerTitle:'기본값 header',
   //contentTitle:'기본값 contentTitle',
   contentTitle:5,
   //contentBody:'기본값 contentBody'
   contentBody:undefined
}
/*
//Header.js
class Header extends Component {
    render() {
        return (
            <h1>Header</h1>
        );
    }
}

//Content.js
class Content extends Component {
    render() {
        return (
            <div>
               <h2>Content</h2>
               <p>Hey!</p>
            </div>
        );
    }
}
*/
export default App2;

