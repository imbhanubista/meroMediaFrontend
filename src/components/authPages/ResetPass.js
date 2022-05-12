import { Box, Center, Heading, Image, InputGroup, SimpleGrid, Text, Input,InputRightElement,Button } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../images/reset.svg";
import ReactCodeInput from 'react-code-input'
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { handleResetPass } from "../../services/apiServices";
import { toast } from "react-toastify";
import Navbar from '../../components/useableComponent/Navbar'
import Footer from '../../components/useableComponent/Footer'
const ResetPass = () => {
  // for email
  const location = useLocation()
  let query = new URLSearchParams(location.search)
  console.log(query,"Hello here")

    // password section handle
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    // state to store code
    const [code,setCode] = useState("")
    // handle code input
    const handleCode = (e)=>{
      setCode(e)
    }
    // navigate after password reset
    const loginNav = useNavigate()

    // react-hook-form
    const {register, handleSubmit} = useForm()
    const onSubmit = async(data)=>{
      let resetApi = await handleResetPass({...data,code:code,email:query.get("email")})
      if(resetApi.type === "error"){
        toast.error(resetApi.msg,{
          position: toast.POSITION.TOP_CENTER
        })
      }
      else{
        toast.success("Password has been changed",{
          position: toast.POSITION.TOP_RIGHT
        })
        loginNav('/login')
      }
    }
  return (
    <div>
      <Navbar/>
      <SimpleGrid>
        <Box>
          <Center>
            <Image src={logo} alt="logo here" boxSize={60} />
          </Center>
        </Box>

        <Box width={"80"} m="auto">
        <Heading fontSize={"35"} color="#052F40"> Reset Password </Heading>
        <Text fontSize={"15"} color="gray.500">Enter the <b>Code</b> that is sent to  </Text>
        <Text fontSize="20" mb={4} color="blue.400"> {query.get("email")} </Text>
        <ReactCodeInput type="number" field={6} onChange={handleCode}/>
      
      <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup mt={4}>
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

            {/* conform password section */}
              <InputGroup mt={4}>
        <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Conform Password"
                  textAlign={"center"}
                  variant="filled"
                  {...register("cpassword")}
                />
                <InputRightElement width="3.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button type="submit" colorScheme={"twitter"} mt="4">Conform</Button>
      </form>
        </Box>
      </SimpleGrid>
      <Footer/>
    </div>
  );
};

export default ResetPass;
