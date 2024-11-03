import React from "react";
import { VscPreview } from "react-icons/vsc";

const Header = () => {
  return (
    <div className="heading">
      Reviews{" "}
      <span className="icon">
        <VscPreview />
      </span>
    </div>
  );
};

export default Header;
