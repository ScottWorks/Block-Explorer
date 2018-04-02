import React from 'react';
import { Button } from 'reactstrap';

function ButtonComp(props) {
  return (
    <div className="button_component">
      <Button onClick={() => props.function()}>{props.children}</Button>
    </div>
  );
}

export default ButtonComp;
