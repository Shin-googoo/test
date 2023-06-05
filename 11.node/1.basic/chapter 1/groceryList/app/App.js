import React, { Component } from 'react';
import {render} from 'react-dom';

// Parent Component
class GroceryList extends Component {
  render() {
    return (
      <ul>
        <ListItem quantity="1">빵</ListItem>
        <ListItem quantity="6">달갈</ListItem>
        <ListItem quantity="2">우유</ListItem>
      </ul>
    );
  }
}

// Child Component
class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.quantity}× {this.props.children}
      </li>
    );
  }
}

render(<GroceryList />, document.getElementById('root'));
