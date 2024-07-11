import { NextResponse } from "next/server";
import Amadeus from "amadeus";
import { AArrowDown } from "lucide-react";
const amadeus = new Amadeus({
  clientId: process.env.NEXT_PUBLIC_AMADEUS_API_KEY,
  clientSecret: process.env.NEXT_PUBLIC_AMADEUS_API_SECRET,
});

export async function GET(req) {
  try {
    const result = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: "SYD",
      destinationLocationCode: "BKK",
      departureDate: "2024-08-01",
      adults: "2",
    });
    return NextResponse.json(
      { data: result.data, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server error", success: false },
      { status: 500 }
    );
  }
}
