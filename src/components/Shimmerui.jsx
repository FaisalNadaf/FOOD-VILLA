import React from "react";

const Shimmerui = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        {Array(12)
          .fill("")
          .map((x, idx) => (
            <div
              key={x + idx}
              className=" min-h-80 w-1/6 mx-10 mb-8 text-9xl rounded-xl border-2  shadow-2xl"
            ></div>
          ))}
      </div>
    </>
  );
};

export default Shimmerui;
