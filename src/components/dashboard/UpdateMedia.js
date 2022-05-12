import {
  Container,
  Flex,
  Box,
  Wrap,
  WrapItem,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  IconButton,
  InputGroup,
  Input,
  Divider,
  Textarea,
  Image,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import AdminNav from "../useableComponent/AdninNav";
import { MdFacebook } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const MediaCreate = () => {
  // for useRef
  const thumbRef = useRef();
  const preRef = useRef();
  const actRef = useRef();
  // function for button used by ref
  const refThumb = () => {
    thumbRef.current.click();
  };
  const refPre = () => {
    preRef.current.click();
  };
  const refAct = () => {
    actRef.current.click();
  };

  // state to save files
  const [imageStore, setImageStore] = useState("");
  const [preVideo, setPreVideo] = useState("");
  const [actVideo, setactVideo] = useState("");

  // function to get data from thumbnail,preview video and actual video
  const thumbFtn = (e) => {
    if (e.target.files) {
      setImageStore(e.target.files[0]);
    }
  };
  const preFtn = (e) => {
    if (e.target.files) {
      setPreVideo(e.target.files[0]);
    }
  };
  const actFtn = (e) => {
    if (e.target.files) {
      setactVideo(e.target.files[0]);
    }
  };
  // useform to submit form data
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <AdminNav>
      <Container
        bg={"#9DC4FB"}
        maxW="full"
        mt={0}
        centerContent
        overflow={"hidden"}
      >
        <Flex>
          <Box
            bg={"#02054B"}
            color="white"
            borderRadius={"lg"}
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={1}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Edit Media</Heading>
                    <Text color={"gray.400"}>You can update media here</Text>
                    <Box p={8} borderRadius={"lg"} width="80">
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Heading>This feature coming soon...</Heading>
                        {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <InputGroup borderColor={"#E0E1E7"} mb="3" mt={4}>
                            <Input
                              type="text"
                              size={"md"}
                              placeholder="Media title here !!!"
                              textAlign={"center"}
                              {...register("title")}
                            />
                          </InputGroup>
                          <InputGroup borderColor={"#E0E1E7"} mb="3">
                            <Textarea
                              type="text"
                              size={"md"}
                              placeholder="Media description here !!!"
                              textAlign={"center"}
                              {...register("description")}
                            />
                          </InputGroup>
                          <InputGroup borderColor={"#E0E1E7"} mb="3">
                            <Input
                              type="number"
                              size={"md"}
                              placeholder="Media price here !!!"
                              textAlign={"center"}
                              {...register("price")}
                            />
                          </InputGroup>
                          <InputGroup borderColor={"#E0E1E7"} mb="3">
                            <Input
                              type="text"
                              size={"md"}
                              placeholder="Media tag here !!!"
                              textAlign={"center"}
                              {...register("tag")}
                            />
                          </InputGroup>
                          <Button
                            type="submit"
                            mt="4"
                            colorScheme={"twitter"}
                            isLoading={isSubmitting}
                          >
                            Submit
                          </Button>
                        </form> */}
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <Link to={"www.twitter.com/imbhanubista"}>
                        <IconButton
                          variant={"ghost"}
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<MdFacebook size={"28px"} />}
                        />
                      </Link>

                      <IconButton
                        variant={"ghost"}
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size={"28px"} />}
                      />
                      <IconButton
                        variant={"ghost"}
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsLinkedin size={"28px"} />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                {/* upload media field */}
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </AdminNav>
  );
};

export default MediaCreate;
