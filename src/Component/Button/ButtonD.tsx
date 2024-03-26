import React from "react";
import { Button } from "react-daisyui";

const ButtonD = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      <Button 
      onClick={handleClick} 
      className="btn btn-primary border rounded my-5"
      >
        Pencet Dah
      </Button>
    </div>
  );
};

export default ButtonD;
