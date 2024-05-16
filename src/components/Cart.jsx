import { useContext } from "react";
import Details from "./Details";
import UserContext from "../hooks/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../redux/Slice's/cartSlice";
// import { Outlet } from "react-router-dom";

const Cart = () => {
  // const obj = {
  //   name: "faisal",
  //   number: "0987654321",
  //   location: "belgaum",
  // };

  // const { user, setUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <div className=" h-1/2 w-full">
      <button
        className="bg-red-200 hover:bg-red-300 px-4 py-1 rounded-full mt-4 sticky mx-4 top-40"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Clear All
      </button>
      <div className="flex flex-wrap justify-center">
        {cartItems.map((item) => (
          <RestaurantCardd {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default Cart;

const RestaurantCardd = ({
  id,
  name,
  cloudinaryImageId,
  avgRatingString,
  cuisines,
  areaName,
  costForTwo,
  sla,
  type,
  // cta,
}) => {
  // let link = cta;
  // console.log(link);
  const dispatch = useDispatch();

  return (
    <div className="h-84 w-1/3 mx-10 mb-8  flex flex-wrap rounded-xl   hover:shadow-xl ">
      <div className=" ">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${cloudinaryImageId}`}
          className="h-60  bg-cover rounded-xl shadow border-black"
        />
      </div>
      <div className="p-4 w-60">
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
        <p className="text-gray-500 overflow-hidden h-6">{costForTwo}</p>
        <p className="text-gray-500 overflow-hidden">{areaName}</p>
        <button
          className="bg-red-200 hover:bg-red-300 px-4 py-1 rounded-full mt-4 sticky mx-4 top-40"
          onClick={() => {
            dispatch(removeItem());
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

{
  /* <input
        type="text"
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />
      <input
        type="text"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <Details {...obj} />
      <Outlet /> */
}
