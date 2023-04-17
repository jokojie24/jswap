import { SVGProps, useEffect, useMemo, useState } from 'react';
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Link,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Center,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';


const exchangeParams = {
    ngn: 750,
    usd: 1/750
}

const signs = {
  ngn: 'NGN ',
  usd: '$'
}
const Services = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()
    const features= useMemo(() => [
        {
          heading: 'Secure Exchange',
          content: 'Safe transactions guranteed with our high security systems.',
          icon: (
            <svg
              width={36}
              height={36}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
           ),
           onClick: onOpen
        },
        {
          heading: 'API Included',
          content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
          icon: (
            <svg
              width={36}
              height={36}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              )
          },
         {
          heading: 'Quality suport 24/7',
          content: 'We are here to help you with any questions you may have.',
          icon: (
            <svg
              width={36}
              height={36}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              ></path>
            </svg>
          ),
          onClick: () => router.push('/contact')
        },
      ],[]);


      const [toCurrency, setToCurrency] = useState('usd') 
      const [fromCurrency, setFromCurrency] = useState('ngn')
      const [amount, setAmount] = useState(0)

      const calculateExchange = (amount, to) => {
        const rate = exchangeParams[to];
        return `${signs[to]}` + (amount * rate).toLocaleString()
      }

      useEffect(() => {
        const to = fromCurrency === 'ngn' ? 'usd': 'ngn';

        setToCurrency(to)
      }, [fromCurrency])

 return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        Our Services
      </chakra.h3>
      <Link href="/" color={'blue.500'}>HOME</Link>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
        {features.map((feature, index) => (
          <Box
            key={index}
            bg="gray.100"
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative"
            transitionDuration="0.45s"
            _hover={{
                transform: 'scale(1.1)'
            }}
            onClick={feature.onClick}
            cursor="pointer"
          >
            <Flex
              p={2}
              w="max-content"
              color="white"
              bgGradient="linear(to-br, #228be6, #15aabf)"
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md" mt={4}>
              {feature.content}
            </Text>
            <Link href="#" mt={4} fontSize="sm" color="blue.400">
              
            </Link>
          </Box>
        ))}
      </SimpleGrid>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size="lg"
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Exchange</DrawerHeader>

          <DrawerBody>
            <Text>You can convert between dollar and naira easily</Text>
            <FormControl my="3">
                <FormLabel>
                Amount
                </FormLabel>
                <Input placeholder='Eg: 3000' type="number"value={amount}
                onChange={e => setAmount(e.target.value)} />
            </FormControl>
            <FormControl my="3">
                <FormLabel>
                From
                </FormLabel>
                <Select placeholder='please select a currency'
                value={fromCurrency}
                onChange={e => setFromCurrency(e.target.value)}>
                    <option value="usd">USD</option>
                    <option value="ngn">NGN</option>
                </Select>
            </FormControl>
            <FormControl my="3">
                <FormLabel>
                To
                </FormLabel>
                <Select disabled placeholder='please select a currency'
                value={toCurrency}
                onChange={e => setToCurrency(e.target.value)}
                >
                    <option value="usd">USD</option>
                    <option value="ngn">NGN</option>
                </Select>
            </FormControl>

            <Center mt="10" flexDir="column">
                <Heading>
                    {calculateExchange(amount, toCurrency)}
                </Heading>
                <Text opacity="0.5" fontSize="xs">you will get</Text>
            </Center>
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='orange'>Process</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Services;