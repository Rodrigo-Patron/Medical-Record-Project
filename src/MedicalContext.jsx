import { createContext, useState, useEffect } from "react";

export const MedicalContext = createContext(null);

const defaultBp = JSON.parse(localStorage.getItem("bp")) || [] ;
const defaultHeartRate = JSON.parse(localStorage.getItem("heartRate")) || [];
const defaultSugar = JSON.parse(localStorage.getItem("sugar")) || [];
const defaultOxygen = JSON.parse(localStorage.getItem("oxygen")) || [];
const defaultWeight = JSON.parse(localStorage.getItem("weight")) || [];

export const MedicalContextProvider = ({ children }) => {
  const [heartRate, setHeartRate] = useState(defaultHeartRate);
  const [bp, setBp] = useState(defaultBp);
  const [sugar, setSugar] = useState(defaultSugar);
  const [oxygen, setOxygen] = useState(defaultOxygen);
  const [weight, setWeight] = useState(defaultWeight);

  //here goes USEFFECT for the LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("bp", JSON.stringify(bp));
    
  }, [bp]);

  useEffect(() => {
    localStorage.setItem("heartRate", JSON.stringify(heartRate));
  }, [heartRate]);

  useEffect(() => {
    localStorage.setItem("sugar", JSON.stringify(sugar));
  }, [sugar]);

  useEffect(() => {
    localStorage.setItem("oxygen", JSON.stringify(oxygen));
  }, [oxygen]);

  useEffect(() => {
    localStorage.setItem("weight", JSON.stringify(weight));
  }, [weight]);

  return (
    <MedicalContext.Provider
      value={{
        heartRate,
        setHeartRate,
        bp,
        setBp,
        sugar,
        setSugar,
        oxygen,
        setOxygen,
        weight,
        setWeight,
      }}
    >
      {children}
    </MedicalContext.Provider>
  );
};
