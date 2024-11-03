import React from "react";
import { RxCross2 } from "react-icons/rx";
import { links } from "../data";
import { social } from "../data";
import { useCustomContext } from "../context";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useCustomContext();
  return (
    <>
      <div className={`sidebar ${showSidebar && "active"}`}>
        <div className="head">
          <div className="logo">Unwrapped</div>
          <button className="cancel" onClick={closeSidebar}>
            <RxCross2 />
          </button>
        </div>
        <div className="links">
          <ul className="link-container">
            {links.map((link) => {
              const { url, id, text, icon } = link;
              return (
                <li key={id} className="linkItems">
                  <a href={url}>
                    {text} <span className="link-icon">{icon}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="social">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <div key={id} className="icon">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
