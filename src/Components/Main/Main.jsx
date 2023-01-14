import "./Main.scss";
import Data from "../Data/Data";
import { useContext, useRef } from "react";
import { MedicalContext } from "../../MedicalContext";
import { Form, FormControl, Container, Row, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { FaHeartbeat } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";
import { BsDropletFill } from "react-icons/bs";
import { SiGoldenline } from "react-icons/si";
import Logout from "../Logout/Logout";

const Main = () => {
  const inputValueBp = useRef();
  const inputValueHeartRate = useRef();
  const inputValueSugar = useRef();
  const inputValueOxygen = useRef();
  const inputValueWeight = useRef();
  const inputValueDate = useRef();

  const { units, setUnits } = useContext(MedicalContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setUnits([
      {
        date:inputValueDate.current.value,
        number: inputValueBp.current.value,
        type: "Blood pressure",
        unitMeasure: "mmHg",
      },
      {
        
        number: inputValueHeartRate.current.value,
        type: "HeartRate",
        unitMeasure: "Bpm",
      },
      {
        number: inputValueSugar.current.value,
        type: "sugar",
        unitMeasure: "mmol/L",
      },
      {
        number: inputValueOxygen.current.value,
        type: "oxygen",
        unitMeasure: "mgL",
      },
      {
        number: inputValueWeight.current.value,
        type: "Weight",
        unitMeasure: "kg",
      },...units
    ]);

    //^input will show on top
    inputValueDate.current.value = "";
    inputValueHeartRate.current.value = "";
    inputValueBp.current.value = "";
    inputValueOxygen.current.value = "";
    inputValueWeight.current.value = "";
    inputValueSugar.current.value = "";

    alert("Your records are saved")
  };

  return (
    <div className="Main">
      <Container>
        <Logout />
        <Row className="wrapper">
          <h3>Hallo....Please note down your records!</h3>
          <Form onSubmit={submitHandler}>
            <label>Select a date</label>
            <br />
            <FormControl ref={inputValueDate} type="date" required />
            <ListGroup className="input-container">
              <ListGroup.Item variant="danger">
                <label>Weight</label>
                <FormControl
                  ref={inputValueWeight}
                  type="number"
                  placeholder="Your Record..."
                  min={0}
                />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="input-container">
              <ListGroup.Item variant="secondary">
                <label>Heart Rate</label>
                <FormControl
                  ref={inputValueHeartRate}
                  type="number"
                  placeholder="Your Record..."
                  min={0}
                />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="input-container">
              <ListGroup.Item variant="danger">
                <label>Blood Pressure</label>
                <FormControl
                  ref={inputValueBp}
                  type="number"
                  placeholder="Your Record..."
                  min={0}
                />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="input-container">
              <ListGroup.Item variant="secondary">
                <label>Sugar</label>
                <FormControl
                  ref={inputValueSugar}
                  type="number"
                  placeholder="Your Record..."
                  min={0}
                />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="input-container">
              <ListGroup.Item variant="danger">
                <label>Oxygen</label>
                <FormControl
                  ref={inputValueOxygen}
                  type="number"
                  placeholder="Your Record..."
                  min={0}
                />
              </ListGroup.Item>
            </ListGroup>
            <Button type="submit" variant="outline-success">
              Save
            </Button>{" "}
            {/* <Button variant="outline-danger">Delete</Button> */}
          </Form>
        </Row>

        <Row className="data-wrapper">
          {/* {units.length<1 && <h4>No records yet</h4>} */}
          <Data />
        </Row>
      </Container>
    </div>
  );
};

export default Main;
