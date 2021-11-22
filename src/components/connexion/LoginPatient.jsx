import React, { useState,useEffect,useContext } from "react";
import './Login.scss'
import imgLog from "./loginpng.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import {Container} from 'react-bootstrap'
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import { Login } from "../../Context/AuthContext/ApiCalls";
import { AuthContext } from "../../Context/AuthContext/AuthContex";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:500,
marginTop:20,
  marginLeft:"auto",
  marginRight:"auto",
 /* '@media(maxWidth: 575px)' : {
    width: '80%'
  }*/
  
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

});
export default function LoginPatient() {
  const [dataAdmin, setdataAdmin] = useState({});
  const [isPatient,setisPatiebt]= useState(false)
  const [resLogin,setresLogin]= useState("you need to connect")
  const classes = useStyles();
const {isFetching,user,dispatch,coneecetSucc,setconeecetSucc} = useContext(AuthContext)

  const history = useHistory();
  const HomePage = () => {
    history.push("/");
  };
  const onSubmit = async (e) => {
    e.preventDefault()
    //console.log(dataAdmin);
    //history.push({pathname:"/dashPatiente"});
    Login(dataAdmin,dispatch)
  
   
   
 
   
          /*await axios.post(`http://localhost:3000/api/auth`,dataAdmin).then((result) =>{
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
            })*/
        
  };

  return (
  <>
    <Card className={classes.root}>
      <CardContent>
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
          value={dataAdmin["password"]}
          onChange={(e) =>
            setdataAdmin({
              ...dataAdmin,
              password: e.target.value,
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
        
        <div> {user && resLogin }</div>
      </Form.Group>
      </CardContent>
     
    </Card>
    
          </>

  );
}
