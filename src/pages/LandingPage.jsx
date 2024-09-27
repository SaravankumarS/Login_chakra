import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';

function LandingPage() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signup');
  };

  return (
    <Box
      position="relative"
      minH="100vh"
      bgImage="url('https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg')"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.600"
      ></Box>

      <Flex
        direction="column"
        align="center"
        textAlign="center"
        zIndex="1"
        p={4}
      >
        <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color="white" mb={4}>
          Welcome to Saravanan's World
        </Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="white" mb={6}>
          Experience a seamless way to manage your account and stay connected.
        </Text>

        <Button
          onClick={handleSignInClick}
          colorScheme="purple"
          size="lg"
          px={8}
          py={6}
          _hover={{ bg: 'purple.700' }}
        >
          Sign In
        </Button>
      </Flex>
    </Box>
  );
}

export default LandingPage;
