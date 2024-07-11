"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { ChevronRight, Euro, Star } from "lucide-react";
import { useRouter } from "next/navigation";

const OfferPageCard = () => {
  const router = useRouter();
  return (
    <div>
      <Card className="border-none p-0 rounded-b-2xl">
        <CardContent>
          <div className="border rounded-t-2xl rounded-b-2xl">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
              alt=""
              className=" rounded-t-2xl w-full bg-[#00ff94]"
            />
            <div className="bg-[#bae1d6] pt-2 pb-10 rounded-b-2xl">
              <div className="flex justify-between px-4  ">
                <div className="w-[30%]">
                  <h1 className="text-[#2d3769] font-bold">Hotel 1</h1>
                  <div className="flex gap-0.5 items-center">
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
                <div className="w-[40%]">
                  <h1 className="text-sm font-bold text-[#2d3769] w-full">
                    Transportaion-Accomadation
                  </h1>
                  <h1 className="flex gap-1 text-[#2d3769] font-semibold mt-5">
                    From :{" "}
                    <span className="flex text-xl items-center font-bold">
                      {" "}
                      <Euro /> 99{" "}
                    </span>
                  </h1>
                </div>
              </div>
              <div className="px-[10%]">
                <button
                  className="flex gap-2 items-center justify-center bg-[#2d3769] text-xl text-white  w-full rounded-full py-1 mt-10"
                  onClick={() => router.push("/hotels/id")}
                >
                  See the Hotel <ChevronRight />{" "}
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfferPageCard;
