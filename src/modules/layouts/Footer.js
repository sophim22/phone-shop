import { useTranslation } from "next-i18next";
import TruckIcon from "@heroicons/react/24/solid/TruckIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import Bars2Icon from "@heroicons/react/24/solid/Bars2Icon";
import ArrowSmallRightIcon from "@heroicons/react/24/solid/ArrowSmallRightIcon";
import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";
import EnvelopeIcon from "@heroicons/react/24/solid/EnvelopeIcon";
import Image from 'next/image'
const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <div className="footer relative">
      <section className="lg:w-7/12 md:w-11/12 w-11/12 mx-auto md:grid grid-cols-3 gap-5 text-center p-5">
        <div className="p-5">
          <div className="flex justify-center items-center">
            <span className="w-12 h-12 rounded-full">
              <TruckIcon className="w-12 h-12 text-gray-500" />
            </span>
          </div>
          <h3 className="text-xl font-bold mt-5">{t("delivery.title")}</h3>
          <p className="mt-3 text-gray-800">{t("delivery.text")}</p>
        </div>
        <div className="p-5">
          <div className="flex justify-center">
            <span className="flex justify-center items-center ">
              <CurrencyDollarIcon className="w-12 h-12 fill-none stroke-4 stroke-slate-500" />
            </span>
          </div>
          <h3 className="text-xl font-bold mt-5">{t("payment.title")}</h3>
          <p className="mt-3 text-gray-800">{t("payment.text")}</p>
        </div>
        <div className="p-5">
          <div className="flex justify-center">
            <span className="rounded-full border-2 w-12 h-12 flex justify-center items-center border-gray-600">
              <Bars2Icon className="w-8 h-8 text-gray-500" />
            </span>
          </div>
          <h3 className="text-xl font-bold mt-5">{t("personal.title")}</h3>
          <p className="mt-3 text-gray-800">{t("personal.text")}</p>
        </div>
      </section>
      <section className="lg:px-16 md:px-8 px-5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 mt-5">
        <div className="">
          <h3 className="text-2xl font-bold">Logo</h3>
          <ul className="mt-5 leading-10">
            <li className="flex items-center text-gray-800">
              <HomeIcon className="w-5 h-5 text-gray-500" />
              <span className="mx-3">271, Toul Toumpong</span>
            </li>
            <li className="flex items-center text-gray-800">
              <PhoneIcon className="w-5 h-5 text-gray-500" />
              <span className="mx-3">+09876543</span>
            </li>
            <li className="flex items-center text-gray-800">
              <EnvelopeIcon className="w-5 h-5 text-gray-500" />
              <span className="mx-3">phone@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="leading-10">
          <h3 className="font-bold text-lg">{t("account.header")}</h3>
          <ul className="text-gray-800 font-small">
            <li>
              <a href="#" className="hover:text-red-400">{t("account.accountUrl.li1")}</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">{t("account.accountUrl.li2")}</a>
            </li><li>
              <a href="#" className="hover:text-red-400">{t("account.accountUrl.li3")}</a>
            </li><li>
              <a href="#" className="hover:text-red-400">{t("account.accountUrl.li4")}</a>
            </li>
          </ul>
        </div>
        <div className="leading-10">
          <h3 className="font-bold text-lg">{t("information.header")}</h3>
          <ul className="text-gray-800 font-small">
            <li>
              <a href="#" className="hover:text-red-400">
                {t("information.informationUrl.li1")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                {t("information.informationUrl.li2")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                {t("information.informationUrl.li4")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400">
                {t("information.informationUrl.li4")}
              </a>
            </li>
          </ul>
        </div>
        <div className="leading-10">
          <h3 className="font-bold text-lg">{t("socialMedia.header")}</h3>
          <ul className="text-gray-800 font-small">
            <li>
              <a href="#" className="hover:text-red-400 flex items-center">
                <span className="mr-5">
                  <Image src={require("../../assets/svg/facebook-f.svg")}
                    width={14}
                    height={14}
                    alt="fb"
                  />
                </span>
                {t("socialMedia.socialMediaUrl.li1")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 flex items-center">
                <span className="mr-5">
                  <Image src={require("../../assets/svg/instagram.svg")}
                    width={18}
                    height={18}
                    alt="int"
                  />
                </span>
                {t("socialMedia.socialMediaUrl.li2")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 flex items-center">
                <span className="mr-5">
                  <Image src={require("../../assets/svg//linkedin-in.svg")}
                    width={18}
                    height={18}
                    alt="ln"
                  />
                </span>
                {t("socialMedia.socialMediaUrl.li3")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 flex items-center">
                <span className="mr-5">
                  <Image src={require("../../assets/svg/pinterest.svg")}
                    width={18}
                    height={18}
                    alt="pts"
                  />
                </span>
                {t("socialMedia.socialMediaUrl.li4")}
              </a>
            </li>
          </ul>
        </div>
        <div className="leading-10">
          <h3 className="font-bold lg:text-4xl text-2xl mt-2">{t("subscribe")}</h3>
          <form>
            <div className="border-b-gray-500 border-b-2 flex">
              <input type="text" placeholder="Your email address." className="py-3 w-full fill-none outline-none border-none focus:border-none focus:outline-none bg-inherit" />
              <button>
                <ArrowSmallRightIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="lg:px-16 md:px-8 px-5 py-5 border-t border-gray-300 mt-5 md:flex justify-between">
        <div className="">Copyright © Aplee Shopify All Right Reserved.</div>
        <div className="md:block flex justify-center items-center">
          <div className="flex md:p-0 p-5">
            <Image
              src={require("../../assets/images/paypal.ico")}
              className="w-10 mx-1 object-contain"
              alt="paypal"
            />
            <Image
              src={require("../../assets/images/visa.ico")}
              className="w-10 mx-1 object-contain"
              alt="paypal"
            />
            <Image
              src={require("../../assets/images/master.ico")}
              className="w-10 mx-1 object-contain"
              alt="paypal"
            />
            <Image
              src={require("../../assets/images/mcbc.ico")}
              className="w-10 mx-1 object-contain"
              alt="paypal"
            />
            <Image
              src={require("../../assets/images/discover.ico")}
              className="w-10 mx-1 object-contain"
              alt="paypal"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
