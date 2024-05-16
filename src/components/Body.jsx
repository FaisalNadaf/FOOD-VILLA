import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmerui from "./Shimmerui";
import { filterCard } from "../utils/helper";
import useGetResturant from "../hooks/useGetResturant";
import { FETCH_RESTURANT } from "../constant";

const filterTYpe = (type, resturants) => {
  return resturants.filter((resturant) => resturant.type.includes(type));
};

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [resturants, setResturants] = useState([]);

  const fetchData = async () => {
    const data = await fetch(FETCH_RESTURANT);
    const parsedData = await data.json();
    const fetchResturant =
      parsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResturants(fetchResturant);
    setFilteredResturants(fetchResturant);
    console.log(fetchResturant);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return filteredResturants?.length == 0 ? (
    <Shimmerui />
  ) : (
    <div className="">
      <div className="w-[40%] flex flex-wrap items-center justify-start pl-60 my-4 sticky top-12 ">
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
            setFilteredResturants(res);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {/* <Carousel /> */}
      <div className="flex items-center justify-between px-32  mb-2">
        <p className="text-2xl font-bold my-6 ">
          Top Restaurant Chains In Your City
        </p>
        <div>
          <button
            className="p-2 px-6 bg-[#FF3131] rounded-full mx-1"
            onClick={() => {
              const res = filterTYpe("nonVeg", resturants);
              setFilteredResturants(res);
            }}
          >
            non-veg
          </button>
          <button
            className="p-2 px-6 bg-[#0FFF50] rounded-full mx-1"
            onClick={() => {
              const res = filterTYpe("veg", resturants);
              setFilteredResturants(res);
            }}
          >
            veg
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center  justify-center ">
        {filteredResturants?.map((d, idx) => {
          let c = d.info ? d.info : d;
          // let cta=d?.cta?.link;
          return <RestaurantCard {...c} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Body;
