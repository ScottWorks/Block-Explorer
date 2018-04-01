import React, { Component } from 'react';
import { Button } from 'reactstrap';

function ButtonComp(props) {
  return (
    <div className="App">
      <Button onClick={() => props.function()}>{props.children}</Button>
    </div>
  );
}

export default ButtonComp;
