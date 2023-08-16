import { ProductItem } from "./ProductItem"
import PRODUCT_DUMMY from "../../utils/ProductDummy";
export const ProductList = () => {
  return (
    <div className="lg:w-10/12 md:w-11/12 mx-auto mt-16">
      <div className="text-center leading-10">
        <h1 className="text-5xl">iPhone Series</h1>
        <p className="capitalize text-lg mt-5">Check & Get your Desired Product !</p>
      </div>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {
          PRODUCT_DUMMY.map((data,index)=>{
            return (
              <ProductItem data={data} key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}