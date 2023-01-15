import "./Main.scss";
import Data from "../Data/Data";
import { useContext, useRef } from "react";
import { MedicalContext } from "../../MedicalContext";
import { Form,FormControl,Container,Row,Button ,Card } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import {HeartPulseFill} from 'react-bootstrap-icons'
import {BsDropletFill} from 'react-bootstrap-icons'
import DataGraph from "../graph/DataGraph";



const Main = () => {
  const inputValueBp = useRef();
  const inputValueHeartRate = useRef();
  const inputValueSugar = useRef();
  const inputValueOxygen = useRef();
  const inputValueWeight = useRef();

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

  const submitHandler = (e) => {
    e.preventDefault();

    setBp([inputValueBp.current.value,...bp]);
    inputValueBp.current.value = "";


    setHeartRate([inputValueHeartRate.current.value,...heartRate]);
    inputValueHeartRate.current.value = "";

    setSugar([inputValueSugar.current.value,...sugar]);
    inputValueSugar.current.value = "";

    setOxygen([inputValueOxygen.current.value,...oxygen]);
    inputValueOxygen.current.value = "";

    setWeight([inputValueWeight.current.value,...weight]);
    inputValueWeight.current.value = "";
  };

  return (
    <div className="Main">
      <Container>
        
        <Row className="wrapper">
       
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
      </Container>


     
    </div>
  );
};

export default Main;
