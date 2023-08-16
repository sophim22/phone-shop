import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import classNames from "classnames";
export const SearchBar = ({isSearch, onHandleSearch}) => {
  return (
    <div className={classNames({
      'search-active': isSearch,
      'search-inactive': !isSearch,
    })}>
      <button className="absolute top-5 right-5 hover:rotate-90 origin-center transition duration-300 ease-in-out" onClick={onHandleSearch}>
        <XMarkIcon className="w-12 h-12 text-gray-600" />
      </button>
      <div className="lg:w-5/12 w-10/12 absolute inset-0 h-20 m-auto">
        <form className="w-full" action={'/search#'}>
          <div className="border-b-2 border-gray-600 py-2 flex justify-between items-center">
            <input type="text" className="outline-none border-none bg-inherit md:text-4xl text-lg font-bold" placeholder="Search our store" />
            <button>
              <MagnifyingGlassIcon className="md:w-10 w-6 md:h-10 h-6 text-gray-500" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}