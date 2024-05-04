import React from "react";
import { data } from "../constant";
import BuyCard from "./BuyCard";

const Buy = ({ id }) => {
  // Destructuring id from props

  // console.log(id);

  const filteredData = data.filter((card) => card.id === id); // Filtering data

  // console.log(filteredData);

  return (
    <div className="">
      {filteredData.map((cardData) => (
        <BuyCard key={cardData.id} {...cardData} />
      ))}
    </div>
  );
};

export default Buy;
// import React from "react";
// import { data } from "../constant";
// import RestaurantCard from "./RestaurantCard";

// const Buy = (id) => {
//   console.log(id);
//   const d = (id) => {
//     return data.filter((card) => card.id.includes(id));
//   };
//   const filteredData = d(id);
//   console.log(filteredData);

//   return (
//     <div className="">
//       Buy
//       <RestaurantCard {...filteredData} />
//     </div>
//   );
// };

// export default Buy;
