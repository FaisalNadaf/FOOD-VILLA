import React, { useEffect } from "react";
import { data } from "../constant";
import BuyCard from "./BuyCard";
import { useParams } from "react-router-dom";

const Buy = () => {
  const { id } = useParams();
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/restaurants/chinese-wok-chikka-lakshmaiah-layout-adugodi-bangalore-" +
        id
    );
    const parsedData = await data.json();
    // const fetchResturant =
    // parsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(parsedData);
    console.log(data);
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  return <BuyCard key={id} />;
};

export default Buy;
