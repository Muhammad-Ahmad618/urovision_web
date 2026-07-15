import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { HiUserAdd } from "react-icons/hi";
import CustomBtn from "../Components/Button2";
import { IoSearch } from "react-icons/io5";

export default function PatientRecord() {
  const Navigate = useNavigate();

  const handleViewRecord = () => {
    Navigate("/PatientRecordProfile");
  };

  const Patients = [
    {
      id: 782304,
      name: "Obaidullah",
      email: "chowdary@yahoo.com",
      gender: "Male",
      Date: "24/11/2024",
    },
    {
      id: 945745,
      name: "Muhammad Asad Ejaz",
      email: "Ejaz@gmail.com",
      gender: "Male",
      Date: "03/12/2024",
    },
  ];

  return (
    <div className="p-2 sm:p-5 bg-gray-50 min-h-screen">
      <Navbar label="Patients Records" />

      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-2 lg:px-5">
        <div className="py-20">
          <div className="flex justify-between flex-wrap gap-x-20 gap-y-5 sm:gap-x-10 items-center">
            <h3 className="text-[1.1rem] font-medium">Result:</h3>

            <form className="w-full max-w-[15rem] lg:max-w-[20rem] flex">
              <input
                type="search"
                className="px-3 py-1.5 sm:py-2 text-sm text-gray-00 outline-none flex-1 rounded-l-md border border-gray-300"
                placeholder="Search..."
              />
              <div className="bg-blue-600 w-full max-w-[3rem] p-2 flex justify-center items-center rounded-r-md hover:bg-blue-500">
                <IoSearch className="text-white text-[1.1rem] sm:text-[1.3rem]" />
              </div>
            </form>

            <button className="flex items-center justify-evenly py-2 bg-blue-500 rounded-lg text-white  max-w-[8rem] lg:max-w-[10rem] w-full text-xs lg:text-sm font-medium hover:bg-blue-600">
              <HiUserAdd className="text-[1.2rem] lg:text-[1.5rem]" />
              Add Patients
            </button>
          </div>

          <div className="rounded-lg overflow-x-auto custom-scrollbar w-full my-14 hide-scrollbar">
            <table className="w-full">
              <thead className="bg-blue-600">
                <tr className="text-white">
                  <th className="font-medium px-4 lg:px-7 py-3 text-center text-sm lg:text-base ">
                    ID
                  </th>
                  <th className="font-medium px-4 lg:px-7 py-3 text-center text-sm lg:text-base ">
                    Name
                  </th>
                  <th className="font-medium px-4 lg:px-7 py-3 text-center text-sm lg:text-base ">
                    Email
                  </th>
                  <th className="font-medium px-4 lg:px-7 py-3 text-center text-sm lg:text-base ">
                    Gender
                  </th>
                  <th className="font-medium px-4 lg:px-7 py-3 text-center text-sm lg:text-base  whitespace-nowrap">
                    Date Added
                  </th>
                  <th className="font-medium px-4 lg:px-7 py-3 text-center text-sm lg:text-base "></th>
                  <th className="font-medium px-4 lg:px-7 py-3 text-center text-sm lg:text-base "></th>
                </tr>
              </thead>
              <tbody>
                {Patients.map((patient, index) => (
                  <tr key={index} className="bg-white border-b border-gray-300">
                    <td className="text-xs lg:text-sm whitespace-nowrap text-center px-4 lg:px-7 py-3">
                      {patient.id}
                    </td>
                    <td className="text-xs lg:text-sm whitespace-nowrap text-center px-4 lg:px-7 py-3">
                      {patient.name}
                    </td>
                    <td className="text-xs lg:text-sm whitespace-nowrap text-center px-4 lg:px-7 py-3">
                      {patient.email}
                    </td>
                    <td className="text-xs lg:text-sm whitespace-nowrap text-center px-4 lg:px-7 py-3">
                      {patient.gender}
                    </td>
                    <td className="text-xs lg:text-sm whitespace-nowrap text-center px-4 lg:px-7 py-3">
                      {patient.Date}
                    </td>
                    <td className="text-xs lg:text-sm whitespace-nowrap text-center px-4 lg:px-7 py-3">
                      <CustomBtn
                        label="View Record"
                        width="min-w-[7rem]"
                        click={handleViewRecord}
                        height="h-[2.1rem] sm:h-[2.3rem]"
                        fontsize="text-xs sm:text-sm"
                      />
                    </td>
                    <td className="text-xs lg:text-sm whitespace-nowrap text-center px-4 lg:px-7 py-3">
                      <CustomBtn
                        label="Remove"
                        version="varient"
                        width="min-w-[7rem]"
                        height="h-[2.1rem] sm:h-[2.3rem]"
                        fontsize="text-xs sm:text-sm"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
