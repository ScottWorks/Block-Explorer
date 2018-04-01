import React, { Component } from 'react';

function Header(props) {
  return (
    <div className="App">
      <h1>{props.children}</h1>
    </div>
  );
}

export default Header;
