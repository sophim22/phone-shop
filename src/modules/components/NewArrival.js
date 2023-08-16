import NEW_PRODUCT_DUMMY from "@/utils/NewArrival";
import { ProductItem } from "./ProductItem";
export const NewArrival = () => {
  const getOne = NEW_PRODUCT_DUMMY[0].items;
  return (
    <section className="lg:w-10/12 md:w-11/12 mx-auto mt-16">
      <div>
        <nav className="">
          <div className="lg:flex items-center">
            <div className="w-full bg-green-300 lg:w-3/12 md:w-5/12">
              <button className="bg-black py-5 px-12 w-full text-white text-lg">New Arrival</button>
            </div>
            <div className="md:flex grid grid-cols-1 justify-between items-center lg:w-9/12 w-full">
              <ul className="md:flex lg:ml-10 lg:mt-0 md:mt-10 items-center justify-center md:w-auto w-3/12 md:mx-0 mx-auto text-center">
                <li className="hover:cursor-pointer leading-10 border-b-2 border-black">MacBook</li>
                <li className="md:mx-5 hover:cursor-pointer leading-10 text-gray-500">Pad</li>
                <li className="md:mx-5 hover:cursor-pointer leading-10 text-gray-500">Watch</li>
              </ul>
              <div className="lg:mt-0 mt-10 flex justify-center items-center md:order-last order-first">
                <button className="uppercase text-white bg-black py-2 px-5 text-base">View More</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div id="mac-book" className="mt-10">
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {
            getOne.map((product,index)=>{
              return (
                <ProductItem data={product} key={index} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}