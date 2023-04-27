import React, { Component } from 'react';

class Option extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);//생성자에서 이벤트함수 연결시킴
    }
    onChange(event) {
        //부모로부터 전달받은 함수onChange호출
        this.props.onChange(event.target.value);
    }
    render() {
        return (
            <div> {/* 부모로부터 전달받은 diff값 출력 */}
                <input value={this.props.diff} onChange={this.onChange} />
            </div>
        );
    }
}
export default Option;