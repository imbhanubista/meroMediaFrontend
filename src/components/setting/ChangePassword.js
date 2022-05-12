import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNav from "../useableComponent/AdninNav";
import { useForm } from "react-hook-form";
import { changePassword } from "../../services/apiServices";
import { toast } from "react-toastify";
import Navbar from "../useableComponent/Navbar";
import { useSelector } from "react-redux";

const ChangePassword = () => {
  let navigateRoute = useNavigate();
  const selector = useSelector((state) => state.reducer);
  // api data
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    let changePassApi = await changePassword(data);
    if (changePassApi.type === "error") {
      toast.error(changePassApi.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.success(changePassApi.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigateRoute("/settings");
    }
  };

  return (
    <>
      {selector.isAdmin === true ? (
        <AdminNav>
          <Container
            bg="#02054B"
            maxW="full"
            mt={0}
            centerContent
            overflow="hidden"
          >
            <Flex>
              <Box
                bg="#02054B"
                color="gray.300"
                borderRadius="lg"
                m={{ sm: 4, md: 16, lg: 10 }}
                p={{ sm: 5, md: 5, lg: 16 }}
              >
                <Box p={4}>
                  <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                    <WrapItem>
                      <Box>
                        <Heading>Change Password</Heading>
                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                          Password must contain
                        </Text>
                        <Box>
                          <VStack alignItems="flex-start" mt={4}>
                            <strike>
                              <Text>At least 6 character</Text>
                            </strike>
                            <strike>
                              <Text>At least 1 upper case character</Text>
                            </strike>
                            <strike>
                              <Text>At least 1 lower case character</Text>
                            </strike>
                            <strike>
                              <Text>At least 1 number</Text>
                            </strike>
                          </VStack>
                        </Box>
                      </Box>
                    </WrapItem>
                    <WrapItem>
                      <Box bg="gray.300" borderRadius="lg">
                        {/* form data */}

                        <Box m={10} color="#0B0E3F" p={6}>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <VStack spacing={5}>
                              <Input
                                type="password"
                                size={"md"}
                                placeholder="Current Password"
                                textAlign={"center"}
                                {...register("password")}
                              />
                              <Input
                                type="password"
                                size={"md"}
                                placeholder="New Password"
                                textAlign={"center"}
                                {...register("nPassword")}
                              />
                              <Input
                                type="password"
                                size={"md"}
                                placeholder="Repeat Password"
                                textAlign={"center"}
                                {...register("rPassword")}
                              />
                              <Button
                                colorScheme={"telegram"}
                                width="full"
                                type="submit"
                              >
                                Submit
                              </Button>
                            </VStack>
                          </form>
                        </Box>
                      </Box>
                    </WrapItem>
                  </Wrap>
                </Box>
                <Button
                  _hover={"twitter"}
                  variant="outline"
                  mt="8"
                  color={"white"}
                  onClick={() => navigateRoute("/settings")}
                >
                  Setting
                </Button>
              </Box>
            </Flex>
          </Container>
        </AdminNav>
      ) : (
        <>
          <Navbar />
          <Container
            bg="#02054B"
            maxW="full"
            mt={0}
            centerContent
            overflow="hidden"
          >
            <Flex>
              <Box
                bg="#02054B"
                color="gray.300"
                borderRadius="lg"
                m={{ sm: 4, md: 16, lg: 10 }}
                p={{ sm: 5, md: 5, lg: 16 }}
              >
                <Box p={4}>
                  <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                    <WrapItem>
                      <Box>
                        <Heading>Change Password</Heading>
                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                          Password must contain
                        </Text>
                        <Box>
                          <VStack alignItems="flex-start" mt={4}>
                            <strike>
                              <Text>At least 6 character</Text>
                            </strike>
                            <strike>
                              <Text>At least 1 upper case character</Text>
                            </strike>
                            <strike>
                              <Text>At least 1 lower case character</Text>
                            </strike>
                            <strike>
                              <Text>At least 1 number</Text>
                            </strike>
                          </VStack>
                        </Box>
                      </Box>
                    </WrapItem>
                    <WrapItem>
                      <Box bg="gray.300" borderRadius="lg">
                        {/* form data */}

                        <Box m={10} color="#0B0E3F" p={6}>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <VStack spacing={5}>
                              <Input
                                type="password"
                                size={"md"}
                                placeholder="Current Password"
                                textAlign={"center"}
                                {...register("password")}
                              />
                              <Input
                                type="password"
                                size={"md"}
                                placeholder="New Password"
                                textAlign={"center"}
                                {...register("nPassword")}
                              />
                              <Input
                                type="password"
                                size={"md"}
                                placeholder="Repeat Password"
                                textAlign={"center"}
                                {...register("rPassword")}
                              />
                              <Button
                                colorScheme={"telegram"}
                                width="full"
                                type="submit"
                              >
                                Submit
                              </Button>
                            </VStack>
                          </form>
                        </Box>
                      </Box>
                    </WrapItem>
                  </Wrap>
                </Box>
                <Button
                  _hover={"twitter"}
                  variant="outline"
                  mt="8"
                  color={"white"}
                  onClick={() => navigateRoute("/settings")}
                >
                  Setting
                </Button>
              </Box>
            </Flex>
          </Container>
        </>
      )}
    </>
  );
};

export default ChangePassword;
