import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/HomePage/navbar';
import Footer from './components/HomePage/footer';

function App() {

  return (
    <>
    <ChakraProvider>
      <Navbar/>
      <Footer/>
    </ChakraProvider>
    </>
  )
}

export default App
