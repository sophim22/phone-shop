import Link from "next/link";
import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";
export const WishList = () => {
  const list = useSelector(state=> state.list);
  return (
    <div>
      <div className="py-3 bg-gray-50 text-gray-500 w-full">
        <div className="w-8/12 mx-auto flex leading-10 space-x-3 text-small">
          <Link href={'/'}>Home</Link>
          <span>/</span>
          <p>Wish List</p>
        </div>
      </div>
      <div className="lg:w-8/12 w-11/12 mx-auto mt-16">
        {
          list.length === 0 ? (
            <h3 className="md:text-4xl">Your wishlist is currently empty!</h3>
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
              {
                list.map((item, index)=>{
                  return <ProductItem data={item} key={index} />
                })
              }
            </div>
          )
        }
      </div>
    </div>
  )
}