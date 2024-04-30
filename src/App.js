import React from 'react';
import './App.css';

function App() {
  // Creating an array of numbers from 0 to 9
  const numbers = Array.from(Array(10).keys());

  return (
    <div className="App">
      <header className="App-header">
        <h1>Number Grid Display</h1>
        <div className="grid">
          {numbers.map((number) => (
            <div key={number}  className="grid-item">
              {number}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;