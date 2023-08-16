import Link from "next/link"
import { useState } from "react"
export const Login = () => {
  // const [form, setForm] = useState({});
  return (
    <div>
      <div className="py-3 bg-gray-50 text-gray-500 w-full">
        <div className="w-8/12 mx-auto flex leading-10 space-x-3 text-small">
          <Link href={'/'}>Home</Link>
          <span>/</span>
          <p>Account</p>
        </div>
      </div>
      <div className="lg:w-4/12 w-11/12 mx-auto">
        <form className="mx-auto bg-gray-50 border shadow-md p-8 mt-10 space-y-5">
          <h1 className="text-center font-bold text-2xl text-gray-600">Login</h1>
          <div>
            <label>Email</label>
            <div>
              <input type="email" className="border outline-none focus:outline-none px-5 py-2 rounded-md w-full mt-2" placeholder="example@gmail.com" />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <input type="password" className="border outline-none focus:outline-none px-5 py-2 rounded-md w-full mt-2" placeholder="********" />
            </div>
          </div>
          <div className="lg:flex justify-between items-center">
            <button className="uppercase lg:w-auto w-full bg-black/80 hover:bg-inherit text-white px-12 py-2 hover:text-gray-500 border border-black transition duration-300 ease-in-out">Login</button>
            <div className="lg:block flex justify-center lg:mt-0 mt-5">
              <Link href={"/account/login#"} className="text-ms text-gray-500 hover:cursor-pointer hover:underline hover:text-blue-500">Forget password?</Link>
            </div>
          </div>
          <div className="lg:block flex justify-center">
            <Link href={"/account/register"} className="text-ms text-gray-600 hover:cursor-pointer hover:underline hover:text-blue-500">Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}