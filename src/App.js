import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Manu', age: 29},
      {id: 3, name: 'Steph', age: 25}
    ],
    otherState: 'other',
    showPersons: false
  };

  deletePersonHandler = id => {
    console.log(id);
    const currentPersons = [...this.state.persons];

    currentPersons.splice(id, 1);
    this.setState({persons: currentPersons});
  };

  changeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                change={event => this.changeHandler(event, person.id)}
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
