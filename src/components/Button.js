import React, { Component } from 'react';

function Button(props) {
  return (
    <div className="App">
      <button onClick={() => props.function()}>{props.children}</button>
    </div>
  );
}

export default Button;
