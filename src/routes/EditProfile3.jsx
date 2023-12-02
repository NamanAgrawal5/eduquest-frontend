import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Stack,
    useColorModeValue,
    Select,
    Input,
  } from '@chakra-ui/react';
  
  export default function EditProfile3() {
    const technicalSkills = [
      'ReactJS',
      'Angular',
      'Node.js',
      'Express.js',
      'Django',
      'Flask',
      'Spring Boot',
      'Vue.js',
      'Machine Learning',
      'Deep Learning',
      'Data Science',
      'GraphQL',
      'AWS',
      'Firebase',
      'MongoDB',
      'PostgreSQL',
      'Java',
      'Python',
      'C++',
      'JavaScript',
    ];
  
    const internshipPositions = [
      'Software Developer Intern',
      'Data Science Intern',
      'Frontend Developer Intern',
      'Backend Developer Intern',
      'Full Stack Developer Intern',
      'Mobile App Developer Intern',
      'UX/UI Design Intern',
      'Cybersecurity Intern',
      'DevOps Intern',
      'Machine Learning Intern',
      'AI Research Intern',
      'Cloud Computing Intern',
      'Blockchain Developer Intern',
      'Game Development Intern',
      'Web Development Intern',
      'Network Engineer Intern',
      'IT Support Intern',
      'Database Administrator Intern',
      'Software Testing Intern',
      'AR/VR Developer Intern',
    ];
  
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
          <FormControl id="skills" isRequired>
            <FormLabel>Technical Skills</FormLabel>
            <Select
              placeholder="Select your Skills"
              _placeholder={{ color: 'gray.500' }}>
              {technicalSkills.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id="internships" mt={4} isRequired>
            <FormLabel>Internships</FormLabel>
            <Select
              placeholder="Select your Internship Position"
              _placeholder={{ color: 'gray.500' }}>
              {internshipPositions.map((position, index) => (
                <option key={index} value={position}>
                  {position}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id="socialMedia" mt={4}>
            <FormLabel>Social Media</FormLabel>
            <Stack spacing={3}>
              <FormControl>
                <FormLabel>Twitter</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter link to your Twitter profile"
                  borderColor="blue.500"
                  focusBorderColor="blue.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Alma Connect</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter link to your Alma Connect profile"
                  borderColor="green.500"
                  focusBorderColor="green.500"
                />
              </FormControl>
            </Stack>
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']} mt={6}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}>
              Cancel
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }
  