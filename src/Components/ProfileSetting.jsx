import React from "react";
import { FaUserCircle } from "react-icons/fa";
import CustomBtn from "../Components/Button1";
import UploadButton from "./UploadButton";

export default function ProfileSetting() {
  return (
    <div className="py-4">
      <div className="flex justify-between gap-y-10 flex-wrap min-[480px]:flex-nowrap bg-white shadow-sm shadow-gray-400 p-5 rounded-lg">
        <div className="flex gap-x-5">
          <FaUserCircle className="text-[5rem] text-blue-500" />
          <div className="space-y-2">
            <h3 className="text-[1rem] font-medium">Dr Anayatullah</h3>
            <p className="text-[0.8rem]">Urologist</p>
            <p className="text-[0.8rem] font-medium whitespace-nowrap">
              Master of Surgery in Urology
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-center min-[480px]:justify-end gap-x-5 max-w-[100%] min-[480px]:max-w-[50%] w-full">
          <UploadButton height="h-[2.3rem]" />

          <CustomBtn
            label="Remove"
            version="varient"
            width="max-w-[8rem]"
            height="h-[2.3rem]"
          />
        </div>
      </div>

      <div className="py-10">
        <h2 className="text-[1.2rem] font-medium">Edit Profile</h2>
        <form className="py-5 px-3 sm:p-5 md:p-10 my-5 shadow-sm shadow-gray-300 rounded-lg w-full space-y-5 bg-white">
          <div className="flex gap-x-2 flex-wrap min-[530px]:flex-nowrap gap-y-5 sm:gap-x-5 justify-between">
            <div className="w-full ">
              <label
                htmlFor="FirstName"
                className="text-[0.8rem] font-medium text-gray-600"
              >
                Name:
              </label>
              <br />
              <input
                type="text"
                className="border border-gray-300 w-full text-sm  py-2.5 px-2 mt-2 rounded-md"
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor="LastName"
                className="text-[0.8rem] font-medium text-gray-600"
              >
                CNIC:
              </label>
              <br />
              <input
                type="text"
                className="border border-gray-300 w-full text-sm  py-2.5 px-2 mt-2 rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-x-2 flex-wrap min-[530px]:flex-nowrap gap-y-5 sm:gap-x-5 justify-between">
            <div className="w-full ">
              <label
                htmlFor="userName"
                className="text-[0.8rem] font-medium text-gray-600"
              >
                Username:
              </label>
              <br />
              <input
                type="text"
                className="border border-gray-300 w-full text-sm  py-2.5 px-2 mt-2 rounded-md"
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor="Email"
                className="text-[0.8rem] font-medium text-gray-600"
              >
                Email:
              </label>
              <br />
              <input
                type="email"
                className="border border-gray-300 w-full text-[0.8rem]  py-2.5 px-2 mt-2 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="text-[0.8rem] font-medium text-gray-600"
            >
              Address:
            </label>
            <br />
            <textarea
              type="text"
              className="border border-gray-300 w-full text-sm py-2.5 px-2 mt-2 rounded-md"
              rows={4}
            />
          </div>

          <div className="flex flex-wrap min-[530px]:flex-nowrap gap-x-2 gap-y-5  sm:gap-x-5 justify-between">
            <div className="w-full ">
              <label
                htmlFor="PhoneNo"
                className="text-[0.8rem] font-medium text-gray-600"
              >
                Degree:
              </label>
              <br />
              <input
                type="text"
                className="border border-gray-300 w-full text-[0.8rem]  py-2.5 px-2 mt-2 rounded-md"
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor="Affiliation"
                className="text-[0.8rem] font-medium text-gray-600"
              >
                Current Affiliation:
              </label>
              <br />
              <input
                type="Affiliation"
                className="border border-gray-300 w-full text-[0.8rem] py-2.5 px-2 mt-2 rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-center w-full sm:justify-end gap-x-5 pt-5">
            <CustomBtn
              label="Cancel"
              version="varient"
              width="max-w-full sm:max-w-[10rem]"
              height="h-[2.6rem]"
            />
            <CustomBtn
              label="Save"
              width="max-w-full sm:max-w-[10rem]"
              height="h-[2.6rem]"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
