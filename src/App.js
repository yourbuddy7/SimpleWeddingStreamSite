import React from 'react';
import './App.css';
import {CounterComponent} from './components/counter/counter';

//https://www.zola.com/wedding/ericandemilie/

function App() {
  return (
    <div className="App">
      {/* <CounterComponent />   */}
      <h1>
        Miesner Martines Live Stream Archive
      </h1>
      <div className = "iframeContainer">
        <iframe className = "responsiveIframe" src="https://www.youtube.com/embed/JpalskUfPCs" title = "streamPlayer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen></iframe>
      </div>
      <footer>
        {/* <h6>A very fancy app made by the brother of the bride</h6> */}
      </footer>
    </div>
  );
}

//this comment is made as a update confirmation 

export default App;
