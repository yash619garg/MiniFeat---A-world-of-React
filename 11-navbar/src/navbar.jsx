import React, { useEffect, useRef, useState } from "react";
import Pages from "./Pages";
import social from "./social";
import { PiListBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa6";
const Navbar = () => {
  const [showLinks, setLinks] = useState(false);
  const pageLinkRef = useRef(null);
  const LinkContainerRef = useRef(null);

  useEffect(() => {
    let linkHeight = LinkContainerRef.current.getBoundingClientRect().height;
    if (window.innerWidth > 900) {
      pageLinkRef.current.style.height = `auto`;
    } else {
      if (showLinks) {
        pageLinkRef.current.style.height = `${linkHeight}px`;
      } else {
        pageLinkRef.current.style.height = `0px`;
      }
    }
  }, [showLinks]);

  const toggleLink = () => {
    setLinks(!showLinks);
  };
  return (
    <div className="navbar">
      <div className="logo-container">
        <div className="logo">
          <span className="headIcon">
            <FaReact />
          </span>
          <div>React Mini Projects </div>
        </div>
        <div className="button">
          <button className="btn" onClick={toggleLink}>
            <span className={`toggle-icon ${showLinks && "active"}`}>
              <PiListBold />
            </span>
          </button>
        </div>
      </div>
      <div className="page-links" ref={pageLinkRef}>
        <ul className="list-container" ref={LinkContainerRef}>
          {Pages.map((page) => {
            const { id, title, link } = page;
            return (
              <li className="list-items" key={id}>
                {" "}
                <a href={link}> {title}</a>{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="social-links">
        {social.map((item) => {
          const { id, link, icon } = item;
          return (
            <span key={id} className="icon">
              {" "}
              <a href={link}> {icon}</a>{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
