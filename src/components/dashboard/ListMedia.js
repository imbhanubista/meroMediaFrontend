import {
  Box,
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Heading,
  Tbody,
  Td,
  Button,
  Spacer,
  ButtonGroup,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteMedia, editMedia, listMedia } from "../../services/apiServices";
import AdminNav from "../useableComponent/AdninNav";
import { baseUrl } from "../../services/apis.helper";
import { useNavigate } from "react-router-dom";
import { FiGrid, FiList } from "react-icons/fi";

const ListMedia = () => {
  // to get the list of media
  const [storeMedia, setStoreMedia] = useState([]);
  // api
  const getAllMedia = async () => {
    let apiData = await listMedia();
    // console.log(apiData.data)
    if (apiData.type === "error") {
      toast.error(apiData.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setStoreMedia(apiData.data.allMedia);
    }
  };
  console.log(storeMedia);

  // function to delete media
  const deleteFtn = async (id) => {
    let dltApi = await deleteMedia(id);
    if (dltApi.type === "error") {
      toast.error(dltApi.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.success(dltApi.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      getAllMedia();
    }
  };
  // edit navigation
  const editNav = useNavigate();

  // function to edit media
  const editMediaApi = async (id) => {
    let editableMedia = await editMedia(id);
    if (editableMedia.type === "error") {
      alert("Admin can only edit");
    } else {
      editNav("/update_media");
    }
  };

  useEffect(() => {
    getAllMedia();
  }, []);

  // for view list function
  const [view, setView] = useState(false);
  const handleGrid = () => {
    setView(true);
  };
  const handleList = () => {
    setView(false);
  };

  return (
    <AdminNav>
      <Flex mb="2">
        <Heading p={2} mb="6" color={"#257275"}>
          List of Media
        </Heading>
        <Spacer />
        {/* item view */}
        <Box p={2} m="1">
          <ButtonGroup>
            <IconButton
              onClick={handleList}
              size={"sm"}
              colorScheme={"whatsapp"}
              icon={<FiList />}
            />
            <IconButton
              onClick={handleGrid}
              size={"sm"}
              colorScheme={"twitter"}
              icon={<FiGrid />}
            />
          </ButtonGroup>
        </Box>
        {/* end of item view */}
      </Flex>

      {view ? (
        <>
          {/* start of card view */}
          <SimpleGrid columns={5} spacing="4">
            {storeMedia.map((data, index) => {
              return (
                <Box
                  key={index}
                  maxW={"full"}
                  border="2px"
                  borderRadius={"lg"}
                  overflow="hidden"
                  bg={"gray.300"}
                >
                  <video src={`${baseUrl}${data.previewVideo}`} controls />
                  <Box textAlign={"center"} bg="gray.300" borderRadius="lg">
                    <Text fontWeight={"extrabold"} fontSize="25">
                      {data.title}
                    </Text>
                    <Text color={"gray.500"} fontSize="20">
                      {" "}
                      <em>Rs.</em> {data.price}
                    </Text>
                    {/* <p>{data.description}</p> */}
                  </Box>
                  <Flex p={2}>
                    <Button colorScheme={"twitter"} variant="outline">
                      Edit
                    </Button>
                    <Spacer />
                    <Button colorScheme={"red"} variant="outline">
                      Delete
                    </Button>
                  </Flex>
                </Box>
              );
            })}
          </SimpleGrid>
          {/* end of card view */}
        </>
      ) : (
        <>
          <Flex>
            <Box flex={1}>
              <Table variant={"simple"}>
                <Thead>
                  <Tr>
                    <Th>S.No</Th>
                    <Th>Product Name</Th>
                    <Th>Preview Video</Th>
                    <Th>Original Video</Th>
                    <Th>Tag</Th>
                    <Th>Price</Th>
                    <Th textAlign={"center"}>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {storeMedia.map((data, index) => {
                    return (
                      <Tr key={index}>
                        <Td>{1 + index}</Td>
                        <Td>{data.title}</Td>
                        <Td>
                          <video
                            height={"250"}
                            width="160"
                            src={`${baseUrl}${data.previewVideo}`}
                            controls
                          />
                        </Td>
                        <Td>
                          <video
                            height={"250"}
                            width="160"
                            src={`${baseUrl}${data.actualVideo}`}
                            controls
                          />
                        </Td>
                        <Td> {data.tag} </Td>
                        <Td>{data.price}</Td>
                        <Td>
                          <Flex>
                            <Button
                              colorScheme={"twitter"}
                              onClick={() => editMediaApi(data._id)}
                            >
                              {" "}
                              Edit{" "}
                            </Button>
                            <Spacer />
                            <Button
                              colorScheme={"red"}
                              onClick={() => deleteFtn(data._id)}
                            >
                              Delete
                            </Button>
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </>
      )}
    </AdminNav>
  );
};

export default ListMedia;
