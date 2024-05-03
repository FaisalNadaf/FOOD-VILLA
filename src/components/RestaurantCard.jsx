const RestaurantCard = ({ id, name, img, rate, desc, adress, time, type }) => {
  return (
    <div className="h-84 w-1/6 mx-10 mb-8  flex flex-wrap rounded-xl   hover:shadow-xl ">
      <div className="w-full ">
        <img
          src={img}
          className="h-60 w-full bg-cover rounded-xl shadow border-black"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-medium">{name}</p>
          <p>
            {type == "veg" ? (
              <i class="fa-solid fa-certificate text-[#0FFF50]"></i>
            ) : (
              <i class="fa-solid fa-certificate text-[#FF3131]"></i>
            )}
          </p>
        </div>
        <p>
          <i className="fa-solid fa-star text-[#FFD700] px-1"></i>
          <span className="text-black">{rate}</span>
          <span className="px-4 text-black">
            <i className="fa-solid fa-truck-fast"></i>({time})
          </span>
        </p>
        <p className="text-gray-500">{desc}</p>
        <p className="text-gray-500">{adress}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
