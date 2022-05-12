import { EmailIcon } from "@chakra-ui/icons";
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
  FormLabel,
  InputGroup,
  Input,
  Divider,
  Textarea,
  Image,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import AdminNav from "../useableComponent/AdninNav";
import { MdFacebook, MdLocationOn } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { createMedia } from "../../services/apiServices";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

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

  // for navigation
  const homeNav = useNavigate();
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
    let formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("tag", data.tag);
    formData.append("thumbnail", imageStore);
    formData.append("previewVideo", preVideo);
    formData.append("actualVideo", actVideo);
    let createMediaApi = await createMedia(formData);
    console.log(createMediaApi);
    if (createMediaApi.type === "error") {
      toast.error(createMediaApi.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.success(createMediaApi.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
      homeNav("/home");
    }
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
                    <Heading>Add Media</Heading>
                    <Text color={"gray.400"}>You can add new media here</Text>
                    <Box p={8} borderRadius={"lg"} width="80">
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        {/* <Button 
                                    size={"md"}
                                    height="48px"
                                    // width={"350px"}
                                    variant="ghost"
                                    color={"#DCE2FF"}
                                    _hover={{border:"2px solid #1C6FEB"}}
                                    leftIcon={<EmailIcon color={"#1970F1"} size="20px"/>}
                                    >imwhiteshadow10@gmail.com</Button>
                                    <Button
                                    size={"md"}
                                    height="48px"
                                    variant={"ghost"}
                                    color="#DCE2FF"
                                    _hover={{border:"2px solid #1C6FEB"}}
                                    leftIcon={<MdLocationOn color='#1970F1' size={"20px"}/>}>
                                        Kathmandu, Nepal
                                    </Button> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                        </form>
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
                <WrapItem>
                  <Box bg={"white"} borderRadius="lg" width={"80"}>
                    <Box m={8} color="#0B0E3F">
                      <Text fontSize={"25"}>Upload Media </Text> <Divider />
                      <VStack spacing={5}>
                        {/* <FormLabel>Media Title:</FormLabel> */}

                        {/* thumbnail start */}
                        <InputGroup borderColor={"#E0E1E7"} mb="3">
                          <Input
                            ref={thumbRef}
                            onChange={thumbFtn}
                            display="none"
                            type="file"
                            size={"md"}
                            placeholder="Media thumbnail here !!!"
                            textAlign={"center"}
                          />
                        </InputGroup>
                        <Button
                          onClick={refThumb}
                          width="full"
                          colorScheme={"facebook"}
                        >
                          {" "}
                          Thumbnail
                        </Button>
                        {imageStore === "" ? (
                          ""
                        ) : (
                          <Image
                            src={URL.createObjectURL(imageStore)}
                            boxSize="160"
                            borderRadius={"80"}
                          />
                        )}
                        {/* thumbnail end */}

                        {/* start preview video */}
                        <InputGroup borderColor={"#E0E1E7"} mb="3">
                          <Input
                            ref={preRef}
                            onChange={preFtn}
                            display="none"
                            type="file"
                            size={"md"}
                            placeholder="Media preview video here !!!"
                            textAlign={"center"}
                          />
                        </InputGroup>
                        <Button
                          onClick={refPre}
                          width="full"
                          colorScheme={"facebook"}
                        >
                          Preview Video
                        </Button>

                        {preVideo === "" ? (
                          ""
                        ) : (
                          <video
                            controls
                            src={URL.createObjectURL(preVideo)}
                            title="Preview video"
                          />
                        )}

                        {/* end preview video */}

                        {/* start actual video */}

                        <InputGroup borderColor={"#E0E1E7"} mb="3">
                          <Input
                            ref={actRef}
                            onChange={actFtn}
                            display="none"
                            type="file"
                            size={"md"}
                            placeholder="Media Original video here !!!"
                            textAlign={"center"}
                          />
                        </InputGroup>
                        <Button
                          onClick={refAct}
                          width="full"
                          colorScheme={"facebook"}
                        >
                          Original Video
                        </Button>
                        {actVideo === "" ? (
                          ""
                        ) : (
                          <video
                            controls
                            src={URL.createObjectURL(actVideo)}
                            title="Original video"
                          />
                        )}

                        {/* end actual video */}
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </AdminNav>
  );
};

export default MediaCreate;
