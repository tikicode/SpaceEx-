import React, { } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserSignUp } from './User/UserSignUp';
import { HomePage } from './HomePage';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/user' element={<UserSignUp />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
