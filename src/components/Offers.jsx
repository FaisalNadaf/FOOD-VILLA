import React from "react";
import { useState } from "react";
import { offers } from "../constant";

const ShowOffers = ({
  title,
  description,
  validUntil,
  discount,
  isVisible,
  setIsVisible,
}) => {
  console.log(setIsVisible);
  console.log(isVisible);
  return (
    <>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {isVisible && (
        <>
          <p className="text-sm mb-2">{description}</p>
          <p className="text-sm mb-2">Valid until: {validUntil}</p>
          <p className="text-sm">Discount: {discount}% off</p>
        </>
      )}
      {isVisible ? (
        <button
          className="border border-black px-2 py-1 my-2 rounded-full "
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="border border-black px-2 py-1 my-2 rounded-full"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          show
        </button>
      )}
    </>
  );
};

const Offers = () => {
  const [isVisibleSection, setIsVisibleSection] = useState("off");

  return (
    <div className="w-1/2  mx-auto">
      <h2 className="text-2xl font-bold mb-4">Offers</h2>
      <ul className="">
        <li className="bg-gray-100 px-4 rounded-lg mb-4 border-2 border-gray-200 hover:bg-gray-200 transition duration-300 min-w-80 h-auto">
          <ShowOffers
            {...offers[0]}
            isVisible={isVisibleSection === "off"}
            setIsVisible={() => setIsVisibleSection("off")}
          />
        </li>
        <li className="bg-gray-100 px-4 rounded-lg mb-4 border-2 border-gray-200 hover:bg-gray-200 transition duration-300 min-w-80 h-auto">
          <ShowOffers
            {...offers[1]}
            isVisible={isVisibleSection === "free"}
            setIsVisible={() => setIsVisibleSection("free")}
          />
        </li>
        <li className="bg-gray-100 px-4 rounded-lg mb-4 border-2 border-gray-200 hover:bg-gray-200 transition duration-300 min-w-80 h-auto">
          <ShowOffers
            {...offers[2]}
            isVisible={isVisibleSection === "instant"}
            setIsVisible={() =>
              setIsVisibleSection("instant")
            }
          />
        </li>
        {/* <li className="bg-gray-100 px-4 rounded-lg mb-4 border-2 border-gray-200 hover:bg-gray-200 transition duration-300 min-w-80 h-auto">
          <ShowOffers {...offers[3]} isVisible={true} setIsVisible />
        </li> */}
      </ul>
    </div>
  );
};

export default Offers;
