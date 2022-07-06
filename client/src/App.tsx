import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { UserSignUp } from './User/UserSignUp';
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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/user' element={<UserSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          BETA JAVASCRIPT DEVELOPERS
        </p>
        <button
          onClick={ () => { navigate('/user') }}
        >
          Sign Up
        </button>
      </header>
    </div>
  );
}

export default App;
