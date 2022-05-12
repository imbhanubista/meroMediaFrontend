import {
  Box,
  SimpleGrid,
  Stack,
  Input,
  Heading,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Text,
  Image
} from "@chakra-ui/react";
import React from "react";
import { PhoneIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import {useForm} from 'react-hook-form'
import svg from "../../images/data.svg";
import Navbar from '../../components/useableComponent/Navbar'
import { handleSingUpApi } from "../../services/apiServices";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Footer from '../useableComponent/Footer'

const Signup = () => {
  // navigator
  const login =  useNavigate()
  const loginNav =()=>{
    login('/login')
  }
  
  // password section handle
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  // handle form
  const {register,handleSubmit } = useForm()
  const onSubmit = async(data)=>{
    let apiData = await handleSingUpApi(data)
  if(apiData.type === "error"){
toast.error(apiData.msg,{
  position: toast.POSITION.TOP_RIGHT
})
  }
  else{
    toast.success(apiData.msg,{
      position:toast.POSITION.TOP_CENTER
    })
  }
  }
  return (
    <>
   <div>
     <Navbar/>
      {/* <Box p={20}> */}
      <SimpleGrid columns={2} spacing="4">
        <Box mt={20}>
          {" "}
          <Image src={svg} alt="Hello" ml={40} />{" "}
        </Box>
        <Box boxSize={"80"}mt="20" shadow={"lg"} borderRadius="15">
          <Heading p={4} color="#257275">
            Sign Up
          </Heading>
          {/* form section */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack p={2}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents={"none"}
                  children={<FaUserAlt color="gray.300" />}
                />
                <Input
                  placeholder="Enter your name !"
                  variant={"filled"}
                  textAlign="center"
                  {...register("name")}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents={"none"}
                  children={<FaUserCircle color="gray.300" />}
                />
                <Input
                  placeholder="Enter your username !"
                  variant={"filled"}
                  textAlign="center"
                  {...register("username")}
                />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents={"none"}
                  children={<EmailIcon color={"black.500"} />}
                />
                <Input
                  placeholder="Enter your email !"
                  variant={"filled"}
                  textAlign="center"
                  {...register("email")}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents={"none"}
                  children={<PhoneIcon color={"black.500"} />}
                />
                <Input
                  placeholder="Enter your phone !"
                  type={"tel"}
                  variant={"filled"}
                  textAlign="center"
                  {...register("phone")}
                />
              </InputGroup>

              <InputGroup size="md">
                <InputLeftElement
                  pointerEvents={"none"}
                  children={<LockIcon color={"black.500"} />}
                />
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  textAlign={"center"}
                  {...register("password")}
                />
                <InputRightElement width="3.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button variant={"solid"} type="submit" colorScheme={"twitter"}>
                Sign Up
              </Button>
            </Stack>
          </form>
          <Text mb={2}>
            {" "}
            <em>Already a User?</em>{" "}
          </Text>
          <Button mb={4} variant="link" onClick={loginNav}>
            {" "}
            Sign In
          </Button>
        </Box>
      </SimpleGrid>
    {/* </Box> */}
   </div>
   <Footer mt="10"/>

   </>
  );
};

export default Signup;
