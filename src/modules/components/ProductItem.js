import Image from "next/image";
import Link from 'next/link';
import { removeItemFromList, addToList } from "../../reducer/CartSlice";
import { useDispatch } from "react-redux";
import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
export const ProductItem = ({data}) => {
  const dispath = useDispatch();
  return (
    <div className="product-card">
        <div className="relative hover:cursor-pointer">
        <Link href={`/products/${data.id}`}>
          <Image src={data.thumbnail} width={600} height={600} className="object-contain" />
        </Link>
          <div className="card-icons">
            <span className="w-10 h-10 m-2 object-contain bg-white flex justify-center items-center hover:cursor-pointer">
              {
                data.favorite ? (
                  <XMarkIcon className="w-6 h-6 text-gray-500" onClick={()=>dispath(removeItemFromList(data.id))} />
                ) : (
                  <HeartIcon className="w-6 h-6 text-gray-500" onClick={()=>dispath(addToList(data))} />
                )
              }
            </span>
            <span className="w-10 h-10 m-2 object-contain bg-white flex justify-center items-center hover:cursor-pointer">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
            </span>
          </div>
          <div className="flex justify-center items-center product-options">
            <div className="bg-white w-10/12 flex justify-center items-center py-2">
              <div className="text-center hover:cursor-pointer">
                <Image src={data.thumbnail} width={30} height={30} className="" />
              </div>
            </div>
          </div>
        </div>
      <div className="mt-5 relative mb-16">
        <h3 className="text-base card-title">{data.title}</h3>
        <span className="text-red-500 hover:cursor-pointer card-options">+ Select Options</span>
        <p className="font-bold text-gray-500 font-base mt-3 absolute top-5">${data.price}.00</p>
      </div>
    </div>
  )
}