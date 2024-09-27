import React, { useState } from 'react';
import {
  Box, Button, FormControl, FormLabel, Input, Select, VStack, useToast, FormErrorMessage,
  IconButton,
  Icon
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons'

function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({});
  const toast = useToast();
  const navigate = useNavigate();

  const countries = {
    India: {
      states: {
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
        Kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode'],
        Karnataka: ['Bangalore', 'Mysore', 'Mangalore'],
      },
    },
    USA: {
      states: {
        California: ['Los Angeles', 'San Francisco', 'San Diego'],
        Texas: ['Houston', 'Dallas', 'Austin'],
        'New York': ['New York City', 'Buffalo', 'Rochester'],
      },
    },
  };

  const validateField = (field, value) => {
    switch (field) {
      case 'firstName':
        return /^[A-Za-z]+$/.test(value) ? '' : "First Name should only contain letters";
      case 'lastName':
        return /^[A-Z]$/.test(value) ? '' : "Last Name should be exactly one uppercase letter without any numbers";
      case 'email':
        return /^[^\s@]+@gmail\.com$/.test(value) ? '' : "Email must be a valid Gmail account without spaces";
      case 'password':
        return /^\d{8}$/.test(value) ? '' : "Password must be exactly 8 digits long and only contain numbers";
      case 'pincode':
        return /^\d{6}$/.test(value) ? '' : "Pincode must be exactly 6 digits long and only contain numbers";
      case 'phoneNo':
        return /^\d{10}$/.test(value) ? '' : "Phone number must be exactly 10 digits long and only contain numbers";
      case 'country':
        return value ? '' : "Please select a country";
      case 'state':
        return value ? '' : "Please select a state";
      case 'city':
        return value ? '' : "Please select a city";
      default:
        return '';
    }
  };

  const handleBlur = (field, value) => {
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleInputChange = (setter, field, value) => {
    setter(value);
    setErrors(prev => ({ ...prev, [field]: '' })); 
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;

    ['firstName', 'lastName', 'email', 'password', 'pincode', 'phoneNo', 'country', 'state', 'city'].forEach(field => {
      const error = validateField(field, eval(field));
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    if (!firstName || !lastName || !email || !password || !pincode || !phoneNo || !address || !country || !state || !city) {
      newErrors.general = "Please fill all fields";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      toast({
        title: "Successfully registered!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 2500);

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPincode('');
      setPhoneNo('');
      setAddress('');
      setCountry('');
      setState('');
      setCity('');
      setErrors({});
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderRadius="lg" boxShadow="md" bg="white">
            <Box
        as="div"
        cursor="pointer"
        onClick={() => navigate("/")} 
        mb={4}
      >
        <Icon as={ChevronLeftIcon} boxSize={6} />
      </Box>
      <form onSubmit={handleSignUp}>
        <VStack spacing={4}>
          <FormControl id="firstName" isRequired isInvalid={!!errors.firstName}>
            <FormLabel>First Name</FormLabel>
            <Input
              value={firstName}
              onChange={(e) => handleInputChange(setFirstName, 'firstName', e.target.value.replace(/[^A-Za-z]/g, ''))}
              onBlur={(e) => handleBlur('firstName', e.target.value)}
              placeholder="Enter your first name"
            />
            <FormErrorMessage>{errors.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl id="lastName" isRequired isInvalid={!!errors.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Input
              value={lastName}
              onChange={(e) => handleInputChange(setLastName, 'lastName', e.target.value.toUpperCase())}
              onBlur={(e) => handleBlur('lastName', e.target.value)}
              placeholder="Enter your last name"
              maxLength={1}
            />
            <FormErrorMessage>{errors.lastName}</FormErrorMessage>
          </FormControl>

          <FormControl id="email" isRequired isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => handleInputChange(setEmail, 'email', e.target.value.replace(/\s/g, ''))}
              onBlur={(e) => handleBlur('email', e.target.value)}
              placeholder="Enter your Gmail address"
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl id="password" isRequired isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => handleInputChange(setPassword, 'password', e.target.value.replace(/\D/g, ''))}
              onBlur={(e) => handleBlur('password', e.target.value)}
              placeholder="Enter your password"
              maxLength={8}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>

          <FormControl id="pincode" isRequired isInvalid={!!errors.pincode}>
            <FormLabel>Pincode</FormLabel>
            <Input
              value={pincode}
              onChange={(e) => handleInputChange(setPincode, 'pincode', e.target.value.replace(/\D/g, ''))}
              onBlur={(e) => handleBlur('pincode', e.target.value)}
              placeholder="Enter your pincode"
              maxLength={6}
            />
            <FormErrorMessage>{errors.pincode}</FormErrorMessage>
          </FormControl>
          <FormControl id="phoneNo" isRequired isInvalid={!!errors.phoneNo}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              value={phoneNo}
              onChange={(e) => handleInputChange(setPhoneNo, 'phoneNo', e.target.value.replace(/\D/g, ''))}
              onBlur={(e) => handleBlur('phoneNo', e.target.value)}
              placeholder="Enter your phone number"
              maxLength={10}
            />
            <FormErrorMessage>{errors.phoneNo}</FormErrorMessage>
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            />
          </FormControl>
          <FormControl id="country" isRequired isInvalid={!!errors.country}>
            <FormLabel>Country</FormLabel>
            <Select
              placeholder="Select country"
              value={country}
              onChange={(e) => {
                handleInputChange(setCountry, 'country', e.target.value);
                setState(''); 
                setCity(''); 
              }}
            >
              {Object.keys(countries).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.country}</FormErrorMessage>
          </FormControl>

          <FormControl id="state" isRequired isInvalid={!!errors.state}>
            <FormLabel>State</FormLabel>
            <Select
              placeholder="Select state"
              value={state}
              onChange={(e) => {
                handleInputChange(setState, 'state', e.target.value);
                setCity(''); 
              }}
              disabled={!country} 
            >
              {country &&
                Object.keys(countries[country].states).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
            </Select>
            <FormErrorMessage>{errors.state}</FormErrorMessage>
          </FormControl>

          <FormControl id="city" isRequired isInvalid={!!errors.city}>
            <FormLabel>City</FormLabel>
            <Select
              placeholder="Select city"
              value={city}
              onChange={(e) => handleInputChange(setCity, 'city', e.target.value)}
              disabled={!state} 
            >
              {state &&
                countries[country].states[state].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </Select>
            <FormErrorMessage>{errors.city}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">
            Sign Up
          </Button>
          {errors.general && <FormErrorMessage>{errors.general}</FormErrorMessage>}
        </VStack>
      </form>
    </Box>
  );
}

export default SignUpPage;
