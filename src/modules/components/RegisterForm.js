import { useState } from "react";
import Link from "next/link";
export const RegisterFrom = () => {
  return (
    <div>
      <div className="py-3 bg-gray-50 text-gray-500 w-full">
        <div className="w-8/12 mx-auto flex leading-10 space-x-3 text-small">
          <Link href={'/'}>Home</Link>
          <span>/</span>
          <p>Create Account</p>
        </div>
      </div>
      <div className="lg:w-4/12 w-11/12 mx-auto">
        <form className="mx-auto bg-gray-50 border shadow-md p-8 mt-10 space-y-5">
          <h1 className="text-center font-bold text-2xl text-gray-600">Register</h1>
          <div>
            <label>First Name</label>
            <div>
              <input type="text" className="border outline-none focus:outline-none px-5 py-2 rounded-md w-full mt-2" placeholder="First Name..." />
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <input type="text" className="border outline-none focus:outline-none px-5 py-2 rounded-md w-full mt-2" placeholder="Last Name..." />
            </div>
          </div>
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
          <div>
            <label>Confirm Password</label>
            <div>
              <input type="password" className="border outline-none focus:outline-none px-5 py-2 rounded-md w-full mt-2" placeholder="********" />
            </div>
          </div>
          <div className="lg:flex justify-between items-center">
            <button className="uppercase lg:w-auto w-full bg-black/80 hover:bg-inherit text-white px-12 py-2 hover:text-gray-500 border border-black transition duration-300 ease-in-out">Create</button>
            <div className="lg:mt-0 mt-5 text-center">
              <span className="mr-2 text-ms text-blue-500">Aready have an account?</span>
              <Link href={"/account/login"} className="text-ms text-gray-600 hover:cursor-pointer hover:underline hover:text-blue-500">Login here</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}