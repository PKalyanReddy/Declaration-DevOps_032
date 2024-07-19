import './App.css'
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Navbar from "./components/HomePage/navbar";
import Footer from "./components/HomePage/footer";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <ChakraProvider>
      <Navbar />
      {!isAuthenticated && <Footer />}
    </ChakraProvider>
  );
}

export default App;
