import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import UserContext from "../hooks/UserContext";
import { useSelector } from "react-redux";
import cartSlice from "../redux/Slice's/cartSlice";

const Header = () => {
  const [login, setLogin] = useState(false);
  const IsOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex h-32 items-center justify-between px-4 shadow-2xl rounded-2xl m-2 mb-4 sticky top-0 bg-white">
      <img
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw"
        className="h-28 "
      />
      <p>
        {user.name}-{user.email}
      </p>
      <ul className="flex text-xl font-bold w-[40%] items-center justify-end">
        <li key={3} className="	 ">
          {IsOnline ? "🟢" : "🔴"}
        </li>
        <Link to="/">
          <li
            key={3}
            className="px-2 text-gray-500 mx-1 boredr border-2 hover:shadow-2xl	 rounded-full hover:border-black"
          >
            home
          </li>
        </Link>
        <Link to="/about">
          <li
            key={2}
            className="px-2 text-gray-500 mx-1 boredr border-2 hover:shadow-2xl	 rounded-full hover:border-black"
          >
            About
          </li>
        </Link>
        <Link to="/cart">
          <li
            key={4}
            className="px-2 text-gray-500 mx-1 boredr border-2 hover:shadow-2xl	 rounded-full hover:border-black"
          >
           Cart-{cartItems.length}
          </li>
        </Link>
        <Link to="/offers">
          <li
            key={4}
            className="px-2 text-gray-500 mx-1 boredr border-2 hover:shadow-2xl	 rounded-full hover:border-black"
          >
            Offers
          </li>
        </Link>
        <li
          key={1}
          className="px-2 text-gray-500 mx-1 boredr border-2 hover:shadow-2xl	 rounded-full "
        >
          {login ? (
            <button onClick={() => setLogin(false)} className="">
              Logout &nbsp;
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          ) : (
            <button onClick={() => setLogin(true)}>
              Login &nbsp;
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
