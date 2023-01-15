import "./Home.scss";

<<<<<<< HEAD
const Home = () => {
  return (
    <div className="Home">
      {/* Here goes the background */}

      <h1>My Medical</h1>
=======
import { useContext } from "react";
import { MedicalContext } from "../../MedicalContext";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { Container, Row } from "react-bootstrap";
>>>>>>> 7eb3cc1d37ff8a559f4fe204f7d328129f44b6ae

const Home = () => {
  const { setUser, user } = useContext(MedicalContext);

  return (
    <Container className="Home">
      <Row>
        <h1>
          My Medical <br /> Records
        </h1>
      </Row>
      <Row className="rowContainer">
        <Register />
        <Login />
      </Row>
    </Container>
  );
};

export default Home;
