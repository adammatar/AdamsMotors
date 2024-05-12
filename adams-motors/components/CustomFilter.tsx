"use client";

import React,{ useState, Fragment } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox , ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';
import { updateSearchParams } from '@/utils';


const CustomFilter = ({title , options}:CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = (e: { title: string , value: string}) => {
    const newPath = updateSearchParams(title,e.value.toLowerCase());
    router.push(newPath , {scroll: false})
  }

  return (
    <div className="w-fit">
        <Listbox
        value={selected}
        onChange={(e) => {setSelected(e)
          handleUpdateParams(e)
        }}
        >
          <div className="relative w-fit z-10">
            <ListboxButton className="custom-filter__btn">
              <span className="block turncate text-gray-500">{selected.title}</span>
              <Image src="/chevron-up-down.svg" width={20} height={20} alt="chevron up and down" className="ml-4 object-contain" />
            </ListboxButton>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              >
                <ListboxOptions className="custom-filter__options">
                  {
                    options.map((option,index) => (
                      <ListboxOption key={index} value={option}>
                        {({selected, active}) => (
                          <div className={`${
                            active ? 'text-white bg-blue-600' : 'text-gray-500'
                          } cursor-pointer select-none relative py-2 pl-10 pr-4`}>
                            <span className={`${
                              selected ? 'font-semibold' : 'font-normal'
                            } block truncate`}>{option.title}</span>
                            {selected ? (
                              <span className={`${
                                active ? 'text-white' : 'text-blue-600'
                              } absolute inset-y-0 left-0 flex items-center pl-3`}>
                              </span>
                            ) : null}
                          </div>
                        )}
                      </ListboxOption>
                    ))
                  }
                  </ListboxOptions>
              </Transition>
          </div>
        </Listbox>
    </div>
  )
}

export default CustomFilter