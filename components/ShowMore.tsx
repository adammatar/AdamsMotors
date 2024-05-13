"use client"
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import CustomButton from './CustomButton'
import { updateSearchParams } from '@/utils'

const ShowMore = ({pageNumber,isNext}: ShowMoreProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNavigation = async () => {
    setLoading(true); // Set loading to true when the button is clicked

    // Wait for 3 seconds before executing navigation
    setTimeout(() => {
      const newLimit = (pageNumber + 1) * 10;
      const newPathname = updateSearchParams("limit", `${newLimit}`);
      router.push(newPathname, { scroll: false });
      setLoading(false); // Set loading back to false after navigation
    }, 1500);
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <>
        <CustomButton
        title="Show More"
        btnType="button"
        containerStyles="bg-blue-600 text-white rounded-full"
        handleClick={handleNavigation}
        isLoading={loading}
        />
        </>
      )}
    </div>
  )
}

export default ShowMore