import {
  Box,
  IconButton,
  Image,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { ViewIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { baseUrl } from "../../services/apis.helper";
import { useNavigate } from "react-router-dom";
const PurchasedItemCom = ({ storeData }) => {
  const selector = useSelector((state) => state.reducer);
  // console.log(storeData);
  const navigate = useNavigate();
  const handleView = (id) => {
    navigate("/view/" + id);
  };

  return (
    <SimpleGrid>
      <Table
        variant={"simple"}
        m="8"
        overflowX={"auto"}
        whiteSpace="nowrap"
        size={"lg"}
      >
        <Thead textAlign={"center"}>
          <Tr>
            <Th>S.No</Th>
            <Th>Items Thumbnail</Th>
            <Th>Media Name</Th>
            <Th> Price </Th>
            {selector.isAdmin === true ? (
              <Th> Purchased By </Th>
            ) : (
              <Th> Action </Th>
            )}
          </Tr>
        </Thead>

        <Tbody>
          {storeData.map((data, index) => {
            return (
              <Tr key={index}>
                <Td>{1 + index}</Td>
                <Td>
                  {" "}
                  <Image
                    src={`${baseUrl}${data.product_id.thumbnail}`}
                    alt="Thumbnail"
                    boxSize={"160"}
                    width="fit-content"
                  />{" "}
                </Td>
                <Td> {data.product_id.title} </Td>
                <Td> {data.product_id.price} </Td>

                {selector.isAdmin === true ? (
                  <Td>
                    {" "}
                    <Box>
                      {" "}
                      {data.user_id.name}{" "}
                      <Text color={"gray.600"} fontSize="15">
                        {" "}
                        {data.user_id.email}{" "}
                      </Text>{" "}
                    </Box>{" "}
                  </Td>
                ) : (
                  <Td>
                    {" "}
                    <IconButton
                      size={"lg"}
                      cursor="pointer"
                      _hover={{ border: "2px solid blue" }}
                      icon={<ViewIcon />}
                      onClick={() => handleView(data._id)}
                    />
                  </Td>
                )}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </SimpleGrid>
  );
};

export default PurchasedItemCom;
