import React from 'react';

const person = props => {
  return (
    <div onClick={props.click}>
      <p>
        My name is {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <p>
        <input type="text" onChange={props.change} value={props.name} />
      </p>
    </div>
  );
};

export default person;
