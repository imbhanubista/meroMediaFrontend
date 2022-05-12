import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Nav from "../useableComponent/Navbar";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import { mediaDetail, mediaPurchase } from "../../services/apiServices";
import { baseUrl } from "../../services/apis.helper";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const DetailMedia = () => {
  const navigateRoute = useNavigate();
  // to get media id
  const { id } = useParams();

  // state to save data
  const [mediaData, setMediaData] = useState([]);
  // to make sure data is loading
  const [loading, setLoading] = useState(true);
  const detailMediaApi = async () => {
    let getDetailApi = await mediaDetail(id);
    if (getDetailApi.type === "error") {
      <Alert status="error">
        <AlertIcon />
        <AlertTitle> Your browser is outdated! </AlertTitle>
      </Alert>;
    } else {
      setMediaData(getDetailApi.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    detailMediaApi();
  }, []);

  // to check whether the user is logged in for purchase or not
  const selector = useSelector((state) => state.reducer);

  const purchaseHandler = async (id) => {
    if (selector.length < 1) {
      toast.error("You must have to login to purchase media", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      let purchaseApi = await mediaPurchase(id);
      if (purchaseApi.type === "error") {
        toast.error(purchaseApi.msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.success(purchaseApi.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        navigateRoute("/purchase");
      }
    }
  };

  return (
    <>
      <Nav />
      {loading ? (
        <>
          <Spinner size={"xl"} />
          <Text>Data is loading...</Text>
        </>
      ) : (
        <>
          {mediaData.map((data, index) => {
            return (
              <Container maxW={"7xl"} key="index">
                <VStack
                  columns={{ base: 1, lg: 2 }}
                  spacing={{ base: 2, md: 4 }}
                  py={{ base: 4, md: 8 }}
                >
                  <Flex>
                    <Button
                      onClick={() => navigateRoute("/")}
                      variant={"link"}
                      color="black"
                    >
                      <ArrowBackIcon fontSize={"30"} />{" "}
                      <Text>Go back to Dashboard</Text>
                    </Button>
                  </Flex>
                  <Flex>
                    <video
                      src={`${baseUrl}${data.previewVideo}`}
                      alt="featured video"
                      fit={"cover"}
                      align="center"
                      w={"100%"}
                      controls
                      h={{ base: "100%", sm: "400px", lg: "500px" }}
                    />
                  </Flex>
                  <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as="header">
                      <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                      >
                        {data.title}
                      </Heading>
                      <Text color={"gray.400"} fontSize="25">
                        {" "}
                        {data.tag}
                      </Text>
                      <Text
                        // color={useColorModeValue("gray.900", "gray.400")}
                        fontWeight={300}
                        fontSize={"2xl"}
                        color="gray.900"
                      >
                        Rs. {data.price}
                      </Text>
                      <Text
                        // color={useColorModeValue("gray.500", "gray.400")}
                        color="gray.600"
                        fontSize={"25"}
                        fontWeight={"300"}
                      >
                        {" "}
                        {data.description}
                      </Text>
                    </Box>
                    {/* <Stack
                      spacing={{ base: 2, sm: 4 }}
                      direction={"column"}
                      divider={
                        <StackDivider
                        
                        // borderColor={useColorModeValue("gray.200", "gray.600")}
                        />
                      }
                    >
                      <VStack spacing={{ base: "4", sm: "6" }}>
                      
                      </VStack> */}
                    <Button
                      colorScheme={"telegram"}
                      onClick={() => purchaseHandler(data._id)}
                    >
                      Purchase
                    </Button>
                    {/* </Stack> */}
                  </Stack>
                </VStack>
              </Container>
            );
          })}
        </>
      )}
    </>
  );
};

export default DetailMedia;
