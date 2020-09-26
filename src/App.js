import React from 'react';
import './App.css';
import {CounterComponent} from './components/counter/counter';

//https://www.zola.com/wedding/ericandemilie/

function App() {
  return (
    <div className="App">
      <h1>test change</h1>
      <CounterComponent />
      <footer>
        <h6>A very fancy app made by the brother of the bride</h6>
      </footer>
    </div>
  );
}

export default App;
