import { useState } from "react";
import { data } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Carousel from "./Carousel";

const filterCard = (searchText, resturants) => {
  return resturants.filter((resturant) => resturant.name.includes(searchText));
};
const filterTYpe = (type, resturants) => {
  return resturants.filter((resturant) => resturant.type.includes(type));
};

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [resturants, setResturants] = useState(data);
  // console.log(res);

  return (
    <div className="">
      <div className="w-[100%]  flex flex-wrap items-center justify-center my-4 sticky top-12">
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          className="border border-black rounded-l-full h-10	px-4 text-lg hover:shadow-2xl"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-black text-white rounded-r-full h-10 hover:bg-[#FF3131] hover:shadow-2xl px-6 hover:text-white"
          onClick={() => {
            const res = filterCard(searchText, resturants);
            setResturants(res);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <Carousel />
      <div className="flex items-center justify-between px-32  mb-2">
        <p className="text-2xl font-bold my-6 ">
          Top restaurant chains in Belgaum
        </p>
        <div>
          <button
            className="p-2 px-6 bg-[#FF3131] rounded-full mx-1"
            onClick={() => {
              const res = filterTYpe("nonVeg", resturants);
              setResturants(res);
            }}
          >
            non-veg
          </button>
          <button
            className="p-2 px-6 bg-[#0FFF50] rounded-full mx-1"
            onClick={() => {
              const res = filterTYpe("veg", resturants);
              setResturants(res);
            }}
          >
            veg
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center  justify-center ">
        {resturants.map((d, idx) => {
          return <RestaurantCard {...d} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Body;
