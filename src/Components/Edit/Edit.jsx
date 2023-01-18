import { Button, Form } from "react-bootstrap";
import "./Edit.scss";
import { useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MedicalContext } from "../../MedicalContext";
import { NavLink } from "react-router-dom";

const Edit = () => {
  const { setUser, currentUser, setCurrentUser, setCurrentUserV2 } =
    useContext(MedicalContext);

  const { recordId } = useParams();
  const inputValue = useRef();
  const navigate = useNavigate();

  const findTheEditingUnit = currentUser.units.find(
    (item) => item.recordId === recordId
  );

  const confirmHandler = () => {
    if (!inputValue.current.value) {
      return;
    } else {
      const editedUnits = currentUser.units.map((item) =>
        item.recordId === recordId
          ? { ...item, number: inputValue.current.value }
          : item
      );

      // WE NEED TO UPDATE THE CURRENT USER INPUT
      setCurrentUserV2(editedUnits);
      // setUser(editedUnits);
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
