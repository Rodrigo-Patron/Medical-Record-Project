import "./Data.scss";
import { useContext } from "react";
import { MedicalContext } from "../../MedicalContext";

const Data = () => {
  const { bp,heartRate,sugar,oxygen,weight } = useContext(MedicalContext);

  return (
    <div className="Data">
      <h1>Here is the CHARTS and DATA</h1>
      <div> Blood Pressure: {bp} mmHg</div>
      <div> Heart Rate: {heartRate} bpm</div>
      <div> Sugar: {sugar} mM</div>
      <div> Oxygen: {oxygen} LPM</div>
      <div> Weight: {weight} Kg</div>
    </div>
  );
};

export default Data;
