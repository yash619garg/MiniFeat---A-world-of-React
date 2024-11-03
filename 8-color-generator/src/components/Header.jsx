import React from "react";
import { IoIosColorPalette } from "react-icons/io";

const Header = () => {
  return (
    <div className="heading">
      Color - Generator{" "}
      <span className="icon">
        <IoIosColorPalette />
      </span>
    </div>
  );
};

export default Header;
