import Details from "./Details";

const Cart = () => {
  const obj = {
    name: "faisal",
    number: "0987654321",
    location: "belgaum",
  };
  return (
    <div className="text-9xl">
      <Details {...obj} />
    </div>
  );
};
export default Cart;
