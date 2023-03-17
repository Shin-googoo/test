/* ContactInfo.js */
import React from 'react';//react.js(1)

export default class ContactInfo extends React.Component{
  render(){
    /* this.props.contact(전달된 배열요소값)
    return(<div>
           {this.props.contact.name} {this.props.contact.phone}
           </div>
           )
     */
    return(<div className="container">
        <table className="table table-bordered">
            <tr className="success">
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.phone}</td>
            </tr>
        </table>
    </div>)
  }
}

