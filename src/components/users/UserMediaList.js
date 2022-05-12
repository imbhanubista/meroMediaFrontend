import {
  Alert,
  AlertIcon,
  AlertTitle,
  Spinner,
  Text,
  Flex,
  ButtonGroup,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { userMedialist } from "../../services/apiServices";
import Navbar from "../useableComponent/Navbar";
import MediaListCard from "./MediaListCard";
import { baseUrl } from "../../services/apis.helper";
import { FiList, FiGrid } from "react-icons/fi";

const UserMediaList = () => {
  // to store data coming from api
  const [mediaData, setMediaData] = useState([]);
  // to make data is loading
  const [loading, setLoading] = useState(true);
  // to get api data
  const listMediaData = async () => {
    let apiMediaData = await userMedialist();
    if (apiMediaData.type === "error") {
      toast.error(apiMediaData.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setMediaData(apiMediaData.data.allMedia);
      setLoading(false);
    }
  };
  // console.log(mediaData);
  // useEffect
  useEffect(() => {
    listMediaData();
  }, []);
  return (
    <>
      <Navbar />
      <Flex justifyContent={"flex-end"} p="1">
        <ButtonGroup>
          <IconButton
            variant={"outline"}
            colorScheme="whatsapp"
            icon={<FiList />}
            size="sm"
          />
          <IconButton
            variant={"outline"}
            colorScheme={"twitter"}
            size="sm"
            icon={<FiGrid />}
          />
        </ButtonGroup>
      </Flex>
      {loading ? (
        <div>
          <Spinner size={"lg"} />
          <Text> Data is loading... </Text>
        </div>
      ) : (
        <SimpleGrid columns={5} spacing="4">
          {mediaData.map((data, index) => {
            return (
              <div key={index}>
                <MediaListCard
                  title={data.title}
                  thumbnail={`${baseUrl}${data.thumbnail}`}
                  price={data.price}
                  id={data._id}
                />
              </div>
            );
          })}
        </SimpleGrid>
      )}
    </>
  );
};

export default UserMediaList;
