import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const ButtonA = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={handleClick}
        
      > 
        Pencet dah
      </Button>
    </div>
  );
};

export default ButtonA;
