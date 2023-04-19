import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function HomeMid() {
    return (
      <Container maxW={'5xl'} py={12}>
          <Stack spacing={4}>
            <Heading>System Architecture</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            The Automated Escrow System for Foreign Exchange is built on a decentralized architecture, utilizing blockchain technology. The platform leverages smart contracts to automate the escrow process and ensure the security of transactions. The platform also employs cryptographic algorithms to secure sensitive user information, such as private keys and passwords.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
             </Stack>
          </Stack>
      </Container>
    );
  }