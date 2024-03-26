import React from "react";

const SearchN = () => {
  return (
    <div
      style={{ marginTop: "25px", marginBottom: "10px" }}
      className="flex flex-col mt-[25px] justify-center content-center"
    >
      <div className="w-full items-center mt-4 justify-center pt-[25px] flex">
        <input  
        type="text" 
        className="block w-fit border py-3 px-2"
        aria-label="Search "/>
      </div>
    </div>
  );
};

export default SearchN;
