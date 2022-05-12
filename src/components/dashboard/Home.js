import { AddIcon, MdCheckCircle } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  List,
  Table,
  Text,
  Thead,
  Tr,
  useColorModeValue,
  Th,
  Tbody,
  Td,
  ListItem,
  ListIcon,
  Select,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FcBriefcase,
  FcBusinesswoman,
  FcCalculator,
  FcSelfie,
} from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { dashContent } from "../../services/apiServices";
import AdminNav from "../useableComponent/AdninNav";

const Home = () => {
  // create thumb navigation
  const thumb = useNavigate();
  const thumbNav = () => {
    thumb("/create_thumb");
  };
  // nav for media create
  const media = useNavigate();
  const mediaNav = () => {
    media("/create_media");
  };
  // to save dashboard data
  const [dashData, setDashdata] = useState("");

  // to get the dashboard data from the api
  const dashboardApi = async () => {
    let getDashboardApi = await dashContent();
    if (getDashboardApi.type === "error") {
      toast.error(getDashboardApi.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setDashdata(getDashboardApi.data);
    }
  };

  useEffect(() => {
    dashboardApi();
  }, []);

  return (
    <AdminNav>
      {/* <Heading float={"left"} fontSize="2xl" >Dashboard</Heading> */}
      <Flex>
        <Heading pl={1} color="#257275">
          Dashboard
        </Heading>
      </Flex>
      <br />
      <SimpleGrid
        columns={4}
        bg={useColorModeValue("gray.200", "gray.600")}
        p="6"
        m={"auto"}
        mb="2"
      >
        {/* start of total media */}
        <Box
          maxW={"320px"}
          width="full"
          bg={useColorModeValue("white", "gray.600")}
          boxShadow="2xl"
          textAlign={"center"}
          borderRadius="15"
          p="6"
        >
          <FcBriefcase size={"30"} />
          <Text fontWeight={600} color="gray.600" mt={2} fontSize="35">
            {" "}
            Total Media
          </Text>
          <Heading>+{dashData.totalMedia}</Heading>
          <Divider />
          <Button
            variant={"link"}
            color="blue.400"
            fontSize={15}
            onClick={mediaNav}
          >
            {" "}
            <AddIcon /> Add new media{" "}
          </Button>
        </Box>
        {/* end of total media */}

        {/* start of total user */}

        <Box
          maxW={"320px"}
          width="full"
          bg={useColorModeValue("white", "gray.300")}
          boxShadow="2xl"
          textAlign={"center"}
          borderRadius="15"
          p={6}
        >
          <FcBusinesswoman size={"30"} />
          <Text fontWeight={600} color="twitter.500" fontSize={35}>
            {" "}
            Total Users{" "}
          </Text>
          <Heading> + {dashData.totalUser} </Heading>
          <Divider />
        </Box>
        {/* end of total user */}

        {/* start of total sells */}

        <Box
          maxW={"320px"}
          width="full"
          bg={useColorModeValue("white", "gray.300")}
          boxShadow="2xl"
          textAlign={"center"}
          borderRadius="15"
          p={6}
        >
          <FcCalculator size={"30"} />
          <Text fontWeight={600} color="green.400" fontSize={35}>
            {" "}
            Total Sells
          </Text>
          <Heading> {dashData.totalPurchase} </Heading>
          <Divider />
        </Box>
        {/* end of total selles */}

        {/* start of total thumbnail */}
        <Box
          maxW={"320px"}
          width="full"
          bg={useColorModeValue("white", "gray.300")}
          boxShadow="2xl"
          textAlign={"center"}
          borderRadius="15"
          p={6}
        >
          <FcSelfie size={"30"} />
          <Text fontWeight={600} color="gray.400" fontSize={35}>
            Thumbnails
          </Text>
          <Heading> + {dashData.totalThumbnail} </Heading>
          <Divider />
          <Button
            variant={"link"}
            color="blue.400"
            fontSize={15}
            onClick={thumbNav}
          >
            {" "}
            <AddIcon /> Add new media{" "}
          </Button>
        </Box>
        {/* end of thumbnail */}
      </SimpleGrid>

      {/* flex */}
      <Flex bg={"gray.100"} gap={3}>
        <Box flex={1} bg={"whiteAlpha.200"}>
          {/* table */}
          <Table variant={"simple"} bg="white">
            <Thead bg={useColorModeValue("blue.100")}>
              <Tr>
                <Th color="#418596" fontSize="20">
                  {" "}
                  S.NO
                </Th>
                <Th color="#418596" fontSize="20">
                  Product Name
                </Th>
                <Th color="#418596" fontSize="20">
                  Tag
                </Th>
                <Th color="#418596" fontSize="20">
                  Actions
                </Th>
              </Tr>
            </Thead>
            {/* table body */}
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Balen</Td>
                <Td>Mayor</Td>
                <Td>Vote</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Kathmandu</Td>
                <Td>Citizen</Td>
                <Td>Vote</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box size={"400"} width="60" boxShadow="2xl" bg={"#white"} mr="3">
          <Select>
            <option>
              <Text fontWeight="bold" color={"#0e9ece"} ml={4}>
                {" "}
                View Users
              </Text>{" "}
              <Divider />
            </option>
            <option>Banned Users</option>
          </Select>

          <List spacing={2}>
            <ListItem>
              <ListIcon color="green.500" />
              BhanuBhakta Bista
            </ListItem>
            <ListItem>
              <ListIcon color="green.500" />
              Dipesh Mishra
            </ListItem>
            <ListItem>
              <ListIcon color="green.500" />
              Itp Manish
            </ListItem>
          </List>
        </Box>
      </Flex>

      {/* sales transaction */}
      <SimpleGrid mt={4}>
        <Box
          maxW={"420px"}
          width="full"
          bg={useColorModeValue("white", "gray.300")}
          boxShadow="2xl"
          // textAlign={"center"}
          borderRadius="15"
          p={6}
        >
          <Text fontWeight={600} color="green.400" fontSize={35}>
            {" "}
            Sell Transaction{" "}
          </Text>
          <Divider />
          <UnorderedList>
            <ListItem>Hello Dear</ListItem>
            <ListItem>Hello Don</ListItem>
            <ListItem>Hello Ktm</ListItem>
          </UnorderedList>
        </Box>
      </SimpleGrid>
    </AdminNav>
  );
};

export default Home;
