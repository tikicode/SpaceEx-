import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Center,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

export function UserSignUp() {
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get('/wallet')
      .then(res => res.data)
      .then(res => {
        console.log('Output: ', res);
      });
  }, []);

  return (
    <Center width='100vw' height='100vh'>
      <Box
        borderWidth='5px'
      >
        <FormControl>
          <FormLabel htmlFor='name' fontWeight={600}>First Name</FormLabel>
          <Input id='name' type='name' />

          <FormLabel htmlFor='name' fontWeight={600}>Last Name</FormLabel>
          <Input id='name' type='name' />

          <FormLabel htmlFor='email' fontWeight={600}>Email address</FormLabel>
          <Input id='email' type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>

        </FormControl>
      </Box>
    </Center>
  );
}

