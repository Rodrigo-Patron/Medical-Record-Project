import { Button, Form } from "react-bootstrap";
import "./Edit.scss";
import { useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MedicalContext } from "../../MedicalContext";
import { NavLink } from "react-router-dom";

const Edit = () => {
  const { units, setUnits } = useContext(MedicalContext);

  const { type } = useParams();
  const inputValue = useRef();
  const navigate = useNavigate();

  const findTheEditingUnit = units.find((item) => item.type === type);

  const confirmHandler = () => {
    if (!inputValue.current.value) {
      return;
    } else {
      const editedUnits = units.map((item) =>
        item.type === type
          ? { ...item, number: inputValue.current.value }
          : item
      );

      setUnits(editedUnits);
      navigate("/main");
    }
  };

  return (
    <div className="Edit">
      <Form className="formContainer">
        <Form.Label>{findTheEditingUnit.type}</Form.Label>
        <Form.Control
          type="number"
          ref={inputValue}
          defaultValue={findTheEditingUnit.number}
          min={0}
        />
        <div className="Btn">
          <Button onClick={confirmHandler}>Confirm</Button>
          <NavLink to="/main">
            <Button>Cancel</Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};

export default Edit;
