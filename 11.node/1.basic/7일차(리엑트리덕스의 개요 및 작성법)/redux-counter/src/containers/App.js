import React, {Component} from 'react';
//추가
//import Counter from '../components/Counter';
import CounterContainer from './CounterContainer';

class App extends Component {
    render() {
        return (
            <div>
              <CounterContainer />
            </div>
        );
    }
}
export default App;