import React, { createContext, useReducer } from "react";
import Birthday from "../data";
import AppReducer from "./Appreducer";

export const GlobalContext = createContext(Birthday);
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, Birthday);

  const AddDate = (newData) => {
    dispatch({
      type: "ADD_DATE",
      payload: newData,
    });
  };
  const DeleteDate = (id) => {
    dispatch({
      type: "DELETE_DATE",
      payload: id,
    });
  };
  return (
    <>
      <GlobalContext.Provider value={{ data: state, DeleteDate, AddDate }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default ContextProvider;
