import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MediaListCard = ({ thumbnail, title, price, id }) => {
  const navigateRoute = useNavigate();
  const mediaId = () => {
    navigateRoute("/detail/" + id);
  };
  return (
    <Box
      maxW={"full"}
      borderRadius="lg"
      ml={4}
      onClick={() => mediaId(id)}
      _hover={{ bgGradient: "linear(to-t, green.200, pink.500)" }}
    >
      <Box>
        <Image src={thumbnail} alt="thumbnail" boxSize={"180"} width="full" />
      </Box>
      <Box p={2}>
        <Text fontWeight={"bold"}> {title} </Text>
        <Text>Rs.{price}</Text>
      </Box>
    </Box>
  );
};

export default MediaListCard;
