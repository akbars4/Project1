import React from "react";
import { Button } from "react-daisyui";

const ButtonD = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div className="mb-[25px]">
      <Button 
      color="primary" 
      animation={true}
      onClick={handleClick} 
      className="border w-52 rounded"
      // disabled = {true}
      >
        Pencet Dah
      </Button>
    </div>
  );
};

export default ButtonD;
