"use client";

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image';

const WelcomeHeader = () => {

  const handleScroll = () => {
    const element = document.getElementById("discover");
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPos, // Vertical scroll position
        left: 0, // Horizontal scroll position (usually 0 if not needed)
        behavior: 'smooth' // Smooth scroll
      });
    } else {
      console.log('Element not found');
    }
  }

  return (
    <>
    <div className="welcome-header bg-gradient-to-b from-gray-300 via-gray-100 to-slate-100 rounded-b-md shadow-xl">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="welcome-header__titles-container lg:max-w-lg">
                    <h1 className="welcome-header__title">WELCOME TO <br /> ADAM'S MOTORS</h1>
                    <p className="welcome-header__subtitle"> Streamline your car rental experience with our effortless ReactJs web app</p>
                    <CustomButton
                      title="Explore Cars"
                      containerStyles="w-full py-[14px] px-5  mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded-lg lg:w-auto hover:bg-red-600 focus:outline-none focus:bg-blue-500"
                      handleClick={handleScroll}
                      icon="/right-arrow.svg"
                      iconPlace="right"
                      />
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <Image className="w-full h-full lg:max-w-3xl transition ease-in-out hover:scale-110 duration-700 delay-150" src="/porsche.png" width={5000} height={5000} alt="Catalogue-pana.svg" />
            </div>
        </div>
    </div>
    </>
  );
}

export default WelcomeHeader
