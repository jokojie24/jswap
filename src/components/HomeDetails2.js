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
      title: 'Reduces the risk of fraud and scams: ',
      text: 'The escrow system and blockchain technology ensure that transactions are secure and transparent, reducing the risk of fraud and scams.',
    },

     {
      id: 1,
      title: 'Increases the speed of transactions:',
      text: 'Transactions are processed in real-time, allowing users to complete transactions quickly.',
    },

    {
      id: 2,
      title: 'Reduces the cost of transactions:',
      text: 'The platform eliminates the need for intermediaries, reducing the cost of transactions.',
    },

    {
      id: 3,
      title: 'Improves the efficiency of transactions:',
      text: 'The platform automates the escrow process, reducing the time and effort required to complete transactions.',
    },
  ];

  
  export default function HomeDetails() {
    return (
        <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Text color={'gray.600'} fontSize={'x2'}>
           BENEFITS
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