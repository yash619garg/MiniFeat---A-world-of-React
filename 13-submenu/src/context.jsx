import React, { createContext, useContext, useState } from "react";
import sublinks from "./data";
export const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [isSubmenuOpen, setSubmenu] = useState(false);
  const [isWelcomeOpen, setWelcome] = useState(false);
  const [pages, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const [welcomeLocation, setWelcomeLocation] = useState({});

  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const closeWelcome = () => {
    setWelcome(false);
  };
  const openWelcome = (coordinate) => {
    setWelcomeLocation(coordinate);
    setWelcome(true);
  };

  const openSubmenu = (text, coordinate) => {
    const newPage = sublinks.find((link) => {
      return link.page === text;
    });
    setPage(newPage);
    setLocation(coordinate);
    setSubmenu(true);
  };
  const closeSubmenu = () => {
    setSubmenu(false);
  };
  return (
    <GlobalContext.Provider
      value={{
        openWelcome,
        closeWelcome,
        isWelcomeOpen,
        welcomeLocation,
        pages,
        location,
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useCustomContext = () => {
  return useContext(GlobalContext);
};
export default ContextProvider;
