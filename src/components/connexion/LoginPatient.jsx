import React, { useState,useEffect } from "react";
import "../covidTest/LogIn/LogIn.scss";
import imgLog from "./loginpng.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import {Container} from 'react-bootstrap'
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Alert from '@material-ui/lab/Alert';
export default function LoginPatient() {
  const [dataAdmin, setdataAdmin] = useState({});
  const [isPatient,setisPatiebt]= useState(false)
  const [resLogin,setresLogin]= useState()

  const history = useHistory();
  const HomePage = () => {
    history.push("/");
  };
  const onSubmit = async () => {
    console.log(dataAdmin);
    
   
          await axios.post(`http://localhost:8000/api/login_check`,dataAdmin).then((result) =>{
            const alertLogSuss= <Alert variant="filled" severity="success">login Success</Alert>
            setresLogin(alertLogSuss)
            setTimeout(() => {
                  console.log(result);
            history.push({pathname:"/dashPatiente",data:result.data});
            }, 500);
        
          }
            ).catch(err =>{
             const alertLogdenie = <Alert variant="filled" severity="error">{err.response.data}</Alert>
             // const alertLogdenie = <Alert variant="filled" severity="error">error</Alert>

              setresLogin(alertLogdenie)
              //console.log(err.response.data);
            })
        
  };

  return (
    <div className="LoginTest">
     
      <div className="imgcontainer">
        <div className="leftArrow">
            <Container>
            <Button variant="light" onClick={HomePage}>
            
            <ArrowBackIosIcon> </ArrowBackIosIcon>
            <span style={{ fontSize: "1.5" }}> Home </span>
          </Button>
            </Container>
        
        </div>
        <img src={imgLog} width="100%" />
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          
          <h6> Email address </h6>
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={dataAdmin["email"]}
          onChange={(e) =>
            setdataAdmin({
              ...dataAdmin,
              email: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
          
          <h6> Password </h6>
        </Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={dataAdmin["identifier"]}
          onChange={(e) =>
            setdataAdmin({
              ...dataAdmin,
              identifier: e.target.value,
            })
          }
        />
        <Button
          variant="primary"
          type="submit"
          style={{
            marginTop: "5px",marginBottom:"8px"
          }}
          onClick={onSubmit}
        >
          Submit
        </Button>
        
        {resLogin}
      </Form.Group>
    </div>
  );
}
