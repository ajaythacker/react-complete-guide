import React from 'react';

const ValidationComponent = props => {
  const textToDisplay = props.textLength <= 5 ? 'text too short' : 'text long enough';

  return <p>{textToDisplay}</p>;
};

export default ValidationComponent;
