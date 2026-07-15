import React from 'react'
import { IoWarning } from "react-icons/io5";

export default function ErrorPopUp({Error, ErrorModel, setErrorModel}) {
  return (
    <div
        className={`${
            ErrorModel ? "flex justify-center items-center" : "hidden"
        } absolute inset-0 bg-[rgba(45,43,43,0.61)] z-10`}
      >
        <div
          className={` bg-white rounded-md max-w-[33rem] w-full h-[10rem] min-[490px]:h-[8rem] mx-10 shadow-sm shadow-gray-300 z-10 ${
            ErrorModel === true ? "flex justify-center items-center " : "hidden"
          } `}
        >
             <div className="flex flex-col items-center py-5 gap-y-3">
              <div className='flex items-center flex-col gap-y-3 min-[490px]:flex-row gap-x-5 text-center px-5'>
              <IoWarning className="text-red-600 text-[2rem] lg:text-[3rem]" />

              <h3 className="text-[0.8rem] sm:text-[1rem] text-red-600 font-medium">
                {Error}
              </h3>
              </div>
              <button
                className=" px-7 py-1 sm:px-10 sm:py-1.5 bg-red-500 font-medium text-white text-sm lg:text-[0.9rem] rounded-md shadow-sm shadow-gray-400 cursor-pointer hover:bg-red-600"
                onClick={(e => setErrorModel(false))}
              >
                Ok
              </button>
            </div>
        </div>
        </div>
  )
}
