import React, { Component } from "react";
import img1 from "../image1.jpg";
import { Link, Router } from "react-router-dom";

import "./dash.css";
import {
    //Card,
    Button
} from "react-bootstrap";
import { useHistory } from "react-router-dom"

export default function Dashe() {
    const history = useHistory()

    return ( <
        >
        <
        div className = "alldiv" >
        <
        img src = { img1 }
        width = "1000"
        height = "300" / >
        <
        div className = "textdiv" >
        <
        h3 > Making an appointment
        for the covide - 19 diagnostic test < /h3>{" "} <
        ul >
        <
        li >
        <
        Button className = "btn1"
        variant = "primary"
        onClick = {
            () => {
                history.push("/Connexion")
            }
        } > { " " }
        Patient < i class = "bi bi-arrow-right-circle" > < /i>{" "} < /
        Button > { " " } <
        /li>{" "} <
        li >
        <
        Button className = "btn2"
        variant = "primary"
        onClick = {
            () => {
                history.push("/login")
            }
        } > { " " }
        Covide - 19 Tester { " " } <
        /Button>{" "} < /
        li > { " " } <
        li > { " " } <
        Button href = "https://www.worldometers.info/coronavirus/country/democratic-republic-of-the-congo/"
        target = "_blank"
        className = "btn3"
        variant = "primary" > { " " }
        Statut Corona { " " } <
        /Button>{" "} < /
        li > { " " } <
        /ul>{" "} < /
        div > { " " } <
        /div>{" "} < / >
    );
}