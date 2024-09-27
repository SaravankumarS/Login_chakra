import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, Link, VStack, useToast } from "@chakra-ui/react"; // Chakra imports
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "saravanan" && password === "123456") {
      toastr.success("Welcome back, Saravanan!", "Login successful", {
        closeButton: true,
        progressBar: true,
        timeOut: 2000,
      });

      setTimeout(() => {
        navigate("/home");
      }, 2500);
    } else {
      toastr.error("Incorrect username or password.", "Login failed", {
        closeButton: true,
        progressBar: true,
        timeOut: 2000,
      });
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      bg="gray.100"
      p={4}
    >
      <Box
        w={{ base: "full", sm: "400px" }} 
        bg="white"
        rounded="lg"
        shadow="md"
        p={8}
      >
        <Heading
          as="h1"
          size="lg"
          textAlign="center"
          mb={6}
          color="gray.700"
        >
          Sign In
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>

            <FormControl id="username" isRequired>
              <FormLabel color="gray.700">Username</FormLabel>
              <Input
                type="text"
                placeholder="Enter your username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                focusBorderColor="blue.400"
                variant="filled"
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel color="gray.700">Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                focusBorderColor="blue.400"
                variant="filled"
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              _hover={{ bg: "blue.600" }}
            >
              Login
            </Button>

            <Text fontSize="sm" color="gray.500" textAlign="center">
              Don't have an account?{" "}
              <Link href="/signup" color="blue.500">
                Sign Up
              </Link>
            </Text>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
