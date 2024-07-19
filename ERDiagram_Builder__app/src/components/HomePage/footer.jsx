import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    VisuallyHidden,
    chakra,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
  import {  Button, VStack, HStack, Image } from '@chakra-ui/react';
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    )
  }
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
  }
  
  export default function Footer() {
    return (
    <>
        <Container maxW="container.xl" mt={5}>
          <VStack spacing={8}>
            <HStack spacing={8} width="full" flexWrap="wrap" justifyContent="center">
              <Box 
                flex="1" 
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden" 
                padding="6" 
                boxShadow="md" 
                maxW="sm"
                margin="10px"
              >
                <Text fontSize="xl" mb={4} textAlign="center">Build Your ER Diagram</Text>
                <Image src="https://static-cse.canva.com/blob/994667/graph_er-diagram-maker_history_2x.jpg" alt="ER Diagram" mb={4} />
                <Button colorScheme="teal" width="full">Start Building</Button>
              </Box>
              <Box 
                flex="1" 
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden" 
                padding="6" 
                boxShadow="md" 
                maxW="sm"
                margin="10px"
              >
                <Text fontSize="xl" mb={4} textAlign="center">Build Your ER Diagram</Text>
                <Image src="https://static-cse.canva.com/blob/994667/graph_er-diagram-maker_history_2x.jpg" alt="ER Diagram" mb={4} />
                <Button colorScheme="teal" width="full">Start Building</Button>
              </Box>
            </HStack>
          </VStack>
        </Container>
  
  
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'8xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} alignItems='center'>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Box as="a" href={'#'}>
                About Us
              </Box>
              <Box as="a" href={'#'}>
                Blog
              </Box>
              <Box as="a" href={'#'}>
                Contact Us
              </Box>
            </Stack>
  
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Box as="a" href={'#'}>
                Help Center
              </Box>
              <Box as="a" href={'#'}>
                Safety Center
              </Box>
              <Box as="a" href={'#'}>
                Community Guidelines
              </Box>
            </Stack>
  
            <Stack align={'flex-start'}>
              <ListHeader>Legal</ListHeader>
              <Box as="a" href={'#'}>
                Cookies Policy
              </Box>
              <Box as="a" href={'#'}>
                Privacy Policy
              </Box>
              <Box as="a" href={'#'}>
                Terms of Service
              </Box>
              <Box as="a" href={'#'}>
                Law Enforcement
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'10xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}
            bg="teal.500">
            <Text>© 2024  ER Diagram Builder. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
    )
  }