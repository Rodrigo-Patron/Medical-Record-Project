import "./Home.scss";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import medicalPic from "../../img/pink-pic.jpg";

const Home = () => {
  return (
    <div className="Home">
      <h1>My Medical-Record App</h1>
      <div className="homeContainer">
        <img src={medicalPic} alt="" />
        <div className="formContainer">
          <Form>
            <h2>Register</h2>
            <Form.Group className="formBox">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Type Email" />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Type Password" />
              <div className="Btn">
                <Button variant="dark">Register</Button>
              </div>
            </Form.Group>
          </Form>
          <Form>
            <h2>Log in</h2>
            <Form.Group className="formBox">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Type Email" />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Type Password" />
              <div className="Btn">
                <NavLink to="main">
                  <Button variant="dark">Log in</Button>
                </NavLink>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Home;
