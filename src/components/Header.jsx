import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="flex h-32 items-center justify-between px-4 shadow-2xl rounded-2xl m-2 mb-4 sticky top-0 bg-white">
      <img
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw"
        className="h-28 "
      />
      <ul className="flex text-xl font-bold w-[36%] ">
        <li
          key={3}
          className="px-2 text-gray-500 mx-3 boredr border-2 hover:shadow-2xl	 rounded-full hover:border-black"
        >
          <Link to="/">
            <i className="fa-regular fa-address-card"></i> home
          </Link>
        </li>
        <li
          key={2}
          className="px-2 text-gray-500 mx-3 boredr border-2 hover:shadow-2xl	 rounded-full hover:border-black"
        >
          <Link to="/about">
            <i className="fa-regular fa-address-card"></i> About
          </Link>
        </li>
        <li
          key={4}
          className="px-2 text-gray-500 mx-3 boredr border-2 hover:shadow-2xl	 rounded-full hover:border-black"
        >
          <Link to="/cart">
            <i className="fa-solid fa-cart-plus"></i>Cart
          </Link>
        </li>
        <li
          key={1}
          className="px-2 text-gray-500 mx-3 boredr border-2 hover:shadow-2xl	 rounded-full "
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
