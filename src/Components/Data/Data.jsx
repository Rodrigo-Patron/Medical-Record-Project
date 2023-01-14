import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Data.scss";
import { useContext } from "react";
import { MedicalContext } from "../../MedicalContext";
import { Col, Row } from "react-bootstrap";

const Data = () => {
  const { units, setUnits } = useContext(MedicalContext);

  //& Deleting task function
  const deleteHandler = (unit) => {
    const filtArr = units.filter((item) => item.type !== unit.type);
    setUnits(filtArr);
  };

  return (
    <div className="Data">
      {units &&
        units.map((item, i) => (
          <Row className="row" key={i}>
            <Col xl="4" className="cols one">
              {item.icon} {item.type}
            </Col>

            <Col xl="4" className="cols two">
              <span className="measure">
                {item.number} {item.unitMeasure}
              </span>
            </Col>

            <Col xl="4" className="cols three">
              <Button
                onClick={() => deleteHandler(item)}
                variant="outline-danger"
              >
                Delete
              </Button>{" "}
              <NavLink to={item.type}>
                <Button variant="outline-success">Edit</Button>{" "}
              </NavLink>
            </Col>
          </Row>
        ))}

      {/* <ListGroup>
{units && units.map((item,i) =><ListGroup.Item variant="secondary" key={i}className='listItem'>
  
   
  
            <div className='unit'>
              
              
                <h4> {item.type}: <span className='numbers'>{item.number} {item.unitMeasure}</span></h4>
                
                  <NavLink to={item.type}><Button onClick={editHandler} variant="outline-success">Edit</Button>{' '}</NavLink>
                  <Button onClick={()=>deleteHandler(item)} variant="outline-danger">Delete</Button>{' '}
               
             
            </div>

            </ListGroup.Item>)}
        </ListGroup> */}
    </div>
  );
};

export default Data;
