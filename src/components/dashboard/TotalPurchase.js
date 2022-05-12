import React, { useEffect, useState } from "react";
import AdminNav from "../useableComponent/AdninNav";
import PurchasedItemCom from "../setting/PurchasedItemCom";
import { totalMediaPurchased } from "../../services/apiServices";
const TotalPurchase = () => {
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);

  // to get total purchased data
  let totalPurchasedApi = async () => {
    let totalData = await totalMediaPurchased();
    console.log(totalData);
    if (totalData.type === "error") {
      alert("Cannot Retrive data!!!");
    } else {
      setStoreData(totalData.data);
      setLoading(false);
    }
  };
  useEffect(() => {
    totalPurchasedApi();
  }, []);

  return (
    <AdminNav>
      {loading ? (
        "Data loading"
      ) : (
        <>
          <PurchasedItemCom storeData={storeData} />
        </>
      )}
    </AdminNav>
  );
};

export default TotalPurchase;
