"use client";

import React,{useState} from 'react'
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRentPrice, getCarImageUrl } from '@/utils';
import CarDetails from './CarDetails';

interface CarCardProps {
car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {

  const { city_mpg,year,make,model,transmission,drive} = car;

  const [isCarModalOpen, setIsCarModalOpen] = useState(false);

  const carRent = calculateCarRentPrice(city_mpg,year);

  return (
    <div className='car-card group'>
      <div className="car-card__content">
        <h2 className="flex justify-between w-full">
        <span className="text-left text-[24px] leading-[26px] font-bold capitalize">{make}</span>
        <span className="text-[16px] leading-[22px] font-semibold capitalize text-right">{model}</span>
        </h2>
      </div>
      <p className="flex mt-2 text-[32px] font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-red-700 duration-300 ">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
        {carRent.toFixed(0)}
        <span className="self-end text-[14px] font-medium ">
        /Day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={getCarImageUrl(car)} alt="car model" fill priority className="object-contain" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" alt="transmission" width={20} height={20} />
            <p className="text-[14px]">{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="Killo Meter Per L" width={20} height={20} />
            <p className="text-[14px]">{city_mpg} KPL</p>
          </div>
        </div>

        <div className="car-card__btn-container">
        <CustomButton title="More Information" containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
        textStyles="text-white text-[14px] leading-[17px] font-bold"
        icon="/right-arrow.svg"
        iconPlace="right"
        handleClick={() => setIsCarModalOpen(true)}
        />
        </div>
      </div>

      <CarDetails isOpen={isCarModalOpen} closeModal={() => setIsCarModalOpen(false)} car={car} />
    </div>
  )
}

export default CarCard