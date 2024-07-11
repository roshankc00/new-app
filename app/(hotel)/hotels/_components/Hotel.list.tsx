import HotelCard from "@/components/cards/OfferPage.card";
import React from "react";

const HotelList = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg-px-8 my-10 z-0 ">
      <div className="grid grid-cols-1    px-10 md:px-0 md:grid-cols-2 2xl:grid-cols-3 gap-2 gap-y-5 place-content-center">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
    </div>
  );
};

export default HotelList;
