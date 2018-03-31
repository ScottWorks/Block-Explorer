import React, { Component } from 'react';

function BlockHistoryTable(props) {
  return (
    <div className="App">
      <p>{props.blockHeight}</p>
      <p>{props.time}</p>
    </div>
  );
}

export default BlockHistoryTable;
