import React, { Component } from 'react';

function Header(props) {
  return (
    <div className="App">
      <h3>{props.children}</h3>
    </div>
  );
}

export default Header;
