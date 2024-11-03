import { createContext, useReducer } from "react";
import AppReducer from "./Appreducer";
import React from "react";
import Transition from "../data/transitions";
const initialData = Transition;
export const GlobalContext = createContext(initialData);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialData);
  const addTransition = (transition) => {
    dispatch({
      type: "addTransition",
      payload: transition,
    });
  };
  const deleteTransition = (id) => {
    dispatch({
      type: "deleteTransition",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{ transition: state.transition, addTransition, deleteTransition }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
