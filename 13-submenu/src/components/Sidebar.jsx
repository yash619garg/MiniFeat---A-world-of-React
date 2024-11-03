import React from "react";
import { useCustomContext } from "../context";
import { RxCross1 } from "react-icons/rx";
import sublinks from "../data";
import { social } from "../social";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useCustomContext();
  return (
    <div className={`sidebar-bg ${isSidebarOpen && "active"}`}>
      <div className="sidebar">
        <div className="sidebar-head">
          <div className="sidebar-logo">Portfolio</div>
          <button className="cancel-btn" onClick={closeSidebar}>
            <RxCross1 />
          </button>
        </div>
        <div className="sidebar-link-container">
          {sublinks.map((menu, index) => {
            const { page, links } = menu;
            return (
              <div className="sidebar-links" key={index}>
                <div className="sidebar-heading">{page}</div>
                <ul className="links-submenu">
                  {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                      <li className="single-link" key={index}>
                        <a href={url}>
                          {label} <span>{icon}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="sidebar-social">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <a href={url} key={id}>
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
