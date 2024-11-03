import React, { useEffect, useRef } from "react";
import { useCustomContext } from "../context";

const Submenu = () => {
  const { isSubmenuOpen, closeSubmenu, pages, location } = useCustomContext();
  const container = useRef(null);
  const { center, bottom } = location;
  const { page, links } = pages;
  console.log(page, links);
  useEffect(() => {
    const box = container.current;
    console.log(box);
    box.style.left = `${center}px`;
    box.style.top = `${bottom}px`;
  }, [location, pages]);
  return (
    // <div className={`submenu-bg ${isSubmenuOpen && "show"}`}>
    <div className={`submenu ${isSubmenuOpen && "show"}`} ref={container}>
      <div className="submenu-heading">{page}</div>
      <div className="submenu-link-container">
        {links.map((link) => {
          const { url, label, icon } = link;
          return (
            <a className="submenu-links" href={url}>
              <span>{icon}</span>
              {label}
            </a>
          );
        })}
      </div>
    </div>
    // </div>
  );
};

export default Submenu;
