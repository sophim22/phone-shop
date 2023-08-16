import Slider from "react-slick";
import Image from "next/image";
import ArrowIcon from "./ArrowIcon";
import PRODUCT_DUMMY from "@/utils/ProductDummy";
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import Link from "next/link";
export const ProductDetailSlider = ({products}) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 200,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    cssEase: "linear",
    prevArrow: <ArrowIcon classNames={'previouse-icon top-44 left-0 hover:cursor-pointer hover:bg-black hover:text-white'} iconName={<ChevronLeftIcon />}/>,
    nextArrow: <ArrowIcon classNames={'next-icon top-44 bg-gray-500 right-0 hover:cursor-pointer hover:bg-black hover:text-white'} iconName={<ChevronRightIcon />}/>,
  };
  return (
    <Slider {...settings}>
      {
        products.map((product, index) => {
          return (
            <div className="mt-16" key={index}>
              <div className="mx-5">
                <Link href={`/products/${product.id}`}>
                  <Image src={product.thumbnail} width={600} height={600} alt="loto" className="" />
                </Link>
                <div className="text-center">
                  <Link href={`/products/${product.id}`}>
                    <h1 className="text-lg mt-5 hover:cursor-pointer hover:text-red-500 text-gray-500">{product.title}</h1>
                  </Link>
                  <p className="text-md mt-2 text-gray-500 font-bold">${product.price}.00 USD</p>
                  <Link href={`/products/${product.id}`}>
                    <button className="bg-black/90 text-gray-100 hover:text-black border border-black hover:bg-inherit text-ms text-center uppercase py-2 px-5 mt-5 transition duration-300 ease-in-out">Select Options</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </Slider>
  )
}