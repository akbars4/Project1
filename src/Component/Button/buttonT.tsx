import { Button } from "@material-tailwind/react";
import React from "react";

const ButtonIcon = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <div className="flex items-center rounded-lg p-6 shadow-xl">
      <Button
        className="flex items-center text-white bg-blue-gray-500"
        onClick={handleClick}
        placeholder={undefined}
      >
        Pencet deh
      </Button>
    </div>
  );
};

export default ButtonIcon;
