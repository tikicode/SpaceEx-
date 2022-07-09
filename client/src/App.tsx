import React, { } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserSignUp } from './User/UserSignUp';
import { HomePage } from './HomePage';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
// Version 1: Using objects

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#040231',
        color: 'white',
      },
      // styles for the `a`
    },
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
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
