import React from "react";

const Carousel = () => {
  return (
    <div className="h-[30%] border-b-2 ">
      <div className="text-2xl font-bold px-32 flex items-center justify-between">
        <div className="">What's on your mind?</div>
        <div className="text-[#FF3131]">
          <span className="opacity-50 hover:opacity-100">
            Upto 50
            <i className="fa-solid fa-percent"></i> Off
            <i className="fa-solid fa-arrow-right px-1"></i>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-evenly px-20 ">
        <span className="h-48">
          <img
            className="h-full bg-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
            alt=""
          />
        </span>
        <span className="h-48">
          <img
            className="h-full bg-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
            alt=""
          />
        </span>
        <span className="h-48">
          <img
            className="h-full bg-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
            alt=""
          />
        </span>
        <span className="h-48">
          <img
            className="h-full bg-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
            alt=""
          />
        </span>
        <span className="h-48">
          <img
            className="h-full bg-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"
            alt=""
          />
        </span>
        <span className="h-48">
          <img
            className="h-full bg-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png"
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
