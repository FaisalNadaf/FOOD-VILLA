import { useEffect, useState } from "react";
import { FETCH_RESTURANT } from "../constant";

const useGetResturant = () => {
  const [resturants, setResturants] = useState([]);

  const fetchData = async () => {
    const data = await fetch(FETCH_RESTURANT);
    const parsedData = await data.json();
    const fetchResturant =
      parsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResturants(fetchResturant);
    console.log(fetchResturant);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return resturants;
};

export default useGetResturant;
