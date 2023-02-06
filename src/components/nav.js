import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { RiFlashlightFill } from 'react-icons/ri';
import { useRouter } from 'next/router';


const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Exchange', path: '#' },
  { name: 'Contact', path: '/contact' }
];
const button = [
    { name: 'Signin', path: '/login',
}
]

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const onSubmit = async () => {

  router.push('/login')
  }
  return (
    <Box px={4} bg={useColorModeValue('white', 'gray.800')}>
      <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto">
      <Link href="/services">
      <Flex alignItems="center" >
       <Icon as={RiFlashlightFill} h={8} w={8} mr="2"  />
       JSWAP
       </Flex></Link>

        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={6} d={{ base: 'none', md: 'flex' }} alignItems="center">
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </HStack>
        </HStack>

        <Button onClick={onSubmit} colorScheme="blue" size="md" rounded="md" d={{ base: 'none', md: 'block' }}>
          Sign in
        </Button>
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} d={{ base: 'inherit', md: 'none' }}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
            <Text fontWeight="semibold" color="gray.500">
              Community
            </Text>
            <Stack pl={2} spacing={1} mt={'0 !important'}>
              {dropdownLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </Stack>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

const NavLink = ({ name, path, onClose }) => {
  return (
    <Link
      href={path}
      lineHeight="inherit"
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('blue.500', 'blue.200')
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};



const MenuLink = ({ name, path, onClose }) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
        <Text>{name}</Text>
      </MenuItem>
    </Link>
  );
};