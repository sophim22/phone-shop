import Slider from "react-slick";
import Image from "next/image";
import ArrowIcon from "./ArrowIcon";
import BANNER_DUMMY from "@/utils/BannerDummy";
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";

export const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 200,
    initialSlide: 1,
    cssEase: "linear",
    prevArrow: <ArrowIcon classNames={'previouse-icon lg:top-64 md:top-32 top-12 lg:-left-24 left-0 hover:cursor-pointer hover:bg-black hover:text-white'} iconName={<ChevronLeftIcon />}/>,
    nextArrow: <ArrowIcon classNames={'next-icon lg:top-64 md:top-32 top-12 lg:-right-24 right-0 hover:cursor-pointer hover:bg-black hover:text-white'} iconName={<ChevronRightIcon />}/>,
  };
  return (
    <Slider {...settings}>
      {
        BANNER_DUMMY.map((product, index)=>{
          return (
            <div className="flex justify-center items-center" key={index}>
              <div className="w-full flex justify-between items-center lg:px-0 px-3">
                <div className="lg:w-4/12">
                  <p className="lg:text-xl text-md">{product.text}</p>
                  <h1 className="lg:text-4xl text-lg font-bold mt-5 ">{product.title}</h1>
                  <div className="md:mt-5">
                    <button className="bg-black/70 text-white lg:px-16 px-5 text-center uppercase md:py-3 py-2 md:mt-10 mt-5">Shop Now</button>
                  </div>
                </div>
                <div className="lg:w-8/12 w-6/12 flex justify-end items-center ">
                  <div className="">
                    <Image src={product.image} width={600} height={600} alt="loto" className="" />
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </Slider>
  )
}