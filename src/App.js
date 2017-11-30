import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{name: 'Max', age: 28}, {name: 'Manu', age: 29}, {name: 'Steph', age: 25}],
    otherState: 'other'
  };

  clickHandler = () => {
    this.setState({
      persons: [{name: 'Max', age: 28}, {name: 'Manuaa', age: 29}, {name: 'Steph', age: 26}],
      showPersons: false
    });
  };

  changeHandler = event => {
    this.setState({
      persons: [
        {name: event.target.value, age: 28},
        {name: 'Manuaa', age: 29},
        {name: 'Steph', age: 26}
      ]
    });
  };

  showHidePersons = () => {
    const currentStatus = this.state.showPersons;
    const newStatus = !currentStatus;
    this.setState({
      showPersons: newStatus
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.clickHandler}
            change={this.changeHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.clickHandler}>
            My hobby is racing
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <button onClick={this.clickHandler}>Switch Name</button>
        <button onClick={this.showHidePersons}>Show/Hide</button>
        {persons}
      </div>
    );
  }
}

export default App;
