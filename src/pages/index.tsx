import React from "react";
import ButtonIcon from "@/Component/Button/buttonT";
import SearchT from "@/Component/Input/searchT";
import ButtonN from "@/Component/Button/buttonN";
import SearchN from "@/Component/Input/SearchN";
import ButtonD from "@/Component/Button/ButtonD";
import SearchD from "@/Component/Input/SearchD";
import ButtonA from "@/Component/Button/ButtonA";
import SearchA from "@/Component/Input/SearchA";

const index = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-white font text-4xl"> Using tailwind Material</h1>
     { /*Pros using Material Tailwind:
        - documentation lebih mudah dibaca
        - implementasi properti mudah
        - proses development lebih cepat 

        cons using material tailwind:
         - 
  */}
      <div className="flex flex-col justify-items-center mt-10 mb-5 gap-5">
        <ButtonIcon />
        <SearchT />
      </div>

      <h1 className="text-white font text-4xl">Using Native</h1>
     { /* pros using native:
        - implementasi component sederhana


        cons using native:
        - semua diatur secara manual 
        - rentan terhadap inconsistency
        
  */}
      <div className="flex justify-start gap-5">
        <div>
          <SearchN />
          <ButtonN />
        </div>
      </div>

      <h1 className="text-white font text-4xl mb-5">Using Ant Design</h1>
      {/*
        pros  using ant design:
        - pilihan component sangat banyak 
        -  support typescript 

        cons using ant design:
        - documentation kurang read friendly 
        
      */}
      <div className="flex flex-col justify-start gap-5">      
        <ButtonA/>
        <div className="mt-4"></div>
        <SearchA/>
      </div>
    </div>
  );
};

export default index;
