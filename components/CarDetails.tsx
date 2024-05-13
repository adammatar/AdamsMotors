"use client"

import React,{Fragment} from 'react'
import Image from 'next/image';
import { CarDetailsProps } from '@/types'
import { Dialog , DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { getCarImageUrl } from '@/utils';
import CustomButton from './CustomButton';
import Link from 'next/link';

const CarDetails = ({ isOpen , closeModal , car}: CarDetailsProps) => {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25"/>
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scall-90"
        >
          <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-auto transform rounded-2xl bg-white
          text-left shadow-xl transition-all flex flex-col gap-5 p-6
          ">
            <button type="button"
            onClick={closeModal}
            className="absolute -top-1 right-1 z-10 w-fit p-2  rounded-full"
            >
              <Image src="/close.svg" alt="close" width={20} height={20} className="object-contain"/>
            </button>

            <div className="flex-1 flex flex-col gap-2 ">
            <h2 className="flex text-xl capitalize flex-between">
                <span className="font-extrabold text-left">{car.make}</span> <span className="font-semibold text-right">{car.model}</span>
              </h2>
                <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-md">
                  <Image src={getCarImageUrl(car)} alt="car model" fill priority className="object-contain" />
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="mt-1 flex flex-wrap gap-1 divide-y divide-gray-200">
                  {Object.entries(car).map(([key,value]) => (
                    <div key={key} className="flex justify-between gap-1 w-full text-right">
                     <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
                     <p className="text-black-100 font-semibold">{value}</p>
                    </div>
                  ))}
              </div>
            </div>
            <CustomButton title="Rent Now" containerStyles="w-full py-[16px] rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition hover:duration-300 duration-300 ease-in-out" />
          </DialogPanel>
        </TransitionChild>
          </div>
        </div>
      </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails