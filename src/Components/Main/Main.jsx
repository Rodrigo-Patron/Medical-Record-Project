import "./Main.scss";
import Data from "../Data/Data";
import { useContext, useEffect, useRef } from "react";
import { MedicalContext } from "../../MedicalContext";
import DataGraph from "../Graph/DataGraph";
import { Form, FormControl, Container, Row, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Logout from "../Logout/Logout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  //! Hide and show text
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const inputValueBp = useRef();
  const inputValueHeartRate = useRef();
  const inputValueSugar = useRef();
  const inputValueOxygen = useRef();
  const inputValueWeight = useRef();
  const inputValueDate = useRef();

  const { units, setUnits, currentUser } = useContext(MedicalContext);

  const submitHandler = (e) => {
    e.preventDefault();

    // setUnits([
    //   {
    //     date: inputValueDate.current.value,
    //     number: inputValueBp.current.value,
    //     type: "Blood pressure",
    //     unitMeasure: "mmHg",
    //   },
    //   {
    //     number: inputValueHeartRate.current.value,
    //     type: "HeartRate",
    //     unitMeasure: "Bpm",
    //   },
    //   {
    //     number: inputValueSugar.current.value,
    //     type: "Sugar",
    //     unitMeasure: "mmol/L",
    //   },
    //   {
    //     number: inputValueOxygen.current.value,
    //     type: "Oxygen",
    //     unitMeasure: "mgL",
    //   },
    //   {
    //     number: inputValueWeight.current.value,
    //     type: "Weight",
    //     unitMeasure: "kg",
    //   },
    //   ...units,
    // ]);

    setUnits([
      {
        userId: currentUser.userId,
      },
      {
        date: inputValueDate.current.value,
        recordId: 0,
        number: inputValueHeartRate.current.value,
        type: "HeartRate",
        unitMeasure: "Bpm",
      },
      {
        recordId: 1,
        number: inputValueOxygen.current.value,
        type: "Oxygen",
        unitMeasure: "mgL",
      },
      {
        recordId: 2,
        number: inputValueBp.current.value,
        type: "Blood pressure",
        unitMeasure: "mmHg",
      },
      {
        recordId: 3,
        number: inputValueSugar.current.value,
        type: "Sugar",
        unitMeasure: "mmol/L",
      },
      {
        recordId: 4,
        number: inputValueWeight.current.value,
        type: "Weight",
        unitMeasure: "kg",
      },

      ...units,
    ]);

    // try to store the data like this

    // const data = [
    // {
    // userId: 1,
    // records: [
    // { recordId: 0 ,number: "543", type: "HeartRate", unitMeasure: "Bpm" },
    // { recordId: 1 ,number: "6534", type: "Oxygen", unitMeasure: "mgL" },
    // ],
    // },{
    // userId: 2,
    // records: [
    // { recordId: 0 , number: "543", type: "HeartRate", unitMeasure: "Bpm" },
    // { recordId: 1 , number: "6534", type: "Oxygen", unitMeasure: "mgL" },
    // ],
    // }
    // ];

    //^input will show on top
    inputValueDate.current.value = "";
    inputValueHeartRate.current.value = "";
    inputValueBp.current.value = "";
    inputValueOxygen.current.value = "";
    //
    inputValueWeight.current.value = "";
    inputValueSugar.current.value = "";

    alert("Your records are saved");
  };

  //^ Hide function
  const hideHandler = () => {
    setShow(false);
  };

  //^ Show function
  const showHandler = () => {
    setShow(true);
  };

  useEffect(() => {
    if (Object.keys(currentUser).length === 0) {
      console.log(currentUser);
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div className="Main">
      <Container>
        <Logout />
        <Row className="wrapper">
          <h3>Please note down your records</h3>
          <Form onSubmit={submitHandler}>
            <label>Select a date</label>
            <br />
            <FormControl
              ref={inputValueDate}
              type="date"
              className="date-select"
              required
            />
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
            <Button onClick={showHandler} variant="outline-info">
              Show
            </Button>{" "}
            <Button onClick={hideHandler} variant="outline-danger">
              Hide
            </Button>
          </Form>
        </Row>

        <Row className="data-wrapper">
          {units.length < 1 && <h4>No records yet</h4>}
          {units.length > 1 && <h4>My Records</h4>}
          {show && <Data />}
          {show && <DataGraph />}
        </Row>
      </Container>
    </div>
  );
};

export default Main;
