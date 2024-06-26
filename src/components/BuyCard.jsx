import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/Slice's/cartSlice";

const BuyCard = ({
  id,
  name,
  cloudinaryImageId,
  avgRatingString,
  cuisines,
  areaName,
  sla,
  type,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center">
      <div className="min-h-96 w-[80%] shadow flex">
        <div className="h-96 w-1/3 ">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${cloudinaryImageId}`}
            className=" h-full w-full bg-cover"
          />
        </div>
        <div className=" flex px-28 items-center w-[70%]">
          <div className="w-[60%]">
            <div className="flex items-center justify-between ">
              <p className="text-4xl font-bold my-2">{name}</p>
              <p className="text-2xl">
                {type == "veg" ? (
                  <i className="fa-solid fa-certificate text-[#0FFF50]"></i>
                ) : type == "nonVeg" ? (
                  <i className="fa-solid fa-certificate text-[#FF3131]"></i>
                ) : (
                  " "
                )}
              </p>{" "}
            </div>
            <p>
              <i className="fa-solid fa-star text-[#FFD700] my-1 px-1"></i>
              <span className="text-black">{avgRatingString}</span>
              <span className="px-4 text-black">
                <i className="fa-solid fa-truck-fast"></i>({sla?.slaString})
              </span>
            </p>
            <p className="text-gray-500 text-xl my-1 overflow-hidden h-20">
              {cuisines}
            </p>
            <p className="text-gray-500 my-2 overflow-hidden">{areaName}</p>
            <button
              className="bg-green-200 hover:bg-green-300 px-4 py-1 rounded-full mt-4 mx-2"
              onClick={() => {
                dispatch(
                  addItem({
                    id,
                    name,
                    cloudinaryImageId,
                    avgRatingString,
                    cuisines,
                    areaName,
                    sla,
                    type,
                  })
                );
              }}
            >
              Add
            </button>
            <button
              className="bg-red-200 hover:bg-red-300 px-4 py-1 rounded-full mt-4 mx-2"
              onClick={() => {
                dispatch(removeItem());
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
