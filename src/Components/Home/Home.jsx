import "./Home.scss";
import medicalPic from "../../img/pink-pic.jpg";
import { useContext } from "react";
import { MedicalContext } from "../../MedicalContext";
import Register from "../Register/Register";
import Login from "../Login/Login";

const Home = () => {
  const { setUser, user } = useContext(MedicalContext);

  return (
    <div className="Home">
      <h1>My Medical-Record App</h1>
      <div className="homeContainer">
        <img src={medicalPic} alt="" />
        <div className="formContainer">
          <Register />

          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
