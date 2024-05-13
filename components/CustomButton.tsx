"use client";

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

const CustomButton = ({title,containerStyles,handleClick, btnType , textStyles , icon , iconPlace, isLoading } : CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    {icon && iconPlace === "left" && (
      <div className="relative w-6 h-6">
        <Image src={icon} alt="icon" fill className="object-contain" />
      </div>
    )}
    <span className={`flex-1 ${textStyles}`}>
      {title}
    </span>
    {icon && iconPlace === "right" && (
      <div className="relative w-6 h-6">
        <Image src={icon} alt="icon" fill className="object-contain ml-2 animate-pulse" />
      </div>
    )}
    {isLoading && (
     <svg className="animate-spin h-5 w-5 ml-3" viewBox="0 0 24 24">
     <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="80" strokeDashoffset="60"></circle>
   </svg>

    )}
  </button>

  )
}

export default CustomButton