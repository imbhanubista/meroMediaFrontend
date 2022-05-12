import {
  Image,
  Flex,
  Box,
  SimpleGrid,
  Button,
  Spacer,
  ButtonGroup,
  IconButton,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminNav from "../useableComponent/AdninNav";
import { deleteThumb, listThumb } from "../../services/apiServices";
import { toast } from "react-toastify";
import { baseUrl } from "../../services/apis.helper";
import { useNavigate } from "react-router-dom";
import { FiList, FiGrid } from "react-icons/fi";

const ListThumbnail = () => {
  // dispatch to send data to redux
  // const dispatch = useDispatch();
  // to store data coming from the api
  const [storeThumb, setStoreThumb] = useState([]);
  const [loading, setLoading] = useState(true);
  // to get api data
  const thumbnailFtn = async (data) => {
    let listData = await listThumb();
    if (listData.type === "error") {
      toast.error(listData.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setStoreThumb(listData.data.allThumbnails);
      setLoading(false);
    }
  };

  // console.log( view, "Hello i am here")

  // for delete function
  const deleteThumbNail = async (id) => {
    let deleteApi = await deleteThumb(id);
    if (deleteApi.type === "error") {
      alert("Only admin can perform!!!");
    } else {
      toast.success(deleteApi.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      thumbnailFtn();
    }
  };
  // navigation for edit
  const editNav = useNavigate();
  // for edit thumbnail
  const editThumbnail = (id) => {
    editNav("/edit_thumb/" + id);
  };

  // useEffect
  useEffect(() => {
    thumbnailFtn();
  }, []);
  // for grid and list
  const [view, setView] = useState(false);

  const viewlistHandle = () => {
    setView(!view);
  };

  return (
    <AdminNav>
      <Flex mb={2}>
        <Heading color={"#257275"} mb={4} p="2">
          List of Thumbnail
        </Heading>
        <Spacer />
        <Box p={2} m="4">
          {/* start of list grid */}
          <ButtonGroup>
            <IconButton
              onClick={viewlistHandle}
              colorScheme="whatsapp"
              size={"sm"}
              icon={<FiList />}
            />
            <IconButton
              onClick={viewlistHandle}
              colorScheme="twitter"
              size={"sm"}
              icon={<FiGrid />}
            />
          </ButtonGroup>
          {/* end of list grid */}
        </Box>
      </Flex>
      {view ? (
        <>
          {/* start of table view */}
          {loading ? (
            <div>
              <Spinner />
              <Text>Thumbnail is loading...</Text>
            </div>
          ) : (
            <SimpleGrid>
              <Table variant={"simple"}>
                <Thead>
                  <Tr>
                    <Th>S.No</Th>
                    <Th>Thumbnail</Th>
                    <Th>Title</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {storeThumb.map((data, index) => {
                    return (
                      <Tr key={index}>
                        <Td>{1 + index}</Td>
                        <Td>
                          <Image
                            src={`${baseUrl}${data.thumbnail}`}
                            alt="Thumbnail"
                            boxSize="160"
                            width={80}
                            borderRadius="lg"
                          />
                        </Td>
                        <Td>{data.title}</Td>
                        <Td>
                          <Flex>
                            <Button
                              colorScheme={"twitter"}
                              m="2"
                              onClick={() => editThumbnail(data._id)}
                            >
                              Edit
                            </Button>
                            {/* <Spacer /> */}
                            <Button
                              colorScheme={"red"}
                              m="2"
                              onClick={() => deleteThumbNail(data._id)}
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
            </SimpleGrid>
          )}
          {/* end of table view */}
        </>
      ) : (
        <>
          {loading ? (
            "Thumbnail are Loading!!!"
          ) : (
            <SimpleGrid columns={5} spacing="4">
              {storeThumb.map((data) => {
                return (
                  <Box
                    maxW={"full"}
                    border="2px"
                    borderRadius={"lg"}
                    overflow="hidden"
                  >
                    {/* {console.log(data, "fuck image")} */}
                    <Image
                      src={`${baseUrl}${data.thumbnail}`}
                      alt="Thumbnail Photo"
                    />
                    <Box
                      mt={1}
                      fontWeight="semibold"
                      as="h4"
                      lineHeight={"tight"}
                    >
                      {data.title}
                    </Box>
                    <Flex>
                      <Button
                        colorScheme={"twitter"}
                        m="2"
                        onClick={() => editThumbnail(data._id)}
                      >
                        Edit
                      </Button>
                      <Spacer />
                      <Button
                        colorScheme={"red"}
                        m="2"
                        onClick={() => deleteThumbNail(data._id)}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Box>
                );
              })}
            </SimpleGrid>
          )}
        </>
      )}
    </AdminNav>
  );
};

export default ListThumbnail;
