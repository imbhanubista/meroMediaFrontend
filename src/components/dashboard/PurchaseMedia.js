import React, { useEffect, useState } from "react";
import Navbar from "../useableComponent/Navbar";
import PurchasedItemCom from "../setting/PurchasedItemCom";
import { individualPurchaseApi } from "../../services/apiServices";
import { toast } from "react-toastify";
import { Spinner, Text } from "@chakra-ui/react";
const PurchaseMedia = () => {
  // to save data
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);
  let mediaPurchase = async () => {
    let purchaseApi = await individualPurchaseApi();
    // console.log(purchaseApi);

    if (purchaseApi.type === "error") {
      toast.error(purchaseApi.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setStoreData(purchaseApi.data);
      setLoading(false);
    }
  };
  useEffect(() => {
    mediaPurchase();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <>
          <Spinner />
          <Text>Data is loading...</Text>
        </>
      ) : (
        <>
          <div>
            <PurchasedItemCom storeData={storeData} />
          </div>
        </>
      )}
    </div>
  );
};

export default PurchaseMedia;
