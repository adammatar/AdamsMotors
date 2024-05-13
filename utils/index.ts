import { CarProps, FilterProps } from "@/types";
import { carImageMap } from "@/constants";

import dotenv from 'dotenv';
dotenv.config();

// Now you can access the key as an environment variable
const apiKey = process.env.X_RAPIDAPI_KEY;

console.log(apiKey);

export async function getCars(filters: FilterProps) {
  const { make, model, fuel, year, limit } = filters;
  const headers = new Headers();
  headers.append('X-RapidAPI-Key', apiKey || '');
  headers.append('X-RapidAPI-Host', 'cars-by-api-ninjas.p.rapidapi.com');

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}


// Implement here your Cars Pictures Api and call it inside CarCard and CarDetails Componenets for fetching car images
// For Example :
// export async function getCarImageUrl (car: CarProps, angle?: string): Promise<string | null> {
//   const url = 'https://google-api31.p.rapidapi.com/imagesearch';
//   const options = {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       'X-RapidAPI-Key': 'ae503d35a5msh4fb7934761bc5aap1f302cjsn8a44db2b77f5',
//       'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
//     },
//     body: {
//       text: `${car.make} ${car.model} ${angle}`,
//       safesearch: 'off',
//       region: 'wt-wt',
//       color: '',
//       size: '',
//       type_image: '',
//       layout: '',
//       max_results: 1
//     }
//   };

//   const response = await fetch(url, options);
//   const result = await response.json();

//   const imageUrl = result[0]?.image;

//   console.log(imageUrl);

//   return imageUrl;
// }

export const getCarImageUrl = (car: CarProps) => {
  const makeLowerCase = car.make.toLowerCase();
  const modelLowerCase = car.model.toLowerCase();

  // Check if car make includes any key in carImageMap
  const matchingMakeKey = Object.keys(carImageMap).find(key =>
    makeLowerCase.includes(key.toLowerCase())
  );

  if (matchingMakeKey !== undefined) {
    return carImageMap[matchingMakeKey];
  }

  // Check if car model includes any key in carImageMap
  const matchingModelKey = Object.keys(carImageMap).find(key =>
    modelLowerCase.includes(key.toLowerCase())
  );

  if (matchingModelKey !== undefined) {
    return carImageMap[matchingModelKey];
  }

  // If no match is found, return the default image URL
  return "/hero.png";
};





export const calculateCarRentPrice = (city_mpg: number, year: number) => {
  const basePricePerDay = 10;
  const milageFactor = 0.1;
  const ageFactor = 0.01;

  const price = basePricePerDay + (city_mpg * milageFactor) + (year * ageFactor);

  return price;
}


export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPath = `${window.location.pathname}?${searchParams.toString()}`;

  return newPath;
}
