import React from "react";

const BuyCard = ({ id, name, img, rate, desc, adress, time, type }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="min-h-96 w-[80%] shadow flex">
        <div className="h-96 w-1/3 ">
          <img src={img} className=" h-full w-full bg-cover" />
        </div>
        <div className=" flex px-28 items-center w-[70%]">
          <div className="w-[40%]">
            <div className="flex items-center justify-between ">
              <p className="text-4xl font-bold my-2">{name}</p>
              <p className="text-2xl">
                {type == "veg" ? (
                  <i className="fa-solid fa-certificate text-[#0FFF50]"></i>
                ) : (
                  <i className="fa-solid fa-certificate text-[#FF3131]"></i>
                )}
              </p>{" "}
            </div>
            <p>
              <i className="fa-solid fa-star text-[#FFD700] my-1 px-1"></i>
              <span className="text-black">{rate}</span>
              <span className="px-4 text-black">
                <i className="fa-solid fa-truck-fast"></i>({time})
              </span>
            </p>
            <p className="text-gray-500 text-xl my-1">{desc}</p>
            <p className="text-gray-500 my-1">{adress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
