import React, { Component } from 'react';
//추가(외부컴포넌트를 불러오기)
import {Route,Switch} from 'react-router-dom';
import {Home,About,Posts} from '../pages';
//import {Home,About} from 'pages';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        {/* Hello React-Router 
            path="경로지정" component={화면에 출력할 컴포넌트}
        */}
      <Menu />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/about/:name" component={About} />
        <Route path="/about" component={About} />
      </Switch>
      <Route path="/posts" component={Posts} />
      </div>
    );
  }
}

export default App;