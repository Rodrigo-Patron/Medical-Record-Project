import "./Home.scss";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      {/* Here goes the background */}

      <h1>WELCOME TO MEDICAL-RECORD APP</h1>

      {/* Here goes the Register: Input email, password and button to submit */}

      <form>
        <input type="email" placeholder="Type Email" />
        <input type="password" placeholder="Type Password" />
        <Button variant="dark">Register</Button>
      </form>

      {/* Here goes the Login : Input email, password and button to submit.. once we click on submit it takes you to another page "MAIN"
      
      
      */}
      <form>
        <input type="email" placeholder="Type Email" />
        <input type="password" placeholder="Type Password" />
        <NavLink to="main">
          <Button variant="dark">Log in</Button>
        </NavLink>
      </form>
    </div>
  );
};

export default Home;
