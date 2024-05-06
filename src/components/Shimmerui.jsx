import React from "react";

const Shimmerui = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  {
    arr.map((x) => {
      return (
        <div
          className="min-h-80 w-1/6 mx-10 mb-8 text-9xl  rounded-xl  border-black border-2 shadow-2xl "
          key={x}
        >
          {x}faisal
        </div>
      );
    });
  }
};

export default Shimmerui;
