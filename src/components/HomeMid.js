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
            <Heading>Automated Escrow System for Foreign Exchange</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            JSWAP is a platform that facilitates secure and efficient transactions between buyers and sellers in the foreign exchange market. The platform allows users to exchange currency in a secure and transparent manner, by utilizing an escrow system. The platform eliminates the need for intermediaries, thereby reducing the cost of transactions and increasing the speed of transactions.
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