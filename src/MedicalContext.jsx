import { createContext, useState, useEffect } from "react";

export const MedicalContext = createContext(null);

const defaultBp = JSON.parse(localStorage.getItem("bp")) || [];

export const MedicalContextProvider = ({ children }) => {
  const [heartRate, setHeartRate] = useState(0);
  const [bp, setBp] = useState(defaultBp);
  const [sugar, setSugar] = useState(0);
  const [oxigen, setOxigen] = useState(0);
  const [steps, setSteps] = useState(0);

  //here goes USEFFECT for the LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("bp", JSON.stringify(bp));
  }, [bp]);

  return (
    <MedicalContext.Provider
      value={{
        heartRate,
        setHeartRate,
        bp,
        setBp,
        sugar,
        setSugar,
        oxigen,
        setOxigen,
        steps,
        setSteps,
      }}
    >
      {children}
    </MedicalContext.Provider>
  );
};
