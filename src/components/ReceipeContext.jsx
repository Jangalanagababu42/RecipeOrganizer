import React, { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import ReceipeReducer, { initialData } from "./ReceipeReducer";

const ReceipeContext = createContext();

function ReceipeProvider({ children }) {
  const [state, dispatch] = useReducer(ReceipeReducer, initialData);
  const [radio, searchRadio] = useState("");
  console.log(radio, "radio");
  return (
    <ReceipeContext.Provider value={{ state, dispatch, radio, searchRadio }}>
      {children}
    </ReceipeContext.Provider>
  );
}
const useReceipe = () => useContext(ReceipeContext);
export { ReceipeProvider, useReceipe };
