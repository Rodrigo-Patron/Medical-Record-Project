import { createContext, useState, useEffect } from "react";

export const MedicalContext = createContext(null);


const registeredUser = JSON.parse(localStorage.getItem("registeredUser")) || [];
const defaultUnits = JSON.parse(localStorage.getItem("allUnits"));

export const MedicalContextProvider = ({ children }) => {
  // UNITS
  const [units, setUnits] = useState(defaultUnits);
  // REGISTER
  const [user, setUser] = useState(registeredUser);
  
  // UNITS-LOCALSTORAGE
  useEffect(()=>{
    localStorage.setItem("allUnits",JSON.stringify(units))
    },[units])

     // REGISTER - LOCAL STORAGE

  useEffect(() => {
    localStorage.setItem("registeredUser", JSON.stringify(user));
  }, [user]);

  return (
    <MedicalContext.Provider value={{units,setUnits,user,setUser}}>
      {children}
    </MedicalContext.Provider> 
  );
};
