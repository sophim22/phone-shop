import { ProductItem } from "./ProductItem";
import Link from "next/link";
export const CategoryList = ({ data, category }) => {
  return (
    <div>
      <div className="py-3 bg-gray-50 text-gray-500 w-full">
        <div className="w-8/12 mx-auto flex leading-10 space-x-3 text-small">
          <Link href={'/'}>Home</Link>
          <span>/</span>
          <p className="capitalize">{category}</p>
        </div>
      </div>
      <div className="lg:w-8/12 w-11/12 mx-auto mt-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
          {
            data.length !== 0 && data.map((item, index)=>{
              return (<ProductItem data={item} key={index} />)
            })
          }
        </div>
      </div>
    </div>
  )
}