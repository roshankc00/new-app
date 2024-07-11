"use client";
import axios from "axios";
import React from "react";
import OfferDetails from "./_components/OfferDetails";
import { useSearchParams } from "next/navigation";
import { useGetSingleFlight } from "@/hooks/react-query/flight/get-single-flight";
import FlightDetails from "./_components/OfferDetails";

function SingleOfferPage({ params }: { params: { flightId: number } }) {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const where = searchParams.get("where");
  const adult = searchParams.get("adult");
  const child = searchParams.get("child");
  const departureDate = searchParams.get("departureDate");
  const price = searchParams.get("price");
  const body = {
    from,
    where,
    departureDate,
    price: price,
    adult: adult ? +adult : 0,
    child: child ? +child : 0,
    id: params.flightId,
  };
  console.log(body);
  const { data, isFetching, isLoading } = useGetSingleFlight(body);
  return (
    <div>{!isFetching && !isLoading && <FlightDetails data={data} />}</div>
  );
}
export default SingleOfferPage;
