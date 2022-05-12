import {
  Box,
  Flex,
  Heading,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Spinner,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { IconBase } from "react-icons/lib";
import { toast } from "react-toastify";
import { listUsers, userBanned } from "../../services/apiServices";
import AdminNav from "../useableComponent/AdninNav";
const ListUsers = () => {
  // to store users data
  const [user, setUser] = useState([]);
  // to conform is user banned or not
  const [loading, setLoading] = useState(true);
  // to get all user data
  const getUserApi = async () => {
    let totalUser = await listUsers();
    if (totalUser.type === "error") {
      alert("List of Users");
    } else {
      setUser(totalUser.data.allUsers);
      setLoading(false);
    }
  };
  // banned function
  const actionHandler = async (id) => {
    let status = await userBanned(id);
    if (status.type === "error") {
      toast.error(status.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(status.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      getUserApi();
    }
  };

  // console.log(isBanned)
  useEffect(() => {
    getUserApi();
  }, []);

  return (
    <AdminNav>
      <Flex mb="2">
        <Heading p={2} m="4" color="#257275">
          Total User
        </Heading>
      </Flex>
      {/* start of card or grid view */}
      <SimpleGrid></SimpleGrid>

      {/* end of grid  */}

      <Flex gap={3}>
        <Box flex="1">
          <Table variant={"simple"}>
            <Thead>
              <Tr>
                <Th>S.No.</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            {loading ? (
              <div>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
                <Text>Data is loading ...</Text>
              </div>
            ) : (
              <Tbody>
                {user.map((data, index) => {
                  return (
                    <Tr key={index}>
                      <Td> {1 + index} </Td>
                      <Td> {data.name} </Td>
                      <Td> {data.email} </Td>
                      <Td> {data.isBanned === true ? "Blocked" : "Active"} </Td>
                      <Td>
                        <Button
                          onClick={() => actionHandler(data._id)}
                          colorScheme={
                            data.isBanned === true ? "whatsapp" : "red"
                          }
                          size="sm"
                        >
                          {data.isBanned === true ? "Unblock" : "Block"}
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            )}
          </Table>
        </Box>
      </Flex>
    </AdminNav>
  );
};

export default ListUsers;
