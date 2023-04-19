import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import {ChevronRightIcon} from '@chakra-ui/icons';
  
  const features = [ 
    {
      id: 0,
      title: 'Secure transactions:',
      text: 'The platform utilizes an escrow system and smart contracts to ensure the security of transactions.',
    },

     {
      id: 1,
      title: 'Cost-effective:',
      text: 'The platform eliminates the need for intermediaries, reducing the cost of transactions.',
    },

    {
      id: 2,
      title: 'Swift:',
      text: 'Transactions are processed in real-time, allowing users to complete transactions quickly.',
    },

    {
      id: 3,
      title: 'User-friendly:',
      text: 'The platform is easy to use, with a simple and intuitive user interface.',
    },

   {
      id: 4,
      title: 'Transparency:',
      text: 'All transactions are recorded on a public ledger, providing a transparent and auditable trail.',
    },
  ];
  
  export default function HomeDetails() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Features and Benefits.</Heading>
          <Text color={'gray.600'} fontSize={'x2'}>
           FEATURES
          </Text>
        </Stack>
  
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={ChevronRightIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }