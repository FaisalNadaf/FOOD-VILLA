// import React, { useEffect, useState } from "react";
// import { data } from "../constant";
// import BuyCard from "./BuyCard";
// import { useParams } from "react-router-dom";

// const Buy = () => {
//   const { id } = useParams();
//   const [card, setCard] = useState({});

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const parsedData = await data.json();
//     const fetchResturant = await parsedData?.data?.cards[4]?.card?.card
//       ?.gridElements?.infoWithStyle?.restaurants;
//     await setCard(fetchResturant);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [id]);

//   console.log(card);

//   const cardd = card.filter((card) => {
//     return card?.info?.id == id;
//   });
//   console.log(cardd);
//   return <BuyCard key={id} {...cardd} />;
// };

// export default Buy;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BuyCard from "./BuyCard";
import { data } from "../constant";
import useGetResturant from "../hooks/useGetResturant";

const Buy = () => {
  const { id } = useParams();
  const card = useGetResturant();

  const filteredCard = card.filter((restaurant) => {
    return restaurant?.info?.id === id;
  });

  const dtt = { ...filteredCard[0]?.info };
  return (
    <>
      {filteredCard.length > 0 ? (
        <BuyCard key={id} {...dtt} data={dtt} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Buy;
