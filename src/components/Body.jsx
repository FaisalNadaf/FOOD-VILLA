import { useEffect, useState } from "react";
import { data } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Carousel from "./Carousel";
import Shimmerui from "./Shimmerui";
import { Link } from "react-router-dom";

const filterCard = (searchText, resturants) => {
  return resturants.filter((resturant) =>
    resturant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
};
const filterTYpe = (type, resturants) => {
  return resturants.filter((resturant) => resturant.type.includes(type));
};

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [resturants, setResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const parsedData = await data.json();
    const fetchResturant =
      parsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilteredResturants(fetchResturant);
    setResturants(fetchResturant);
    // console.log(parsedData);
    // console.log(fetchResturant);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return filteredResturants?.length == 0 ? (
    <Shimmerui />
  ) : (
    <div className="">
      <div className="w-[100%]  flex flex-wrap items-center justify-center my-4 sticky top-12 ">
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
          return <RestaurantCard {...c} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Body;
