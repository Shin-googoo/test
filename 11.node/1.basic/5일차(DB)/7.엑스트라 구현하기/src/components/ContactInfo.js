/* ContactInfo.js */
import React from 'react';//react.js(1)

export default class ContactInfo extends React.Component{
  render(){
    return(<div onClick={this.props.onClick}>
          {/* this.props.contact(전달된 배열요소값)*/}
            {this.props.contact.name}
           </div>
           )
  }
}

