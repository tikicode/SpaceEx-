import React, { } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Center,
  Box,
  Heading,
  VStack,
  Button,
} from '@chakra-ui/react';

export function HomePage() {
  const navigate = useNavigate();
  return (
    <Center height='100vh' width='100vw'>

      <VStack spacing={10}>
        <img src={'/logo.jpg'} height='400px' width='400px' />
        <Heading fontWeight={600} fontSize={30} mt={10} ml={3}>
          The Efficient Way To Pay.
        </Heading>
        <Button
          backgroundColor='gray.200'
          borderRadius='20px'
          fontSize={25}
          height='7vh'
          width='20vw'
        >
          Log In
        </Button>
        <Button
          backgroundColor='gray.200'
          borderRadius='20px'
          fontSize={25}
          height='7vh'
          width='20vw'
          onClick={() => {
            navigate('/user')
          }}
        >
          Sign Up
        </Button>
      </VStack>
    </Center>
  );
}