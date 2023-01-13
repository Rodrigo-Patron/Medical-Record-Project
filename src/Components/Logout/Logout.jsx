import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Logout.scss";

const Logout = () => {
  return (
    <div className="Logout">
      <NavLink to="/">
        <Button className="logOut">Log Out</Button>
      </NavLink>
    </div>
  );
};

export default Logout;
