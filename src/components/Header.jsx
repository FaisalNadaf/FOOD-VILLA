const Header = () => {
  return (
    <div className="flex h-32 items-center justify-between px-4 shadow-2xl rounded-2xl m-2 mb-4 sticky top-0 bg-white">
      <img
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw"
        className="h-28 "
      />
      <ul className="flex text-xl font-bold">
        <li
          key={1}
          className="px-2 text-gray-500 mx-3 boredr border-2 hover:shadow-2xl	 rounded-full hover:border-black"
        >
          <i className="fa-solid fa-house"></i> home
        </li>
        <li
          key={2}
          className="px-2 text-gray-500 mx-3 boredr border-2 hover:shadow-2xl	 rounded-full hover:border-black"
        >
          <i className="fa-regular fa-address-card"></i> About
        </li>
        <li
          key={3}
          className="px-2 text-gray-500 mx-3 boredr border-2 hover:shadow-2xl	 rounded-full hover:border-black"
        >
          <i className="fa-regular fa-address-book"></i>contact
        </li>
        <li
          key={4}
          className="px-2 text-gray-500 mx-3 boredr border-2 hover:shadow-2xl	 rounded-full hover:border-black"
        >
          <i className="fa-solid fa-cart-plus"></i>CART
        </li>
      </ul>
    </div>
  );
};

export default Header;
