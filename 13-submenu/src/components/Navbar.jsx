import React from "react";
import { social } from "../social";
import { PiListBold } from "react-icons/pi";
import { useCustomContext } from "../context";
const Navbar = () => {
  const { closeSubmenu, openSubmenu, openSidebar } = useCustomContext();
  const handleOpenSubmenu = (e) => {
    const page = e.target.innerText.toLowerCase();
    const btn = e.target.getBoundingClientRect();
    // console.log(btn);
    const center = (btn.left + btn.right) / 2;
    const bottom = btn.bottom;
    // console.log(center);
    const coordinate = { center: center, bottom: bottom };
    openSubmenu(page, coordinate);
  };
  const handleCloseSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
    console.log(!e.target.classList.contains("link-btn"));
  };
  return (
    <div className="navbar" onMouseOver={handleCloseSubmenu}>
      <div className="header-left">
        <div className="logo">Portfolio</div>
        <button className="toggle-btn" onClick={openSidebar}>
          {" "}
          <PiListBold />
        </button>
      </div>
      <div className="header-mid">
        <button className="link-btn" onMouseOver={handleOpenSubmenu}>
          products
        </button>
        <button className="link-btn" onMouseOver={handleOpenSubmenu}>
          developers
        </button>
        <button className="link-btn" onMouseOver={handleOpenSubmenu}>
          company
        </button>
      </div>
      <div className="header-right">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <div className="link-icon" key={id}>
              <a href={url}>{icon}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
