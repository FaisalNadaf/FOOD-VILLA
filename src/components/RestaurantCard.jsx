import { Link } from "react-router-dom";

const RestaurantCard = ({
  id,
  name,
  cloudinaryImageId,
  avgRatingString,
  cuisines,
  areaName,
  sla,
  type,
  // cta,
}) => {
  // let link = cta;
  // console.log(link);
  return (
    <div className="h-84 w-1/6 mx-10 mb-8  flex flex-wrap rounded-xl   hover:shadow-xl ">
      <Link to={`/buy/${id}`} className="w-full">
        <div className=" ">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${cloudinaryImageId}`}
            className="h-60 w-full bg-cover rounded-xl shadow border-black"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-xl font-medium overflow-hidden h-8">{name}</p>
            <p>
              {type === "veg" ? (
                <i className="fa-solid fa-certificate text-[#0FFF50]"></i>
              ) : type == "nonVeg" ? (
                <i className="fa-solid fa-certificate text-[#FF3131]"></i>
              ) : (
                ""
              )}
            </p>
          </div>
          <p>
            <i className="fa-solid fa-star text-[#FFD700] px-1"></i>
            <span className="text-black">{avgRatingString}</span>
            <span className="px-4 text-black">
              <i className="fa-solid fa-truck-fast h-8"></i>({sla?.slaString})
            </span>
          </p>
          <p className="text-gray-500 overflow-hidden h-6">{cuisines}</p>
          <p className="text-gray-500 overflow-hidden">{areaName}</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
