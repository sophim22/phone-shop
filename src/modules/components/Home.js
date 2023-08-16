import { Banner } from "./Bananer";
import { Content } from "./Content";
import { ProductList } from "./ProductList";
import { NewArrival } from "./NewArrival";
import { WatchSeries } from "./WatchSeries";
import { useEffect, useRef, useState } from "react";
export const HomePage = () => {
  return (
    <div className="lg:px-16 md:px-8 px-5 relative">
      <Banner />
      <Content />
      <ProductList />
      <NewArrival />
      <WatchSeries />
    </div>
  )
}