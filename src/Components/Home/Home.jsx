import "./Home.scss";

import { useContext } from "react";
import { MedicalContext } from "../../MedicalContext";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const { setUser, user } = useContext(MedicalContext);

  return (
    <Container className="Home">
      <Row>
        <h1>My Medical Records</h1>
      </Row>
      <Row className="rowContainer">
        <Register />
        <Login />
      </Row>
    </Container>
  );
};

export default Home;
