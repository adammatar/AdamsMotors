"use client"
import React,{useState} from 'react'
import CustomButton from './CustomButton';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faGoogle } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <>
        <Modal open={showModal} onClose={toggleModal}>
            <div>
            <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-700 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-gray-900 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label htmlFor="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
              Login
            </label>
            <form method="#" action="#" className="mt-10">
              <div>
                <input type="email" placeholder="Email" className="p-2 mt-1 block w-full border-none bg-gray-900 h-11 rounded-md shadow-md hover:bg-gray-800 focus:bg-gray-200 focus:ring-0" />
              </div>
              <div className="mt-7">
                <input type="password" placeholder="Password" className="p-2 mt-1 block w-full border-none bg-gray-900 h-11 rounded-md shadow-md hover:bg-gray-800 focus:bg-gray-200 focus:ring-0" />
              </div>
              <div className="mt-7 flex">
                <label htmlFor="remember_me" className="inline-flex items-center w-full cursor-pointer">
                  <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember" />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <div className="w-full text-right">
                  <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="mt-7">
                <button className="bg-blue-700 w-full py-3 rounded-md text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Login
                </button>
              </div>
              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Or login with
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>
              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-blue-700 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                <FontAwesomeIcon icon={faFacebookF} />acebook
                </button>
                <button className="bg-red-600 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                <FontAwesomeIcon icon={faGoogle} />oogle
                </button>
              </div>
              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2" >New here?</label>
                  <a href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Create an account
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
            </div>
        </Modal>
        <CustomButton
        title="Sign In"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        handleClick={toggleModal}
        />
    </>
);
}

export default Login
