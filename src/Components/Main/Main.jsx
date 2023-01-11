import "./Main.scss";
import Data from "../Data/Data";
import { useContext, useRef } from "react";
import { MedicalContext } from "../../MedicalContext";
import { Form } from "react-bootstrap";

const Main = () => {
  const inputValueBp = useRef();

  const {
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
  } = useContext(MedicalContext);

  const submitHandler = (e) => {
    e.preventDefault();

    setBp(inputValueBp.current.value);
    inputValueBp.current.value = "";
  };

  return (
    <div className="Main">
      {/* here goes all the INPUTS  */}

      <Form onSubmit={submitHandler}>
        <input ref={inputValueBp} type="number" min={0} max={500} />
        <button
          onClick={(e) => {
            setBp(e.target.value);
          }}
        >
          Add
        </button>
      </Form>

      {/* HERE GOES THE DATA COMPONENT */}
      <Data />
    </div>
  );
};

export default Main;
