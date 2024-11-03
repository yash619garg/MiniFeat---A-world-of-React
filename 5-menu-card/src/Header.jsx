import React from "react";
import { BiSolidFoodMenu } from "react-icons/bi";

const Header = () => {
  return (
    <div className="heading">
      Menu-card{" "}
      <span className="icon">
        <BiSolidFoodMenu />
      </span>
    </div>
  );
};

export default Header;
