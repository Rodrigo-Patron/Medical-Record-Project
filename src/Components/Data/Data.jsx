import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./Data.scss";
import { useContext } from "react";
import { MedicalContext } from "../../MedicalContext";
import { FaHeartbeat } from "react-icons/fa";
import {FaWeight} from "react-icons/fa";
import {BsDropletFill} from "react-icons/bs";
import {SiGoldenline} from "react-icons/si";

const Data = () => {
  const {units,setUnits } = useContext(MedicalContext);
  console.log(units);

  //& Deleting task function
 const deleteHandler=(unit)=>{
    const filtArr = units.filter(item=>item.type !==unit.type)
      setUnits(filtArr)
 }
 



      // &Editing

const editHandler=()=>{
  console.log("hi");
  }

  return (
    <div className="Data">

      <ListGroup>
{units && units.map((item,i) =><ListGroup.Item variant="secondary" key={i}className='listItem'>
  {console.log(item)}
   
    <h3> Posted on <span className='date'>{item.date}</span></h3>
    <hr/>
            <div className='unit'>
              {/* {item.icon} */}
              <div>
                <h4> {item.type}: <span className='numbers'>{item.text} mmHg </span></h4>
                <div>
                  <NavLink to={item.type}><Button onClick={editHandler} variant="outline-success">Edit</Button>{' '}</NavLink>
                  <Button onClick={()=>deleteHandler(item)} variant="outline-danger">Delete</Button>{' '}
                </div>
              </div>
            </div>

            <hr/>
            
            {/* <div className='unit'>
              <FaHeartbeat className='icon'/>
              <div>
                <h4> Heart Rate: <span className='numbers'>{item.heartRate} bpm</span></h4>
                <div>
                  <NavLink to={item.id}><Button onClick={editHandler} variant="outline-success">Edit</Button>{' '}</NavLink>
                  <Button onClick={()=>deleteHandler(item)} variant="outline-danger">Delete</Button>{' '}
                </div>
              </div>
            </div>

            <hr/>
            <div className='unit'>
            <FaHeartbeat className='icon'/>
            <div>
              <h4> Sugar:<span className='numbers'> {item.sugar} mM</span></h4>
              
                <div>
                  <NavLink to={item.id}><Button onClick={editHandler} variant="outline-success">Edit</Button>{' '}</NavLink>
                  <Button onClick={()=>deleteHandler(item)} variant="outline-danger">Delete</Button>{' '}
                </div>
              </div>
            </div>

            <hr/>
            <div className='unit'>
              <SiGoldenline className='icon'/>
              <div>
                <h4> Oxygen:<span className='numbers'>{item.oxygen} LPM</span></h4>
                <div>
                  <NavLink to={item.id}><Button onClick={editHandler} variant="outline-success">Edit</Button>{' '}</NavLink>
                  <Button onClick={()=>deleteHandler(item)} variant="outline-danger">Delete</Button>{' '}
                </div>
              </div>
            </div>

            <hr/>
            <div className='unit'>
              <FaWeight className='icon'/>
              <div>
                <h4> Weight: <span className='numbers'>{item.weight} Kg</span></h4>
                <div>
                  <NavLink to={item.id}><Button onClick={editHandler} variant="outline-success">Edit</Button>{' '}</NavLink>
                  <Button onClick={()=>deleteHandler(item)} variant="outline-danger">Delete</Button>{' '}
                </div>
              </div>
            </div> */}
           
      </ListGroup.Item>)}
        </ListGroup>
      
    </div>
  );
};

export default Data;
