import React from "react";

const Offers = () => {
  const offers = [
    {
      title: "50% off on Pizzas",
      description: "Get 50% off on all pizzas. Limited time offer!",
      validUntil: "2024-05-31",
      discount: 50,
    },
    {
      title: "Free Delivery",
      description: "Enjoy free delivery on all orders above $30.",
      validUntil: "2024-06-15",
      discount: 0,
    },
  ];

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Offers</h2>
      <ul>
        {offers.map((offer, index) => (
          <li
            key={index}
            className="bg-gray-100 p-4 rounded-lg mb-4 border-2 border-gray-200 hover:bg-gray-200 transition duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
            <p className="text-sm mb-2">{offer.description}</p>
            <p className="text-sm mb-2">Valid until: {offer.validUntil}</p>
            <p className="text-sm">Discount: {offer.discount}% off</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offers;
