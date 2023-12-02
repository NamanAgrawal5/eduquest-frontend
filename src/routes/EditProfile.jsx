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
  
  export default function EditProfile() {
    const navigate = useNavigate();
    const handleNext = ()=>{
        navigate('/editprofile2');
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
          <FormControl id="userIcon">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src="https://preview.redd.it/p8dctqn4y4p71.jpg?width=640&crop=smart&auto=webp&s=5817125db231bf50618885802c3dd568fd9da1b1">
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Button w="full">Change Icon</Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="codeChefStars" isRequired>
            <FormLabel>CodeChef Stars</FormLabel>
            <Select
              placeholder="Select CodeChef Stars"
              _placeholder={{ color: 'gray.500' }}
            >
              <option value="3">7 Stars</option>  
              <option value="3">6 Stars</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="3">2 Stars</option>
              <option value="3">1 Stars</option>
            </Select>
          </FormControl>
          <FormControl id="codeforcesRating" isRequired>
            <FormLabel>Codeforces Rating</FormLabel>
            <Select
              placeholder="Select Codeforces Rating"
              _placeholder={{ color: 'gray.500' }}
            >
              <option value="Newbie">Newbie</option>
              <option value="Pupil">Pupil</option>
              <option value="Specialist">Specialist</option>
              <option value="Specialist">Expert</option>
              <option value="Specialist">Candidate Master</option>
              <option value="Specialist">Master</option>
              <option value="Specialist">International Master</option>
              <option value="Specialist">GrandMaster</option>
              <option value="Specialist">International GrandMaster</option>
              <option value="Specialist">Legendary GrandMaster</option>
            </Select>
          </FormControl>
          <FormControl id="leetCodeSection">
            <FormLabel>LeetCode</FormLabel>
            <Stack spacing={3}>
              <FormControl>
                <FormLabel>Easy Questions</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter number of easy questions done"
                  borderColor="green.500"
                  focusBorderColor="green.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Medium Questions</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter number of medium questions done"
                  borderColor="yellow.500"
                  focusBorderColor="yellow.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Hard Questions</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter number of hard questions done"
                  borderColor="red.500"
                  focusBorderColor="red.500"
                />
              </FormControl>
            </Stack>
          </FormControl>
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
  