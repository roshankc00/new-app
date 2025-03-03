import Image from "next/image";
import React from "react";
import packageImage from "@/public/packageImg.svg";
import offerImage from "@/public/offer1.svg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dot, Euro, LucideLayoutDashboard, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SlCalender } from "react-icons/sl";
const SingleHotelPage = () => {
  return (
    <div>
      <Image src={packageImage} alt="Image" />
      <div className="bg-[#bae1d6] text-xl p-4 rounded-2xl">
        <h3 className="text-[#2d3769] text-3xl flex flex-col justify-center items-center font-medium ">
          <del>from €300</del>
          <span>Only</span>
          <span className="text-xl">€179 /Person</span>
          <Button variant={"destructive"} className="w-[300px] md:w-[400px]">
            No possibility of cancellation
          </Button>
        </h3>
      </div>
      {/*  cards  */}
      <div className="grid grid-cols-1   2xl:grid-cols-2 px-20 mt-10">
        <div>
          <Card className="border-none p-0 rounded-b-2xl">
            <CardContent>
              <div className="border rounded-t-2xl rounded-b-2xl">
                <Image
                  src={packageImage}
                  alt="Image"
                  className=" rounded-t-2xl w-full"
                />

                <div className="bg-[#ededed] pt-2 pb-10 rounded-b-2xl">
                  <div className="flex justify-between px-4  ">
                    <div className="w-[30%] pt-10">
                      <h1 className="text-[#2d3769] font-bold">Hotel 1</h1>
                      <div className="flex gap-0.5 items-center">
                        <Star />
                        <Star />
                        <Star />
                      </div>
                    </div>
                  </div>
                  <div className="px-4">
                    <button className="flex gap-2 items-center p-2 px-2 bg-[#ff5b15] my-5">
                      {" "}
                      <LucideLayoutDashboard />
                      42 Piraeus, Athens, 10437, Greece
                    </button>
                    <p className="text-[#938e8e]  text-[18px] font-medium mt-2 mb-2 pt-3">
                      Check in
                    </p>
                    <h3 className="text-[#2d3769] text-xl  font-medium flex gap-3  items-center">
                      <SlCalender />
                      After 6:00 AM
                    </h3>
                    <p className="text-[#938e8e]  text-[18px] font-medium mt-2  mb-2 pt-3">
                      Check Out
                    </p>
                    <h3 className="text-[#2d3769] text-xl  font-medium flex gap-3  items-center">
                      <SlCalender />
                      Before 8:00 AM
                    </h3>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Image
            src={offerImage}
            alt="Image"
            className="rounded-t-[40px] w-full"
          />
          <div className="grid grid-cols-4 gap-3 mt-3">
            <Image
              src={offerImage}
              alt="Image"
              className="rounded-t-[20px] rounded-b-[20px]"
            />
            <Image
              src={offerImage}
              alt="Image"
              className="rounded-t-[20px] rounded-b-[20px]"
            />
            <Image
              src={offerImage}
              alt="Image"
              className="rounded-t-[20px] rounded-b-[20px]"
            />
            <Image
              src={offerImage}
              alt="Image"
              className="rounded-t-[20px] rounded-b-[20px]"
            />
          </div>
        </div>
      </div>

      {/* type of room  */}
      <div className="bg-[#bae1d6] text-xl p-4 mt-10">
        <h3 className="text-[#2d3769] text-3xl flex flex-col justify-center items-center font-medium ">
          <span>Types of Room</span>
          <span className="text-[18px] flex gap-1 items-center">
            <Dot className="w-4 h-5 rounded-full bg-[#bae1d6] " />
            Standard Room
          </span>
          <span className="text-[18px] flex gap-1 items-center">
            <Dot className="w-4 h-5 rounded-full bg-[#bae1d6] " />
            Economy room
          </span>
        </h3>
      </div>
      {/* facilities  */}
      <div className="grid  grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mx-20 bg-[#EDEDED] mt-10">
        <div className="py-10">
          <div className="px-10 border-none 2xl:border md:border-r-black ">
            <h3 className="text-[#2d3769] text-[21px] text-center font-bold ">
              Internet
            </h3>
            <h1 className="text-[21px] text-[#555555] text-center">Wifi</h1>
            <p className="text-[#555555] text-[20px]  text-center text-sm ">
              Free access is provided to Internet in all its areas hotel
            </p>
            <h3 className="text-[#2d3769] text-[21px] text-center font-bold mt-10">
              Reception
            </h3>
            <h1 className="text-[21px] text-[#555555] text-center">
              Reception
            </h1>
            <p className="text-[#555555] text-[21px]  text-center">
              24 hour reception
            </p>
            <p className="text-[#555555] text-[21px]  text-center mt-5">
              Luggage storage
            </p>
            <p className="text-[#555555] text-[21px]  text-center">
              Luggage storage is available
            </p>
            <p className="text-[#555555] text-[21px]  text-center mt-5">
              Fax / Photocopier
            </p>
            <p className="text-[#555555] text-[21px]  text-center">
              Fax/photocopy available without charge
            </p>
            <p className="text-[#555555] text-[21px]  text-center mt-5">
              Security box
            </p>
            <p className="text-[#555555] text-[21px]  text-center">
              A safety deposit box is available at reception, free of charge.
            </p>
          </div>
        </div>
        <div className="py-10">
          <div className="px-10 border border-none 2xl:border 2xl:border-r-black">
            <h3 className="text-[#2d3769] text-[21px] text-center font-bold ">
              Room
            </h3>
            <h1 className="text-[21px] text-[#555555] text-center">
              {" "}
              Hairdryer
            </h1>
            <p className="text-[#555555] text-[21px]  text-center">
              Hair dryer is available
            </p>
            <p className="text-[#555555] text-[21px]  text-center mt-5">
              Towels
            </p>
            <p className="text-[#555555] text-[21px]  text-center">
              Towels are available
            </p>
            <p className="text-[#555555] text-[21px]  text-center mt-5">TV</p>
            <p className="text-[#555555] text-[21px] px-10 text-center">
              The room has a TV
            </p>
            <p className="text-[#555555] text-[21px]  text-center mt-5">
              Air-conditioner
            </p>
            <p className="text-[#555555] text-[21px]  text-center">
              For an additional fee Air-conditioning is available for a fee
            </p>
            <p className="text-[#555555] text-[21px]  text-center mt-5">
              Heating
            </p>
            <p className="text-[#555555] text-[21px]  text-center">
              Heating is available room has a TV
            </p>
            <p className="text-[#555555] text-[21px]  text-center mt-5">
              Phone
            </p>
            <p className="text-[#555555] text-[21px]  text-center">
              The room has a telephone
            </p>
          </div>
        </div>
        <div className="px-16">
          <h3 className="text-[#2d3769] text-[21px] text-center font-bold mt-10">
            Facilities
          </h3>
          <p className="text-[21px] text-[#555555] text-center">
            Parking lot Parking, where available extra charge For an additional
            fee
          </p>
          <h3 className="text-[#2d3769] text-[21px] text-center font-bold mt-10">
            Accessibility
          </h3>
          <p className="text-[21px] text-[#555555] text-center">
            Elevator The property has an elevator fee
          </p>
          <h3 className="text-[#2d3769] text-[21px] text-center font-bold mt-10">
            Food & Beverage
          </h3>
          <p className="text-[21px] text-[#555555] text-center">
            Bar The property has a bar For an additional fee
          </p>
          <h3 className="text-[#2d3769] text-[21px] text-center font-bold mt-10">
            Prohibited / Not allowed
          </h3>
          <p className="text-[21px] text-[#555555] text-center">
            - Not provided No smoking Smoking is prohibited for everyone the
            hotel premises Bar The property has a bar For an additional fee
          </p>

          <p className="text-[#555555] text-[21px]  text-center mt-5">Pets</p>
          <p className="text-[#555555] text-[21px]  text-center">
            Pets are not allowed
          </p>
        </div>
      </div>
      {/* Information */}
      <div className="mx-auto max-w-4xl mt-10">
        <h3 className="text-[#2d3769] text-4xl text-center font-bold ">
          Information
        </h3>
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1  gap-5 mt-5"
        >
          <AccordionItem
            value="item-1"
            className="border px-4 rounded-2xl bg-[#bae1d6]"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border px-4 rounded-2xl bg-[#bae1d6]"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border px-4 rounded-2xl bg-[#bae1d6]"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border px-4 rounded-2xl bg-[#bae1d6]"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="border px-4 rounded-2xl bg-[#bae1d6]"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className="border px-4 rounded-2xl bg-[#bae1d6]"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SingleHotelPage;
