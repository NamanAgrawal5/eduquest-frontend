import { useNavigate } from 'react-router-dom';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Stack,
    useColorModeValue,
    Select,
    Avatar,
    AvatarBadge,
    IconButton,
    Input,
    Center,
  } from '@chakra-ui/react';
  import { SmallCloseIcon } from '@chakra-ui/icons';
  
  export default function EditProfile2() {
    const navigate = useNavigate();
    const handleNext = ()=>{
        navigate('/editprofile3');
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            User Profile Edit
          </Heading>
          <FormControl id="domain" isRequired>
            <FormLabel>Domains</FormLabel>
            <Select
              placeholder="Select your Domain"
              _placeholder={{ color: 'gray.500' }}
            >
              <option value="3">FullStack development</option>  
              <option value="3">Front-end development</option>
              <option value="5">Back-end development</option>
              <option value="4">Machine Learning</option>
              <option value="3">Mobile Development</option>
              <option value="3">Comeptitive Programming</option>
              <option value="3">AR/VR</option>
            </Select>
          </FormControl>
            <FormLabel>Profiles</FormLabel>
            <Stack spacing={3}>
              <FormControl>
                <FormLabel>Github</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter link to your github profile"
                  borderColor="gray.500"
                  focusBorderColor="gray.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel>LinkedIn</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter link to your LinkedIn profile"
                  borderColor="yellow.500"
                  focusBorderColor="yellow.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel>CodeChef</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter link to your CodeChef profile"
                  borderColor="gray.500"
                  focusBorderColor="gray.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Codeforces</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter link to your CodeForces profile"
                  borderColor="gray.500"
                  focusBorderColor="gray.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel>LeetCode</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter link to your CodeChef profile"
                  borderColor="gray.500"
                  focusBorderColor="gray.500"
                />
              </FormControl>
            </Stack>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}>
              Cancel
            </Button>
            <Button onClick={handleNext}
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}>
              Next
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }
  