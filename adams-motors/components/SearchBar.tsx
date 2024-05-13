"use client"

import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchButton = ({ otherClasses }: { otherClasses : string }) => {
  return (
    <button type="submit" className={`-ml-3 z-2 hover:animate-pulse active:animate-ping ${otherClasses}`}>
      <Image src="/magnifying-glass.svg"
      alt="maginfying glass"
      width={40}
      height={40}
      className="object-contain"

      />
    </button>
  )
}


const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState('');
  const [carModel, setCarModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === ''){
      if(carModel === ''){
      return alert('Please fill in the search fields')
    }
    }

    updateSearchParams(carModel.toLowerCase(), manufacturer);

  }

  const updateSearchParams = (carModel: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(carModel){
      searchParams.set('model', carModel);
    } else {
      searchParams.delete('model');
    }

    if(manufacturer){
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    const newPath = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPath, {scroll: false});
  }

  return (
   <form className="searchbar" onSubmit={handleSearch}>
    <div className="searchbar__item">
      <SearchManufacturer
      manufacturer={manufacturer}
      setManufacturer={setManufacturer}
      />
      <SearchButton otherClasses="sm:hidden" />
    </div>
    <div className="searchbar__item z-0">
      <Image src="/select-model.svg"
      alt="modal icon"
      width={25}
      height={25}
      className="absolute w-[20px] h-[20px] ml-4"
      />
      <input
      type="text"
      name="model"
      value={carModel}
      onChange={(e) => setCarModel(e.target.value)}
      placeholder='Car Model e.x "Mustang"'
      className="searchbar__input"
      />
      <SearchButton otherClasses="sm:hidden" />
    </div>
    <SearchButton otherClasses="max-sm:hidden" />
   </form>
  )
}

export default SearchBar