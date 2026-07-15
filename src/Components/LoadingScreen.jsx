import React from "react";
import ClipLoader from "react-spinners/BounceLoader";

export default function LoadingScreen({loading}) {
  return (
    <div
      className={`${
        loading ? "flex flex-col justify-center items-center" : "hidden"
      } absolute inset-0 bg-[rgba(45,43,43,0.61)] z-10 gap-y-5`}
    >
      <ClipLoader
        color={"white"}
        loading={loading}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h3 className="text-white text-[1.1rem]">Logging In</h3>
    </div>
  );
}
