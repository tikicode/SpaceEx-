import React, { useEffect } from 'react';
import {
  Center,
  Box,
  Flex,
  Heading,
  VStack,
  Button,
} from '@chakra-ui/react';

export function HomePage() {
  return (
    <Center height='100vh' width='100vw'>
      <Box
        borderRadius='20px'
        borderWidth='5px'
        alignItems='center'
        boxSize='md'
        pt={9}
      >
        <VStack spacing={10}>
          <Heading fontWeight={600} fontSize={50}>
            SpaceEx 🚀
          </Heading>
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
          >
            Sign Up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}