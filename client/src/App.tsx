import React, { useEffect } from 'react';
import './App.css';

import axios from 'axios';

function App() {
  let test = "hihihi";
  useEffect(() => {
    axios.get('/wallet')
      .then(res => {test = res.data.wallet})
      .then(res => {
        console.log('Output: ', res);
        console.log(test)
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          BETA JAVASCRIPT DEVELOPERS
        </p>
        <div>
          {test}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
