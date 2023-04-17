import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    useToast,
    Select,
  } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
  
  export default function SignupScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('ng');
    const [password, setPassword] = useState('');
    const toast = useToast();
const router = useRouter()
    const handleSubmit = async () => {
      if (!name || !email || !phone || !country || !password ) {
        return toast({
          title: 'Form Error',
          description: 'Please provide required credentials',
          status: 'error'
       }) 
  
      }

      console.log({name, email, country, password});
      router.push('/success')
    }

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Create your account</Heading>
            <FormControl id="email">
              <FormLabel>Full Name</FormLabel>
              <Input type="name" value={name} onChange={e => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone</FormLabel>
              <Input type="phone" value={phone} onChange={e => setPhone(e.target.value)} />
            </FormControl>
            <FormControl id="country">
              <FormLabel>Country </FormLabel>
              <Select type="country" value={country} onChange={e => setCountry(e.target.value)} >
                <option value="ng">Nigeria</option>
                <option value="us">United States of America</option>
                <option value="uk">United Kingdom</option>
              </Select>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={6}>
              
              <Button onClick={handleSubmit} className="btn" type="submit" colorScheme={'blue'} variant={'solid'}>
                Sign in
              </Button>
                <Link href="/login" color={'blue.500'}>Already have an account? Login</Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }

