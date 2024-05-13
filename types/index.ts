import { MouseEventHandler, ReactElement } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" ;
  textStyles?: string;
  icon?: string;
  iconPlace?: "left" | "right" ;
  isLoading?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg:number;
  class:string;
  combination_mpg:number;
  cylinders:number;
  displacement:number;
  drive:string;
  fuel_type:string;
  highway_mpg:number;
  make:string;
  model:string;
  transmission:string;
  year:number;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface FilterProps {
  make: string,
  model: string,
  fuel: string,
  year: number,
  limit: number,
}

export interface searchParamsProps {
  manufacturer: string,
  model: string,
  fuel: string
  year:  number,
  limit: number,
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactElement;
}
