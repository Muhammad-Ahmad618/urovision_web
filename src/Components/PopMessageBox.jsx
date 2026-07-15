import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { MdVerified } from "react-icons/md";

export default function PopMessageBox({loading, model, handleOk}) {
  return (
    <div
        className={`${
          model ? "flex justify-center items-center" : "hidden"
        } absolute inset-0 bg-[rgba(45,43,43,0.61)] z-10`}
      >
        <div
          className={` bg-white rounded-md max-w-[20rem] sm:max-w-[25rem] lg:max-w-[30rem] w-full shadow-sm shadow-gray-300 z-10 ${
            model === true ? "block" : "hidden"
          } `}
        >
          {loading === true ? (
            <div className="flex justify-center items-center flex-col h-[12rem] gap-y-4">
              <h2 className="text-[1.4rem] lg:text-[1.6rem] text-blue-600 font-medium">
                Processing
              </h2>

              <p className="text-[0.8rem] md:text-[0.9rem]">Please wait</p>

              <ClipLoader
                color={"#51ACFF"}
                loading={loading}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col py-5 gap-y-5">
              <MdVerified className="text-blue-600 text-[3rem] lg:text-[4rem]" />

              <h3 className="text-[1rem] md:text-[1.2rem] text-blue-600 font-medium">
                Account Created Successfully !
              </h3>

              <button
                className="px-10 py-1.5 bg-blue-600 font-medium text-white text-sm lg:text-[0.9rem] rounded-md shadow-sm shadow-gray-400 cursor-pointer hover:bg-blue-500"
                onClick={handleOk}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>

  )
}
