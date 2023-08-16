import { useTranslation } from "next-i18next";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import { SearchBar } from "./SearchBar";
import Link from "next/link";
import { CartItem } from "./CartList";
import { useState } from "react";
import { useSelector } from 'react-redux';
export const Navbar = () => {
  const { t } = useTranslation("navbar");
  const [isSearch, setIsSearch] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useSelector((state) => state);
  const getTotalQuantity = () => {
    let total = 0
    if (cart.length) {
      total = cart.length;
    }
    return total;
  }
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
  return (
    <div className="relative">
      <SearchBar isSearch={isSearch} setIsSearch={setIsSearch} onHandleSearch={onHandleSearch} />
      <CartItem isCartOpen={isCartOpen} onHandleCartItem={onHandleCartItem} />
      <nav className="lg:flex hidden justify-between w-full px-16">
        <section>
          <div className="text-2xl font-bold py-6">
            <Link href={'/'}>Logo</Link>
          </div>
        </section>
        <section>
          <ul className="flex justify-between">
            <li>
              <Link href={'/'} className="flex justify-center px-5 py-8 uppercase">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href={'/categories/huawei'} className="flex justify-center px-5 py-8 uppercase">
                {t("huawei")}
              </Link>
            </li>
            <li>
              <Link href={'/categories/apple'} className="flex justify-center px-5 py-8 uppercase">
                {t("apple")}
              </Link>
            </li>
            <li>
              <Link href={'/categories/opo'} className="flex justify-center px-5 py-8 uppercase">
                {t("oppo")}
              </Link>
            </li>
            <li>
              <Link href={'/categories/samsung'} className="flex justify-center px-5 py-8 uppercase">
                {t("samsung")}
              </Link>
            </li>
            <li>
              <Link href={'/pages/about'} className="flex justify-center px-5 py-8 uppercase">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href={'/pages/contact'} className="flex justify-center px-5 py-8 uppercase">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <ul className="flex justify-between">
            <li className="mx-3 py-8 hover:cursor-pointer" onClick={onHandleSearch}>
              <MagnifyingGlassIcon className="h-7 w-7 text-gray-500" />
            </li>
            <li className="mx-3 py-8 hover:cursor-pointer">
              <Link href={'/account/login'}>
                <UserIcon className="h-7 w-7 text-gray-500" />
              </Link>
            </li>
            <li className="mx-3 py-8 hover:cursor-pointer">
              <Link href={"/wishlist"}>
                <HeartIcon className="h-7 w-7 stroke-[1.5] stroke-slate-500 fill-none" />
              </Link>
            </li>
            <li className="mx-3 py-8 hover:cursor-pointer ">
              <div className="relative" onClick={onHandleCartItem}>
                <ShoppingBagIcon className="h-7 w-7 text-gray-500" />
                <span className="absolute -top-1 -right-1 z-30 text-white flex justify-center items-center text-sm bg-red-500 w-4 h-4 rounded-full"> {getTotalQuantity() || 0}</span>
              </div>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  )
}