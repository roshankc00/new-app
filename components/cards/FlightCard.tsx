"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
type Props = {
  data: any;
  paramsdata: any;
};

const FlightCard: React.FC<Props> = ({ data, paramsdata }) => {
  const router = useRouter();
  return (
    <div>
      <Card>
        <CardContent className="flex gap-4 items-center py-6 p-2">
          <div className="border rounded-md">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/683/118/non_2x/icon-aeroplane-line-style-simple-illustration-editable-stroke-free-vector.jpg"
              alt=""
              className="h-20 w-20"
            />
          </div>
          <div>
            <h1>Type:{data.type}</h1>
            <h1>
              Price: <span className="text-[14px]">{data.price?.currency}</span>
              {data?.price?.total}
              <h1>Available seats:{data?.numberOfBookableSeats}</h1>
              <Button
                variant={"outline"}
                className="bg-[#2d3769] text-white"
                size={"sm"}
                onClick={() =>
                  router.push(
                    `/offers/${data.id}?from=${paramsdata.from}&where=${paramsdata.where}&adult=${paramsdata.adult}&child=${paramsdata.child}&price=${paramsdata.price}&departureDate=${paramsdata?.departureDate}`
                  )
                }
              >
                {" "}
                View Details
              </Button>
            </h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlightCard;
