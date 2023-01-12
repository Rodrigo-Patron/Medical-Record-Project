import { Button, Form } from "react-bootstrap";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import medicalPic from "../../img/pink-pic.jpg";
import { useRef, useContext } from "react";
import { MedicalContext } from "../../MedicalContext";

const Home = () => {
  const { setUser, user } = useContext(MedicalContext);

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const submitRegisterForm = (e) => {
    e.preventDefault();

    console.log(inputName.current.value);
    console.log(inputEmail.current.value);
    console.log(inputPassword.current.value);

    setUser([
      {
        name: inputName.current.value,
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      },
      ...user,
    ]);
  };

  const submitLoginForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Home">
      <h1>My Medical-Record App</h1>
      <div className="homeContainer">
        <img src={medicalPic} alt="" />
        <div className="formContainer">
          {/* REGISTER FORM */}

          <Form onSubmit={submitRegisterForm}>
            <h2>Register</h2>
            <Form.Group className="formBox">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                ref={inputName}
                placeholder="Type name"
                required
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                ref={inputEmail}
                placeholder="Type email"
                required
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={inputPassword}
                placeholder="Type password"
                required
              />
              <div className="Btn">
                <Button type="submit">Register</Button>
              </div>
            </Form.Group>
          </Form>

          {/* LOGIN FORM */}

          <Form onSubmit={submitLoginForm}>
            <h2>Log in</h2>
            <Form.Group className="formBox">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Type email" />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Type password" />
              <div className="Btn">
                <NavLink to="main">
                  <Button type="submit">Log in</Button>
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
