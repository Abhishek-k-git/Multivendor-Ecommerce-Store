import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import AllEvents from "../../components/Shop/AllEvents";

const ShopAllEvents = () => {
  return (
    <>
      <DashboardHeader />
      <div className="w-full flex flex-row">
        <div className="w-[40px] md:w-[25%] lg:w-[20%]">
          <div className="w-full py-4 px-2 md:px-4 shadow-xl md:shadow-none rounded-md mt-2">
            <DashboardSideBar active={5} />
          </div>
        </div>
        <div className="w-side md:w-[75%] lg:w-[80%] ">
          <div className="w-full">
            <AllEvents />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopAllEvents;
