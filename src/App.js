import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Max" age="27" />
        <Person name="Manu" age="29">
          My hobby is racing
        </Person>
        <Person name="Steph" age="24" />
      </div>
    );
  }
}

export default App;
