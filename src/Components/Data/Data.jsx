import "./Data.scss";
import { useContext } from "react";
import { MedicalContext } from "../../MedicalContext";

const Data = () => {
  const { bp } = useContext(MedicalContext);

  return (
    <div className="Data">
      <h1>Here is the CHARTS and DATA</h1>
      {bp} kg
    </div>
  );
};

export default Data;
