import "./Main.scss";
import Data from "../Data/Data";
import { useContext, useRef } from "react";
import { MedicalContext } from "../../MedicalContext";
import { Form, FormControl, Container, Row, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { v4 as uuidv4 } from "uuid";
import { FaWeight } from "react-icons/fa";

const Main = () => {
  const id = uuidv4();

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
      { date: inputValueDate.current.value },
      { text: inputValueBp.current.value, type: "Bp" },
      { text: inputValueHeartRate.current.value, type: "HeartRate" },
      { text: inputValueSugar.current.value, type: "sugar" },
      { text: inputValueOxygen.current.value, type: "oxygen" },
      { text: inputValueWeight.current.value, type: "Weight" },
    ]);

    // icon:<FaWeight className='icon'/>,
    //^input will show on top
    inputValueDate.current.value = "";
    inputValueHeartRate.current.value = "";
    inputValueBp.current.value = "";
    inputValueOxygen.current.value = "";
    inputValueWeight.current.value = "";
    inputValueSugar.current.value = "";
  };

  return (
    <div className="Main">
      <Container>
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
          <Data />
        </Row>
        <Button className="logOut">Log Out</Button>
      </Container>
    </div>
  );
};

export default Main;
