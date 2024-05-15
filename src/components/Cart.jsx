import { useContext } from "react";
import Details from "./Details";
import UserContext from "../hooks/UserContext";
// import { Outlet } from "react-router-dom";

const Cart = () => {
  const obj = {
    name: "faisal",
    number: "0987654321",
    location: "belgaum",
  };

  const { user, setUser } = useContext(UserContext);
  return (
    <div className="text-4xl">
      <input
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
      {/* <Outlet /> */}
    </div>
  );
};
export default Cart;
