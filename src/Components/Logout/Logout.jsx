import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../img/pink-pic.jpg"
import "./Logout.scss";

const Logout = () => {
  return (
    <div className="Logout">
<div><img src={logo} alt="logo"/></div>
     
        <NavLink className="link"  to="/">
          <Button className="logOut">Log Out</Button>
        </NavLink>
     
    </div>
  );
};

export default Logout;
