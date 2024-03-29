import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/nav'
import { Box } from '@chakra-ui/react'
import HomeBanner from '../components/HomeBanner'
import HomeMid from '../components/HomeMid'
import HomeDetails from '../components/HomeDetails'
import HomeDetails2 from '../components/HomeDetails2'
import Footer from '../components/Footer'

export default function Home() {
  return <Box>
    <Navbar />
    <HomeBanner />
    <HomeMid />
    <HomeDetails />
    <HomeDetails2 />
    <Footer />
  </Box>
}
