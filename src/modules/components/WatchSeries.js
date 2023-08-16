import Image from "next/image";
import { ProductItem } from "./ProductItem";
import WATCH_SERIES_DUMMY from "@/utils/WatchSery";
export const WatchSeries = () => {
  return (
    <div className="lg:w-10/12 md:w-11/12 mx-auto mt-16 lg:flex justify-between">
      <div className="lg:4/12">
        <Image src={require("../../assets/images/watchbanner.webp")} width={370} height={300} />
      </div>
      <div className="lg:w-8/12 w-full lg:ml-8 lg:mt-0 mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {
            WATCH_SERIES_DUMMY.map((product, index) => {
              return (
                <ProductItem data={product} key={index} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}