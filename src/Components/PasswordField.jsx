import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function PasswordFied({ name, width, position, change, value }) {
  const [visible, setVisibiliy] = useState(false);

  const toggleShowPassword = () => {
    setVisibiliy(!visible);
  };

  return (
    <div>
      <div className="relative max-w-[30rem]">
        <input
          type={visible === false ? "password" : 'text'}
          name={name}
          className={`border border-gray-400 py-2.5 rounded-md w-full text-sm mt-2 px-2 ${width}`}
          onChange={change}
          value={value}
        />

        <span className={`text-2xl absolute ${position} top-[17px] text-gray-300`}>
          {visible === false ? (
            <AiFillEyeInvisible onClick={toggleShowPassword} className="cursor-pointer hover:text-blue-500 text-[1.5rem]"/>
          ) : (
            <AiFillEye onClick={toggleShowPassword}  className="cursor-pointer hover:text-blue-500 text-[1.5rem]"/>
          )}
        </span>
      </div>
    </div>
  );
}
