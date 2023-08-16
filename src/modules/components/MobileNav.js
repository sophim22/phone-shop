import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import PlusSmallIcon from "@heroicons/react/24/solid/PlusSmallIcon";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import classNames from 'classnames';
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { CartItem } from "./CartList";
import { useSelector } from "react-redux";
export const MobileNav = ({ items }) => {
  const { t } = useTranslation("navbar");
  const [isToggle, setToggle] = useState(false);
  // const [accordion, setActiveAccordion] = useState(0);
  // const [sub_accordion, setActiveSubAccordion] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useSelector((state) => state);

  const onHandleSearch = () => {
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
    setIsSearch(!isSearch)
  }
  const onHandleCartItem = () => {
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
    setIsCartOpen(!isCartOpen);
  };
  // function toogleAccordion(index) {
  //   if (index === accordion) {
  //     setActiveAccordion(-1);
  //     return;
  //   }
  //   setActiveAccordion(index);
  // }
  function toogleSubAccordion(index) {
    if (index === sub_accordion) {
      setActiveSubAccordion(-1);
      return;
    }
    setActiveSubAccordion(index);
  }
  const handleHumberger = () => {
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
    setToggle(!isToggle);
  };
  const getTotalQuantity = () => {
    let total = 0
    if (cart.length) {
      total = cart.length;
    }
    return total;
  }

  return (
    <div>
      <SearchBar isSearch={isSearch} onHandleSearch={onHandleSearch} />
      <CartItem items={cart} isCartOpen={isCartOpen} onHandleCartItem={onHandleCartItem} />
      <div className="relative">
        <div className={classNames({
          'toggle-active': isToggle,
          'toggle-inactive': !isToggle,
        })} onClick={handleHumberger}></div>
        <section className={classNames({
          'menu-active': isToggle,
          'menu-inactive': !isToggle,
        })}>
          <ul>
            <li className="mt-5 w-full">
              <form action='#' className="w-11/12 flex bg-gray-100 rounded-md justify-between mx-auto px-5 md:py-2">
                <input type="text" placeholder="Search our store..." className="py-2 w-10/12 fill-none border-none outline-none bg-inherit" />
                <button type="submit">
                  <MagnifyingGlassIcon className="md:w-8 w-6 md:h-8 h-6 text-gray-500" />
                </button>
              </form>
            </li>
            <li className="hover:cursor-pointer relative group parent mt-2" onClick={handleHumberger}>
              <div className="flex items-center justify-between px-5 py-2 uppercase">
                <Link href={'/'}>
                  <p>{t("home")}</p>
                </Link>
              </div>
            </li>
            <li className="hover:cursor-pointer relative group parent" onClick={handleHumberger}>
              <div className="flex items-center justify-between px-5 py-2 uppercase">
                <Link href={'/categories/huawei'}>
                  <p>{t("huawei")}</p>
                </Link>
              </div>
            </li>
            <li className="relative group parent" onClick={handleHumberger}>
              <div className="flex items-center justify-between px-5 py-2 uppercase hover:cursor-pointer">
                <Link href={'/categories/apple'}>
                  <p>{t("apple")}</p>
                </Link>
              </div>
            </li>
            <li className="relative group parent" onClick={handleHumberger}>
              <div className="flex items-center justify-between px-5 py-2 uppercase hover:cursor-pointer">
                <Link href={'/categories/oppo'}>
                  <p>{t("oppo")}</p>
                </Link>
              </div>
            </li>
            <li className="relative group parent" onClick={handleHumberger}>
              <div className="flex items-center justify-between px-5 py-2 uppercase hover:cursor-pointer">
                <Link href={'/categories/samsung'}>
                  <p>{t("samsung")}</p>
                </Link>
              </div>
            </li>
            <li className="px-5 py-2 hover:cursor-pointer uppercase relative" onClick={handleHumberger}>
              <Link href={'/pages/about'}>
                <p>{t("about")}</p>
              </Link>
            </li>
            <li className="px-5 py-2 hover:cursor-pointer uppercase relative" onClick={handleHumberger}>
              <Link href={'/pages/contact'}>
                <p>{t("contact")}</p>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <nav className="lg:hidden flex justify-between items-center p-5 bg-white w-full shadow-md">
        <section>
          <h3 className="font-bold text-xl">Logo</h3>
        </section>
        <section className="flex items-center">
          <div className="mr-5">
            <ul className="flex justify-between">
              <li className="hover:cursor-pointer px-3" onClick={onHandleSearch}>
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              </li>
              <li className="hover:cursor-pointer px-3">
                <Link href={"/account/login"}>
                  <UserIcon className="h-6 w-6 text-gray-500" />
                </Link>
              </li>
              <li className="hover:cursor-pointer px-3">
                <Link href={"/wishlist"}>
                  <HeartIcon className="h-6 w-6 stroke-[1.5] stroke-slate-500 fill-none" />
                </Link>
              </li>
              <li className="hover:cursor-pointer px-3 relative" onClick={onHandleCartItem}>
                <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
                <span className="absolute -top-1 right-2 z-10 text-white flex justify-center items-center text-sm bg-red-500 w-4 h-4 rounded-full"> {getTotalQuantity() || 0}</span>
              </li>
            </ul>
          </div>
          <div>
            <button onClick={handleHumberger}>
              <Bars3Icon className="h-8 w-8" />
            </button>
          </div>
        </section>
      </nav>
    </div>
  )
}