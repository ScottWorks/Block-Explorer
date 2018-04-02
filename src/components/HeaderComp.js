import React from 'react';

function HeaderComp(props) {
  return (
    <div className="title_component">
      <h3>{props.children}</h3>
    </div>
  );
}

export default HeaderComp;
