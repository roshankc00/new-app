"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Slider } from "./ui/slider";
import { Euro, Square } from "lucide-react";
import { getCurrentUser } from "@/common/api/auth/auth.api";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { BiSearchAlt } from "react-icons/bi";
const FilterBar = () => {
  const DEFAULT_CUSTOM_PRICE = [0, 100] as [number, number];
  const [filter, setfilter] = useState({
    from: "",
    where: "",
    overnightStays: "",
    price: DEFAULT_CUSTOM_PRICE,
  });
  return (
    <div className="mt-10 mx-auto max-w-6xl px-4 sm:px-6 lg-px-8 my-10 z-0 ">
      <div className="flex justify-center">
        <Card className=" p-3 py-5 bg-[#bae1d6] xl:w-[800px] w-full rounded-3xl">
          <CardContent>
            {/* first row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <h3 className="text-[#2d3769] text-[18px] font-bold mb-1">
                  From
                </h3>
                <Select>
                  <SelectTrigger className="w-full border-2  rounded-full">
                    <SelectValue placeholder="Start Search" />
                  </SelectTrigger>
                  <SelectContent className="w-full bg-[#f3f3f3] text-[#c3c3c3]">
                    <ScrollArea className="h-[200px]    rounded-md   bg-[#f3f3f3] relative">
                      <Input
                        className="outline-none bg-[#dedede] focus-visible:ring-0 rounded-full text-black"
                        placeholder="Search here..."
                      />
                      <BiSearchAlt className="absolute top-3 h-5 w-5 right-4" />
                      <SelectItem
                        value="light"
                        className="text-[16px] text-[#574c4c]"
                      >
                        Light
                      </SelectItem>
                      <SelectItem
                        value="dark"
                        className="text-[16px] text-[#574c4c]"
                      >
                        Dark
                      </SelectItem>
                      <SelectItem
                        className="text-[16px] text-[#574c4c]"
                        value="system"
                      >
                        System
                      </SelectItem>
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3 className="text-[#2d3769] text-[18px] font-bold mb-1 ">
                  To
                </h3>
                <Select>
                  <SelectTrigger className="rounded-full">
                    <SelectValue placeholder="Destination Search" />
                  </SelectTrigger>
                  <SelectContent className="w-full bg-[#f3f3f3] text-[#c3c3c3]">
                    <ScrollArea className="h-[200px]    rounded-md   bg-[#f3f3f3] relative">
                      <Input
                        className="outline-none bg-[#dedede] focus-visible:ring-0 rounded-full text-black"
                        placeholder="Search here..."
                      />
                      <BiSearchAlt className="absolute top-3 h-5 w-5 right-4" />
                      <SelectItem
                        value="light"
                        className="  text-[16px] text-[#574c4c]"
                      >
                        Light
                      </SelectItem>
                      <SelectItem
                        value="dark"
                        className="text-[16px] text-[#574c4c]"
                      >
                        Dark
                      </SelectItem>
                      <SelectItem
                        className="text-[16px] text-[#574c4c]"
                        value="system"
                      >
                        System
                      </SelectItem>
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* second row */}
            <div className="mt-4">
              <Button
                className="w-full rounded-full text-[#2d3769] text-[1rem] font-bold flex gap-2 items-center"
                variant={"outline"}
              >
                <Square color="black" />
                Explore Everywhere
              </Button>
            </div>
            {/* third row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <div>
                <h3 className="text-[#2d3769] text-[18px] font-bold mb-1 ">
                  Overnight Stays
                </h3>
                <Select>
                  <SelectTrigger className="w-full border- rounded-full">
                    <SelectValue placeholder="Start Search" />
                  </SelectTrigger>
                  <SelectContent className="w-full bg-[#f3f3f3] text-[#c3c3c3]">
                    <ScrollArea className="h-[200px]    rounded-md   bg-[#f3f3f3] relative">
                      <Input
                        className="outline-none bg-[#dedede] focus-visible:ring-0 rounded-full text-black"
                        placeholder="Search here..."
                      />
                      <BiSearchAlt className="absolute top-3 h-5 w-5 right-4" />
                      <SelectItem
                        value="light"
                        className="text-[16px] text-[#574c4c]"
                      >
                        Light
                      </SelectItem>
                      <SelectItem
                        value="dark"
                        className="text-[16px] text-[#574c4c]"
                      >
                        Dark
                      </SelectItem>
                      <SelectItem
                        className="text-[16px] text-[#574c4c]"
                        value="system"
                      >
                        System
                      </SelectItem>
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3 className="text-[#2d3769]  text-[18px] font-bold mb-1  ">
                  Departure month
                </h3>
                <Select>
                  <SelectTrigger className="rounded-full">
                    <SelectValue placeholder="Destination Search" />
                  </SelectTrigger>
                  <SelectContent className="w-full bg-[#f3f3f3] text-[#c3c3c3]">
                    <ScrollArea className="h-[200px]    rounded-md   bg-[#f3f3f3] relative">
                      <Input
                        className="outline-none bg-[#dedede] focus-visible:ring-0 rounded-full text-black"
                        placeholder="Search here..."
                      />
                      <BiSearchAlt className="absolute top-3 h-5 w-5 right-4" />
                      <SelectItem
                        value="light"
                        className="text-[16px] text-[#574c4c]   "
                      >
                        Light
                      </SelectItem>
                      <SelectItem
                        value="dark"
                        className="text-[16px] text-[#574c4c]"
                      >
                        Dark
                      </SelectItem>
                      <SelectItem
                        className="text-[16px] text-[#574c4c]"
                        value="system"
                      >
                        System
                      </SelectItem>
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* last  row */}

            <div className=" bg-white rounded-[20px] mt-5">
              <div className=" flex gap-2   px-5  items-center pt-5 ">
                <h3 className="text-[#2d3769] text-[18px]  font-bold mb-2 ">
                  Price
                </h3>
                <Slider
                  onValueChange={(range) => {
                    const [min, max] = range;
                    setfilter((prev) => ({
                      ...prev,
                      price: [min, max],
                    }));
                  }}
                  value={filter.price}
                  min={DEFAULT_CUSTOM_PRICE[0]}
                  defaultValue={DEFAULT_CUSTOM_PRICE}
                  max={DEFAULT_CUSTOM_PRICE[1]}
                  step={5}
                />
              </div>
              <div className="flex justify-between pb-3 mt-2 md:mt-0 ">
                <h3 className="text-[#2d3769] ms-24 bg-[#bae1d6] px-2 py-1/2 rounded-sm  text-sm font-bold mb-2 flex items-center gap-1/2">
                  from <Euro className="h-4 w-4" /> {filter.price[0]}{" "}
                </h3>
                <h3 className="text-[#2d3769] text-sm font-bold mb-2 mr-12 bg-[#bae1d6] px-2 py-1/2 flex items-center gap-1/2">
                  upto <Euro className="h-4 w-4" /> {filter.price[1]}{" "}
                </h3>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="flex gap-1 items-center justify-center bg-[#2d3769] w-[220px] text-[18px] text-white  rounded-full py-1 mt-5">
                <BiSearchAlt className="h-6 w-6" />
                Search
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FilterBar;
