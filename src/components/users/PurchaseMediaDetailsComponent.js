import { Box, Button, IconButton, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailPurchase } from "../../services/apiServices";
import { baseUrl } from "../../services/apis.helper";
import { toast } from "react-toastify";
import Navbar from "../useableComponent/Navbar";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { IconBase } from "react-icons/lib";

const PurchaseMediaDetailsComponent = () => {
  // to get purchase id
  let { id } = useParams();
  // to store data
  const [dataStore, setDataStore] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // to call api
  const getActualVideo = async () => {
    let apiData = await getDetailPurchase(id);
    if (apiData.type === "error") {
      toast.error(apiData.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setDataStore(apiData.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getActualVideo();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <></>
      ) : (
        <SimpleGrid justifyContent={"center"} m="2">
          <Button
            onClick={() => navigate("/purchase")}
            variant="link"
            size={"lg"}
          >
            {" "}
            <ChevronLeftIcon /> Back{" "}
          </Button>
          <video
            controls
            src={`${baseUrl}${dataStore.product_id.actualVideo}`}
            alt="Hello hello"
            boxSize={"full"}
            width="full"
          />
          <Box>
            <Text color={"gray.600"} fontSize="25">
              {dataStore.product_id.title}
            </Text>
          </Box>
        </SimpleGrid>
      )}
    </div>
  );
};

export default PurchaseMediaDetailsComponent;
