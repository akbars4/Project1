import React from "react";

const ButtonN = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      pencet dah
    </button>
  );
};

export default ButtonN;
