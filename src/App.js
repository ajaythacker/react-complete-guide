import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Manu', age: 29},
      {id: 3, name: 'Steph', age: 25}
    ],
    otherState: 'other',
    showPersons: false,
    textLength: 0,
    enteredText: ''
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

  countLetters = event => {
    console.log(event.target.value.length);
    this.setState({textLength: event.target.value.length, enteredText: event.target.value});
  };

  deleteClickedLetter = (event, id) => {
    const text = this.state.enteredText.split('');
    text.splice(id, 1);
    const updatedText = text.join('');
    this.setState({enteredText: updatedText, textLength: updatedText.length});
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

    const charArray = this.state.enteredText.split('');
    let charComponents = (
      <div>
        {charArray.map((letter, index) => {
          return (
            <CharComponent
              delete={event => this.deleteClickedLetter(event, index)}
              key={index}
              letter={letter}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <button onClick={this.clickHandler}>Switch Name</button>
        <button onClick={this.showHidePersons}>Show/Hide</button>
        {persons}
        <div>
          Enter any text
          <input type="text" onChange={this.countLetters} value={this.state.enteredText} />
          <ValidationComponent textLength={this.state.textLength} />
        </div>

        <div>{charComponents}</div>
      </div>
    );
  }
}

export default App;
