import React from "react";
import { FaTasks } from "react-icons/fa";

const Header = () => {
  return (
    <div className="heading">
      Task Manager{" "}
      <span className="icon">
        <FaTasks />
      </span>
    </div>
  );
};

export default Header;
