import React from "react";
import { TbPigMoney } from "react-icons/tb";

const Header = () => {
  return (
    <div className="heading">
      Expense Manager{" "}
      <span className="icon">
        <TbPigMoney />
      </span>
    </div>
  );
};

export default Header;
