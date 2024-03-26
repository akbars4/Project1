import React from "react";
import ButtonIcon from "@/Component/Button/buttonT";
import SearchT from "@/Component/Input/searchT";
import ButtonN from "@/Component/Button/buttonN";
import SearchN from "@/Component/Input/SearchN";
import ButtonD from "@/Component/Button/ButtonD";
import SearchD from "@/Component/Input/SearchD";


const index = () => {
  return (
    <div>
      <h1 className="text-white font text-4xl"> Using tailwind Material</h1>
      <div className="flex flex-col justify-items-center mt-10 gap-5">
        <ButtonIcon />
        <SearchT />
      </div>
      <h1 className="text-white font text-4xl">Using Native</h1>
      <div className=" flex justify-start gap-5">
        <div>
          <SearchN />
          <ButtonN />
        </div>
      </div>
      <h1 className="text-white font text-4xl">Using DaisyUI</h1>
    <div className="gap-6 flex py-3 flex-col justify-center w-full mx-5 ">
      <ButtonD />
      <SearchD />
    </div>
    </div>
  );
};

export default index;
