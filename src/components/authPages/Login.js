import React, { useEffect } from "react";
import {
  SimpleGrid,
  Box,
  Stack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  InputRightElement,
  Center,
  Image,
} from "@chakra-ui/react";
import svg from "../../images/logiN.svg";
import Navbar from "../../components/useableComponent/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { LockIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { handleLoginApi } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { actionReducer } from "../../redux/actions/actionReducer";
import { useNavigate } from "react-router-dom";
import Footer from "../useableComponent/Footer";

const Login = () => {
  // dispatch to send data to the redux store
  const dispatch = useDispatch();
  // navigate to home
  const homeNav = useNavigate();

  // to get data from the redux store
  // after login user cannot return to login section until user get logout
  const selector = useSelector(state=>state.reducer)
  useEffect(()=>{
    if(Object.keys(selector).length>0){
      if(selector.isAdmin === true){
        homeNav('/home')
      }
      else{
        homeNav('/')
      }
    }
  },[])
  // forgetnav
  const forget = useNavigate();
  const forgetNav = () => {
    forget("/forget");
  };
  const sign = useNavigate()
  const signNav =()=>{
    sign('/signup')
  }
  // password section handle
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    let loginApi = await handleLoginApi(data);
    if (loginApi.type === "error") {
      toast.error(loginApi.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.success(loginApi.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(loginApi.data);
      dispatch(actionReducer(loginApi.data));

      if(loginApi.data.isAdmin === true){
        homeNav("/home");
      }
      else{
        homeNav('/')
      }
    }
  };
  return (
    <div>
      <Navbar />
      <SimpleGrid columns={"2"}>
        <Box p={10}>
          <Center>
            <Image src={svg} alt="Login logo" width={"60%"} mt="30" />
          </Center>
        </Box>
        <Box p={10} ml="20" pl={30} mt="30" pr={40} width="xl">
          <Heading mb={6} color="#257275">
            Sign In
          </Heading>
          {/* form section */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <InputGroup>
                <InputLeftElement
                  pointerEvents={"none"}
                  children={<FaUserCircle />}
                />
                <Input
                  placeholder="Username"
                  textAlign={"center"}
                  variant="filled"
                  {...register("username")}
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
                  variant="filled"
                  {...register("password")}
                />
                <InputRightElement width="3.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button
                type="submit"
                colorScheme={"twitter"}
                isLoading={isSubmitting}
              >
                Login
              </Button>
            </Stack>
          </form>
          <Button
            mt={4}
            variant="link"
            fontSize="15"
            fontWeight={"semibold"}
            onClick={forgetNav}
          >
            Forget Password?
          </Button>
          <Text mt={2}>
            <em>Not a User?</em>
          </Text>
          <Button fontSize={"15"} variant="link" color="blue.600" onClick={signNav}>
            Create a new account?
          </Button>
        </Box>
      </SimpleGrid>
      <Footer />
    </div>
  );
};

export default Login;
