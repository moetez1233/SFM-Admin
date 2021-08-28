import React, { Component } from "react";

import img1 from "../../image1.jpg";
import "../dash.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import {
  //Card,
  Button,
} from "react-bootstrap";
import AddForm from "./AddForm";

export default function Connexion() {
  const history = useHistory();

  return (
    <>
      <div className="alldiv">
        <img src={img1} width="1000" height="300" />
        <div className="textdiv">
          <h3> Making an appointment for the covide - 19 diagnostic test </h3>
          <ul>
            <li>
              <Button
                className="btn1"
                onClick={() => history.push("loginPatient")}
              >
                SignIn
              </Button>
            </li>
            <li>
              <Button
                className="btn1"
                onClick={() => history.push("SignUpPatient")}
              >
                SignUp
              </Button>
            </li>
            <li>
              <Button className="btn1" onClick={() => history.push("/")}>
                
                <ArrowBackIosIcon> </ArrowBackIosIcon>
                <span style={{ fontSize: "1.2" }}>Home</span>
              </Button>
            </li>
            <li>
              <h3> Welcom Patient </h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
