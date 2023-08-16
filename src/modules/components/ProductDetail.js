import Link from "next/link";
import Image from "next/image";
import ViewfinderCircleIcon from "@heroicons/react/24/outline/ViewfinderCircleIcon";
import StarIcon from "@heroicons/react/24/outline/StarIcon";
import PlusSmallIcon from "@heroicons/react/24/solid/PlusSmallIcon";
import MinusSmallIcon from "@heroicons/react/24/solid/MinusSmallIcon";
import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import ImageViewer from 'react-simple-image-viewer';
import { useState, useCallback } from "react";
import classNames from "classnames";
import InnerImageZoom from 'react-inner-image-zoom';
import { ProductItem } from "./ProductItem";
import PRODUCT_DUMMY from "@/utils/ProductDummy";
import { ProductDetailSlider } from "./ProductDetailSlider";
import { useDispatch } from 'react-redux';
import { addToCart, addToList, removeItemFromList } from "../../reducer/CartSlice";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
} from 'next-share';
export const ProductDetail = ({ product }) => {
  const products = PRODUCT_DUMMY.slice(0, 3);
  const [qty, setQty] = useState(product.quantity || 1);
  const [isAgree, setIsAgree] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState(product.images || []);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(product.favorite);
  console.log(isFavorite)
  const dispatch = useDispatch();
  const onHandleClickAgree = (e) => {
    if (e.target.checked) {
      setIsAgree(true);
    } else {
      setIsAgree(false);
    }
  }
  const onHandleIncreaseQty = () => {
    setQty(qty + 1);
  }
  const onHandleDecreaseQty = () => {
    if (qty === 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  }
  const openImageViewer = useCallback(() => {
    if (currentImage < product.images.length) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const onHandleNavigateImage = (index) => {
    setCurrentImage(index);
  }
  return (
    <div>
      <div className="py-3 bg-gray-50 text-gray-500 w-full">
        <div className="w-8/12 mx-auto flex leading-10 space-x-3 text-small">
          <Link href={'/'}>Home</Link>
          <span>/</span>
          <p>{product.title}</p>
        </div>
      </div>
      <div className="mt-16 lg:w-8/12 mx-auto lg:flex border-b pb-16">
        <div className="lg:w-6/12 w-11/12 mx-auto">
          <div className="relative z-0 w-full object-contain container">
            <div className="">
              <InnerImageZoom src={images[currentImage]} zoomSrc={images[currentImage]} zoomScale={1} zoomType="hover" hideHint={true} />
              {isViewerOpen && (
                <ImageViewer
                  src={product.images}
                  currentIndex={currentImage}
                  disableScroll={false}
                  closeOnClickOutside={true}
                  onClose={closeImageViewer}
                />
              )}
            </div>
            <ViewfinderCircleIcon className="w-9 h-9 absolute top-2 right-2 hover:cursor-pointer text-gray-500" onClick={openImageViewer} />
          </div>
          <div className="w-10/12 mx-auto mt-10">
            <div className="grid grid-cols-4 gap-5">
              {
                images.map((image, index) => {
                  return <Image src={image} key={index} width={100} height={100} className="hover:cursor-pointer" onClick={() => onHandleNavigateImage(index)} />
                })
              }
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 w-11/12 mx-auto lg:ml-10 leading-10 lg:mt-0 mt-10">
          <h1 className="text-xl">{product.title}</h1>
          <div className="flex items-center">
            <div className="flex">
              <StarIcon className="w-5 h-5 text-yellow-300" />
              <StarIcon className="w-5 h-5 text-yellow-300" />
              <StarIcon className="w-5 h-5 text-yellow-300" />
              <StarIcon className="w-5 h-5 text-yellow-300" />
              <StarIcon className="w-5 h-5 text-yellow-300" />
            </div>
            <p className="mx-5 text-gray-400">No reviews</p>
          </div>
          <div className="contact"></div>
          <div className="storage"></div>
          <p className="text-sm text-gray-700 capitalize">Availability: <span className="text-red-500 text-sm font-bold capitalize">{product.stock} in stock</span></p>
          <p className="font-bold">${product.price}.00</p>
          <div className="flex mt-5">
            <p>Size:</p>
            <div className="flex mx-5">
              {
                product.storages.map((storage, index) => {
                  return (
                    <button className="px-5 mx-2 border" key={index}>{storage.size}GB</button>
                  )
                })
              }
            </div>
          </div>
          <div className="flex mt-5">
            <p>Color:</p>
            <div className="flex mx-5">
              {
                images.map((image, index) => {
                  return (
                    <button className="w-12 h-12 rounded-full border-gray-500 mx-2 p-1 text-center border" key={index} onClick={() => onHandleNavigateImage(index)}>
                      <Image src={image} width={50} height={50} className="rounded-full" />
                    </button>
                  )
                })
              }
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p>Quantity:</p>
            <div className="border-b-2 border-gray-400 flex justify-between w-32 mx-5">
              <MinusSmallIcon className="w-5 hover:cursor-pointer" onClick={onHandleDecreaseQty} />
              <p>{qty}</p>
              <PlusSmallIcon className="w-5 hover:cursor-pointer" onClick={onHandleIncreaseQty} />
            </div>
          </div>
          <div className="mt-5 flex items-center">
            <button className="uppercase bg-black/80 hover:bg-white text-white px-12 py-2 hover:text-gray-500 border transition duration-300 ease-in-out" onClick={()=>dispatch(addToCart({id: product.id, title: product.title, image: product.thumbnail, price: product.price, quantity: qty}))}>Add to cart</button>
            {
              !isFavorite ? (
                <button className="w-14 h-14 text-center hover:bg-black/80 ml-8 hover:text-white text-gray-500 flex justify-center items-center border transition duration-300 ease-in-out" onClick={()=>dispatch(addToList(product))} hidden={isFavorite} >
                  <HeartIcon className="w-8" />
                </button>
              ) : (
              <button className="w-14 h-14 text-center hover:bg-black/80 ml-8 hover:text-white text-gray-500 flex justify-center items-center border transition duration-300 ease-in-out" onClick={()=>dispatch(removeItemFromList(product.id))} hidden={!isFavorite}>
                <XMarkIcon className="w-8" />
              </button>
              )
            }
          </div>
          <div className="mt-5 text-gray-500">
            <input type="checkbox" id="agreement" className="mr-2" onChange={onHandleClickAgree} />
            <label htmlFor='agreement'>I agree with the terms and conditions</label>
            <div>
              <button className={classNames({
                'uppercase bg-yellow-500 w-full py-1 text-black': isAgree,
                'uppercase bg-yellow-200 w-full py-1 text-gray-500 disabled': !isAgree,
              })} disabled={!isAgree}>Buy it now</button>
            </div>
          </div>
          <div className="text-gray-500">
            <div className="border-b mt-5 py-2">
              <p className="text-xl py-5">Guaranteed safe checkout</p>
            </div>
            <div className="mt-2">
              <p>Vender: <span className="ml-5">Sophim</span></p>
            </div>
            <div className="mt-2">
              <p>Type: <span className="ml-5">Extenal</span></p>
            </div>
            <div className="flex mt-2">
              <p>Share:</p>
              <div className="flex ml-5 space-x-3">
                <FacebookShareButton
                  url={'https://github.com/next-share'}
                  title="MyStore"
                  hashtag={'#nextshare'}
                >
                  <FacebookIcon size={36} round />
                </FacebookShareButton>
                <TwitterShareButton
                  url={'https://github.com/next-share'}
                  hashtag={'#nextshare'}
                >
                  <TwitterIcon size={36} round />
                </TwitterShareButton>
                <PinterestShareButton
                  url={'https://github.com/next-share'}
                  hashtag={'#nextshare'}
                >
                  <PinterestIcon size={36} round />
                </PinterestShareButton>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="lg:w-8/12 w-11/12 mx-auto mt-16 py-8" id="offset">
        <div className="text-justify text-gray-500 mt-10">
          <h3 className="font-bold text-2xl text-center">Descriptions</h3>
          <p className="text-lg leading-10 mt-10">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

            [affiliate_link]https://affiliate-program.amazon.com[/affiliate_link]

            [short_description]
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

            [/short_description] [product_description]
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

            To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?

            [/product_description]
          </p>
        </div>
      </div>
      <div className="lg:w-8/12 w-11/12 mx-auto mt-16 py-8">
        <h3 className="text-center text-2xl text-gray-700">Related Products</h3>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {
            products.map((data, index) => {
              return (
                <ProductItem data={data} key={index} />
              )
            })
          }
        </div>
      </div>
      <div className="lg:w-8/12 w-11/12 mx-auto mt-16 py-8 relative">
        <h3 className="text-center text-2xl text-gray-700">Recently Viewed Products</h3>
        <div id="recent-product" className="relative">
          <ProductDetailSlider products={PRODUCT_DUMMY} />
        </div>
      </div>
    </div>
  )
}
