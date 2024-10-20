import { useEffect, useMemo, useState } from 'react';
import {
  Container,
  Box,
  Text,
  SimpleGrid,
  Flex,
  Link,
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
import { CreditCard, Code, HelpCircle, Home } from 'lucide-react';

const exchangeParams = {
  ngn: 750,
  usd: 1/750
};

const signs = {
  ngn: 'NGN ',
  usd: '$'
};

export default function Services() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [toCurrency, setToCurrency] = useState('usd');
  const [fromCurrency, setFromCurrency] = useState('ngn');
  const [amount, setAmount] = useState(0);

  const features = useMemo(() => [
    {
      heading: 'Secure Exchange',
      content: 'Safe transactions guaranteed with our high security systems.',
      icon: <CreditCard size={36} />,
      onClick: onOpen
    },
    {
      heading: 'API Included',
      content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
      icon: <Code size={36} />
    },
    {
      heading: 'Quality Support 24/7',
      content: 'We are here to help you with any questions you may have.',
      icon: <HelpCircle size={36} />,
      onClick: () => router.push('/contact')
    },
    {
      heading: 'HOME',
      content: '',
      icon: <Home size={36} />,
      onClick: () => router.push('/')
    },
  ], [onOpen, router]);

  const calculateExchange = (amount, to) => {
    const rate = exchangeParams[to];
    return `${signs[to]}${(amount * rate).toLocaleString()}`;
  };

  useEffect(() => {
    setToCurrency(fromCurrency === 'ngn' ? 'usd' : 'ngn');
  }, [fromCurrency]);

  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        Our Services
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
        {features.map((feature, index) => (
          <Box
            key={index}
            bg="gray.100"
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)' }}
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
            <Heading as="h3" fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </Heading>
            <Text fontSize="md" mt={4}>
              {feature.content}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      <ExchangeDrawer
        isOpen={isOpen}
        onClose={onClose}
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        amount={amount}
        setAmount={setAmount}
        calculateExchange={calculateExchange}
      />
    </Container>
  );
}

function ExchangeDrawer({ isOpen, onClose, fromCurrency, setFromCurrency, toCurrency, setToCurrency, amount, setAmount, calculateExchange }) {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} size="lg">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Exchange</DrawerHeader>
        <DrawerBody>
          <Text>You can convert between dollar and naira easily</Text>
          <FormControl my="3">
            <FormLabel>Amount</FormLabel>
            <Input placeholder='Eg: 3000' type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          </FormControl>
          <FormControl my="3">
            <FormLabel>From</FormLabel>
            <Select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
              <option value="usd">USD</option>
              <option value="ngn">NGN</option>
            </Select>
          </FormControl>
          <FormControl my="3">
            <FormLabel>To</FormLabel>
            <Select disabled value={toCurrency}>
              <option value="usd">USD</option>
              <option value="ngn">NGN</option>
            </Select>
          </FormControl>
          <Center mt="10" flexDir="column">
            <Heading>{calculateExchange(amount, toCurrency)}</Heading>
            <Text opacity="0.5" fontSize="xs">you will get</Text>
          </Center>
        </DrawerBody>
        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>Cancel</Button>
          <Button colorScheme='orange'>Process</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
