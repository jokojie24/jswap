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
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },

     {
      id: 1,
      title: 'free of charge',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },

    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },

    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },

   {
      id: 4,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
  ];

  
  export default function HomeDetails() {
    return (
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
    );
  }