import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../useableComponent/Navbar";
// import {FaSortAlphaUp} from 'react-icons/fa'
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchData } from "../../services/apiServices";
import demo from "../../images/error.jpeg";
import { baseUrl } from "../../services/apis.helper";

const SearchData = () => {
  const location = useLocation();
  let query = new URLSearchParams(location.search);
  // console.log(query,"hello there")
  const [searchedData, setSearchedData] = useState([]);
  const getSearchedApiData = async () => {
    let filteredData = await getSearchData({
      title: query.get("search_query"),
    });
    setSearchedData(filteredData.data);
  };
  console.log(searchedData);
  useEffect(() => {
    getSearchedApiData();
  }, []);
  // function to navigate
  const navigate = useNavigate();
  const navigateToDetail = (id) => {
    navigate("/detail/" + id);
  };
  return (
    <>
      <Navbar />
      <SimpleGrid>
        <Box> FILTERS</Box>
        <Divider />
        <Center mt={6}>
          <List spacing={3}>
            <ListItem>
              {searchedData.map((data, index) => {
                return (
                  <div key={index}>
                    <Box onClick={() => navigateToDetail(data._id)}>
                      <VStack spacing="6">
                        <Box>
                          {" "}
                          <Image
                            src={`${baseUrl}${data.thumbnail}`}
                            alt="Thumbnail"
                            boxSize={220}
                            width="80"
                          />{" "}
                        </Box>
                      </VStack>
                      <VStack spacing={6}>
                        <Box>
                          {" "}
                          <Text fontSize={"2xl"} color="gray.500">
                            {data.title}
                          </Text>{" "}
                        </Box>
                      </VStack>
                    </Box>
                  </div>
                );
              })}
            </ListItem>
          </List>
        </Center>
      </SimpleGrid>
    </>
  );
};

export default SearchData;
