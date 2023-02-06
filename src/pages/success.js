import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Box, 
    Heading, 
    Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/services')
    },2000)
  },[])
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        SUCCESS
      </Heading>
      <Text color={'gray.500'}>
        Registration sucessful. You will be redirected to our Services Page.
      </Text>
    </Box>
  );
}