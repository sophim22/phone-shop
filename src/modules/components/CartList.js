import classNames from "classnames";
import Image from "next/image";
import Router from 'next/router'  
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { useState } from "react";
import { removeItemFromCart } from "@/reducer/CartSlice";
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
export const CartItem = ({ items, isCartOpen, onHandleCartItem }) => {
  const [isAgree, setIsAgree] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onHandleClickAgree = (e) => {
    if (e.target.checked) {
      setIsAgree(true);
    } else {
      setIsAgree(false);
    }
  }
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
  return (
    <div>
      <div className={classNames({
        'container-active': isCartOpen,
        'container-inactive': !isCartOpen,
      })} onClick={onHandleCartItem}></div>
      <div className={classNames({
        'cart-active': isCartOpen,
        'cart-inactive': !isCartOpen,
      })}>
        <div className="border-b p-5 relative">
          <h3 className="text-xl font-bold text-gray-500">Cart</h3>
        </div>
        <div className="space-y-5">
          {
            cart.length == 0 ? (
              <p className="text-xl text-gray-500 p-5">Your cart is currently empty.</p>
            )
              :
              (
                <div>
                    {
                      cart.map((item, index) => {
                        return (
                          <div key={index} className="flex justify-between space-x-5 border-b pb-5 px-5">
                            <div className="flex py-3">
                              <Image src={item.image} width={60} height={60} />
                              <div className="ml-5">
                                <h3 className="text-xl">{item.title}</h3>
                                <p className="text-red-500">${item.price}.00</p>
                                <span className="text-gray-500 text-sm">Quantity: {item.quantity}</span>
                              </div>
                            </div>
                            <button className="flex justify-end text-gray-500 h-5 my-3 hover:text-red-500" onClick={()=>dispatch(removeItemFromCart(item.id))}>
                              <XMarkIcon className="w-5 h-5" />
                            </button>
                          </div>
                        )
                      })
                    } 
                  <div className="flex justify-between border-b border-t px-5 py-3 mt-16">
                    <h4 className="font-bold">Total:</h4>
                    <p>${getTotal().totalPrice}.00</p>
                  </div>
                  <div className="mt-10 text-gray-500 px-5">
                    <input type="checkbox" id="agreement" className="mr-2" onChange={onHandleClickAgree} />
                    <label htmlFor='agreement'>I agree with the terms and conditions</label>
                    <div className="mt-3">
                      <button className={classNames({
                        'uppercase bg-red-500 w-full p-2 hover:bg-red-600 text-white': isAgree,
                        'uppercase bg-red-300 w-full p-2 text-white disabled': !isAgree,
                      })} disabled={!isAgree} onClick={() => Router.push('/checkout')}>
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              )
          }
        </div>

      </div>
    </div>
  )
}