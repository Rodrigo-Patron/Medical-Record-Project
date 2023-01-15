import "./Main.scss";
import Data from "../Data/Data";
import { useContext, useRef } from "react";
import { MedicalContext } from "../../MedicalContext";
<<<<<<< HEAD
import { Form,FormControl,Container,Row,Button ,Card } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import {HeartPulseFill} from 'react-bootstrap-icons'
import {BsDropletFill} from 'react-bootstrap-icons'
import DataGraph from "../graph/DataGraph";


=======
import { Form, FormControl, Container, Row, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Logout from "../Logout/Logout";
import { useState } from "react";
>>>>>>> 7eb3cc1d37ff8a559f4fe204f7d328129f44b6ae

const Main = () => {
  //! Hide and show text
  const [show, setShow] = useState(true);

  const inputValueBp = useRef();
  const inputValueHeartRate = useRef();
  const inputValueSugar = useRef();
  const inputValueOxygen = useRef();
  const inputValueWeight = useRef();
  const inputValueDate = useRef();

<<<<<<< HEAD
  const {
      bp,heartRate,sugar,
      setHeartRate,
      setBp,
      setSugar,
      oxygen,
      setOxygen,
      weight,
      setWeight,
  } = useContext(MedicalContext);
=======
  const { units, setUnits } = useContext(MedicalContext);
>>>>>>> 7eb3cc1d37ff8a559f4fe204f7d328129f44b6ae

  const submitHandler = (e) => {
    e.preventDefault();
    setUnits([
      {
        date: inputValueDate.current.value,
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
      },
      ...units,
    ]);

    //^input will show on top
    inputValueDate.current.value = "";
    inputValueHeartRate.current.value = "";
    inputValueBp.current.value = "";
    inputValueOxygen.current.value = "";
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

  return (
    <div className="Main">
      <Container>
        <Logout />
        <Row className="wrapper">
<<<<<<< HEAD
       
        <h3>Hallo....Please note down your records!</h3>

        <Form className="date">
         <label>Select a date</label><br/>
          <input type="date" />
         </Form>
        <ListGroup className="input-container">
      <ListGroup.Item variant="danger">
        <Form onSubmit={submitHandler}>
          <label>Weight</label>
          <FormControl ref={inputValueWeight} type="number" placeholder="Your Record..."/>
          <Button type="submit" variant="outline-success">Save</Button>{" "}
          <Button variant="outline-danger">Delete</Button>
        </Form>
      </ListGroup.Item>
     </ListGroup>

     <ListGroup className="input-container">
      <ListGroup.Item variant="secondary">
        <Form onSubmit={submitHandler}>
          <label>Heart Rate</label>
          <FormControl ref={inputValueHeartRate} type="number" placeholder="Your Record..."/>
          <Button type="submit" variant="outline-success">Save</Button>{" "}
          <Button variant="outline-danger">Delete</Button>
        </Form>
      </ListGroup.Item>
     </ListGroup>

     <ListGroup className="input-container">
      <ListGroup.Item variant="danger">
        <Form onSubmit={submitHandler}>
          <label>Blood Pressure</label>
          <FormControl ref={inputValueBp} type="number" placeholder="Your Record..."/>
          <Button type="submit" variant="outline-success">Save</Button>{" "}
          <Button variant="outline-danger">Delete</Button>
        </Form>
      </ListGroup.Item>
     </ListGroup>

     <ListGroup className="input-container">
      <ListGroup.Item variant="secondary">
        <Form onSubmit={submitHandler}>
          <label>Sugar</label>
          <FormControl ref={inputValueSugar} type="number" placeholder="Your Record..."/>
          <Button type="submit" variant="outline-success">Save</Button>{" "}
          <Button variant="outline-danger">Delete</Button>
        </Form>
      </ListGroup.Item>
     </ListGroup>

     <ListGroup className="input-container">
      <ListGroup.Item variant="danger">
        <Form onSubmit={submitHandler}>
          <label>Oxygen</label>
          <FormControl ref={inputValueOxygen} type="number" placeholder="Your Record..."/>
          <Button type="submit" variant="outline-success">Save</Button>{" "}
          <Button variant="outline-danger">Delete</Button>
        </Form>
      </ListGroup.Item>
     </ListGroup>
  </Row>

   <Row className="data-wrapper">
    <Data/>
   </Row>
  <div className='buttontoGetdata'>
      
      <Button variant="success"><HeartPulseFill size='70' color='red'/><h3>Heart Rate</h3></Button>{' '}
      <Button variant="warning">Blood Presure</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
  </div>
 <div className="Chart">
  <DataGraph/>
  
 </div>

   <Button className="logOut">Log Out</Button>
=======
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
          {show && <Data />}
        </Row>
>>>>>>> 7eb3cc1d37ff8a559f4fe204f7d328129f44b6ae
      </Container>
    </div>
  );
};

export default Main;
