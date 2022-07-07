import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { UserSignUp } from './User/UserSignUp';
import { HomePage } from './HomePage';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
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
