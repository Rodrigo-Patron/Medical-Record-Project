import { createContext, useState, useEffect } from "react";

export const MedicalContext = createContext(null);


const defaultUnits = JSON.parse(localStorage.getItem("allUnits")) || []
export const MedicalContextProvider = ({ children }) => {
  const [units, setUnits] = useState(defaultUnits);
  
  //here goes USEFFECT for the LOCALSTORAGE
  useEffect(()=>{
    localStorage.setItem("allUnits",JSON.stringify(units))
    },[units])

  return (
    <MedicalContext.Provider
      value={{units,setUnits}}
    >
      {children}
    </MedicalContext.Provider>
  );
};
