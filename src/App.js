import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{name: 'Max', age: 28}, {name: 'Manu', age: 29}, {name: 'Steph', age: 25}],
    otherState: 'other',
    showPersons: false
  };

  clickHandler = () => {
    this.setState({
      persons: [{name: 'Max', age: 28}, {name: 'Manuaa', age: 29}, {name: 'Steph', age: 26}]
    });
  };

  changeHandler = event => {
    this.setState({
      persons: [
        {id: 1, name: event.target.value, age: 28},
        {id: 2, name: 'Manuaa', age: 29},
        {id: 3, name: 'Steph', age: 26}
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
          {this.state.persons.map(person => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={this.clickHandler}
                change={this.changeHandler}
              />
            );
          })}
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
