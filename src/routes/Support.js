import React from 'react';
import './Support.css';

class Support extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Title</h1>
        <div className="card" onClick={() => alert('Clicked Card 1')}>
          <p>Card 1</p>
        </div>
        <div className="card" onClick={() => alert('Clicked Card 2')}>
          <p>Card 2</p>
        </div>
        <div className="card" onClick={() => alert('Clicked Card 3')}>
          <p>Card 3</p>
        </div>
      </div>
    );
  }
}

export default Support;
